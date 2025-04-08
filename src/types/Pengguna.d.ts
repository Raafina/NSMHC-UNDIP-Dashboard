interface IUpdatePenggunaPayload {
    nama_lengkap_pengguna?: string;
    usia_pengguna?: number;
    pendidikan_terakhir_pengguna?: string;
    pekerjaan_terakhir_pengguna?: string;
    alamat?: string;
    no_hp?: string;
    nama_lengkap_anak?: string;
    usia_anak?: number;
    pendidikan_terakhir_anak?: string;
}

interface IUpdatePenggunaPasswordPayload {
    email?: string;
    password?: string;
    password_confirmation?: string;
}
export type { IUpdatePenggunaPayload, IUpdatePenggunaPasswordPayload };