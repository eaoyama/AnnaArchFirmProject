export class Client {

    constructor(
        public f_name: string,
        public m_name: string,
        public l_name: string,
        public email: string,
        public phone: string,
        public profile_notes: string,
        public c_id: number
        
    ){}


}

export class Address {

    constructor(
        public address1: string,
        public address2: string,
        public city: string,
        public state: string,
        public zip: string,
        public address_notes: string,
        public a_id: number
        
    ){}


}