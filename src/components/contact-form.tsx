
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Nama harus memiliki setidaknya 2 karakter.",
  }),
  email: z.string().email({
    message: "Harap masukkan alamat email yang valid.",
  }),
  phone: z.string().optional(),
  message: z.string().min(10, {
    message: "Pesan harus memiliki setidaknya 10 karakter.",
  }),
});

export function ContactForm() {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Di sini Anda bisa menambahkan logika pengiriman email atau penyimpanan ke database.
    // Untuk saat ini, kita hanya akan menampilkan notifikasi.
    console.log(values);
    toast({
      title: "Pesan Terkirim!",
      description: `Terima kasih, ${values.name}. Kami akan segera menghubungi Anda kembali.`,
    });
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nama Lengkap</FormLabel>
              <FormControl>
                <Input placeholder="Nama Anda" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid sm:grid-cols-2 gap-6">
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Alamat Email</FormLabel>
                <FormControl>
                    <Input placeholder="email@contoh.com" {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
            <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Nomor Telepon (Opsional)</FormLabel>
                <FormControl>
                    <Input placeholder="0812..." {...field} />
                </FormControl>
                <FormMessage />
                </FormItem>
            )}
            />
        </div>
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pesan Anda</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tuliskan detail pertanyaan atau kebutuhan sesi foto Anda di sini..."
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" size="lg" className="w-full text-base rounded-md">
          <Send className="mr-2 h-5 w-5" />
          Kirim Pesan
        </Button>
      </form>
    </Form>
  );
}
