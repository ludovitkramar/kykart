## Boot from grub rescue console

`insmod linux`

`ls`
Find your boot partition, if it is a separate partition, don't include `/boot`.
`ls (hd0,msdos1)/boot`
Find the file names for your linux and initrd.
`set root=(hd0,msdos1)`
`linux /boot/vmlinuz-linux-zen root=/dev/vda1`
Specify correct root partition or uuid.
`initrd /boot/initramfs-linux-zen.img`
`boot`

<sup><sub>Written on 29-Dec-2021 by Ludovit Kramar</sub></sup>