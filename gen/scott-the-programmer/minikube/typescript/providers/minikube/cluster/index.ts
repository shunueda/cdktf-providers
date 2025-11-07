// https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable addons. see `minikube addons list` for a list of valid addon names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#addons Cluster#addons}
  */
  readonly addons?: string[];
  /**
  * A set of apiserver IP Addresses which are used in the generated certificate for kubernetes.  This can be used if you want to make the apiserver available from outside the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#apiserver_ips Cluster#apiserver_ips}
  */
  readonly apiserverIps?: string[];
  /**
  * The authoritative apiserver hostname for apiserver certificates and connectivity. This can be used if you want to make the apiserver available from outside the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#apiserver_name Cluster#apiserver_name}
  */
  readonly apiserverName?: string;
  /**
  * A set of apiserver names which are used in the generated certificate for kubernetes.  This can be used if you want to make the apiserver available from outside the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#apiserver_names Cluster#apiserver_names}
  */
  readonly apiserverNames?: string[];
  /**
  * The apiserver listening port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#apiserver_port Cluster#apiserver_port}
  */
  readonly apiserverPort?: number;
  /**
  * Duration of inactivity before the minikube VM is paused (default 1m0s) (Configured in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#auto_pause_interval Cluster#auto_pause_interval}
  */
  readonly autoPauseInterval?: number;
  /**
  * If set, automatically updates drivers to the latest version. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#auto_update_drivers Cluster#auto_update_drivers}
  */
  readonly autoUpdateDrivers?: boolean | cdktf.IResolvable;
  /**
  * The base image to use for docker/podman drivers. Intended for local development.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#base_image Cluster#base_image}
  */
  readonly baseImage?: string;
  /**
  * Location to fetch kubectl, kubelet, & kubeadm binaries from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#binary_mirror Cluster#binary_mirror}
  */
  readonly binaryMirror?: string;
  /**
  * If true, cache docker images for the current bootstrapper and load them into the machine. Always false with --driver=none.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#cache_images Cluster#cache_images}
  */
  readonly cacheImages?: boolean | cdktf.IResolvable;
  /**
  * Duration until minikube certificate expiration, defaults to three years (26280h). (Configured in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#cert_expiration Cluster#cert_expiration}
  */
  readonly certExpiration?: number;
  /**
  * The name of the minikube cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#cluster_name Cluster#cluster_name}
  */
  readonly clusterName?: string;
  /**
  * CNI plug-in to use. Valid options: auto, bridge, calico, cilium, flannel, kindnet, or path to a CNI manifest (default: auto)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#cni Cluster#cni}
  */
  readonly cni?: string;
  /**
  * The container runtime to be used. Valid options: docker, cri-o, containerd (default: docker)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#container_runtime Cluster#container_runtime}
  */
  readonly containerRuntime?: string;
  /**
  * Number of CPUs allocated to Kubernetes. Use "max" to use the maximum number of CPUs. Use "no-limit" to not specify a limit (Docker/Podman only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#cpus Cluster#cpus}
  */
  readonly cpus?: string;
  /**
  * The cri socket path to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#cri_socket Cluster#cri_socket}
  */
  readonly criSocket?: string;
  /**
  * If set, delete the current cluster if start fails and try again. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#delete_on_failure Cluster#delete_on_failure}
  */
  readonly deleteOnFailure?: boolean | cdktf.IResolvable;
  /**
  * If set, disable CoreDNS verbose logging. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#disable_coredns_log Cluster#disable_coredns_log}
  */
  readonly disableCorednsLog?: boolean | cdktf.IResolvable;
  /**
  * Disables the filesystem mounts provided by the hypervisors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#disable_driver_mounts Cluster#disable_driver_mounts}
  */
  readonly disableDriverMounts?: boolean | cdktf.IResolvable;
  /**
  * If set, disables metrics reporting (CPU and memory usage), this can improve CPU usage. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#disable_metrics Cluster#disable_metrics}
  */
  readonly disableMetrics?: boolean | cdktf.IResolvable;
  /**
  * If set, disables optimizations that are set for local Kubernetes. Including decreasing CoreDNS replicas from 2 to 1. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#disable_optimizations Cluster#disable_optimizations}
  */
  readonly disableOptimizations?: boolean | cdktf.IResolvable;
  /**
  * Disk size allocated to the minikube VM (format: <number>[<unit>(case-insensitive)], where unit = b, k, kb, m, mb, g or gb)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#disk_size Cluster#disk_size}
  */
  readonly diskSize?: string;
  /**
  * The cluster dns domain name used in the Kubernetes cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#dns_domain Cluster#dns_domain}
  */
  readonly dnsDomain?: string;
  /**
  * Enable proxy for NAT DNS requests (virtualbox driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#dns_proxy Cluster#dns_proxy}
  */
  readonly dnsProxy?: boolean | cdktf.IResolvable;
  /**
  * Environment variables to pass to the Docker daemon. (format: key=value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#docker_env Cluster#docker_env}
  */
  readonly dockerEnv?: string[];
  /**
  * Specify arbitrary flags to pass to the Docker daemon. (format: key=value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#docker_opt Cluster#docker_opt}
  */
  readonly dockerOpt?: string[];
  /**
  * If true, only download and cache files for later use - don't install or start anything.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#download_only Cluster#download_only}
  */
  readonly downloadOnly?: boolean | cdktf.IResolvable;
  /**
  * Driver is one of the following - Windows: (hyperv, docker, virtualbox, vmware, qemu2, ssh) - OSX: (virtualbox, parallels, vmwarefusion, hyperkit, vmware, qemu2, docker, podman, ssh) - Linux: (docker, kvm2, virtualbox, qemu2, none, podman, ssh)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#driver Cluster#driver}
  */
  readonly driver?: string;
  /**
  * dry-run mode. Validates configuration, but does not mutate system state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#dry_run Cluster#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * if true, will embed the certs in kubeconfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#embed_certs Cluster#embed_certs}
  */
  readonly embedCerts?: boolean | cdktf.IResolvable;
  /**
  * A set of key=value pairs that describe configuration that may be passed to different components. 		The key should be '.' separated, and the first part before the dot is the component to apply the configuration to. 		Valid components are: kubelet, kubeadm, apiserver, controller-manager, etcd, proxy, scheduler 		Valid kubeadm parameters: ignore-preflight-errors, dry-run, kubeconfig, kubeconfig-dir, node-name, cri-socket, experimental-upload-certs, certificate-key, rootfs, skip-phases, pod-network-cidr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#extra_config Cluster#extra_config}
  */
  readonly extraConfig?: string[];
  /**
  * Number of extra disks created and attached to the minikube VM (currently only implemented for hyperkit, kvm2, qemu2, vfkit, and krunkit drivers)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#extra_disks Cluster#extra_disks}
  */
  readonly extraDisks?: number;
  /**
  * A set of key=value pairs that describe feature gates for alpha/experimental features.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#feature_gates Cluster#feature_gates}
  */
  readonly featureGates?: string;
  /**
  * Force minikube to perform possibly dangerous operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#force Cluster#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * If set, force the container runtime to use systemd as cgroup manager. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#force_systemd Cluster#force_systemd}
  */
  readonly forceSystemd?: boolean | cdktf.IResolvable;
  /**
  * Allow pods to use your GPUs. Options include: [all,nvidia,amd] (Docker driver with Docker container-runtime only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#gpus Cluster#gpus}
  */
  readonly gpus?: string;
  /**
  * Create Highly Available Multi-Control Plane Cluster with a minimum of three control-plane nodes that will also be marked for work.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#ha Cluster#ha}
  */
  readonly ha?: boolean | cdktf.IResolvable;
  /**
  * Enable host resolver for NAT DNS requests (virtualbox driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#host_dns_resolver Cluster#host_dns_resolver}
  */
  readonly hostDnsResolver?: boolean | cdktf.IResolvable;
  /**
  * The CIDR to be used for the minikube VM (virtualbox driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#host_only_cidr Cluster#host_only_cidr}
  */
  readonly hostOnlyCidr?: string;
  /**
  * NIC Type used for host only network. One of Am79C970A, Am79C973, 82540EM, 82543GC, 82545EM, or virtio (virtualbox driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#host_only_nic_type Cluster#host_only_nic_type}
  */
  readonly hostOnlyNicType?: string;
  /**
  * Location of the VPNKit socket used for networking. If empty, disables Hyperkit VPNKitSock, if 'auto' uses Docker for Mac VPNKit connection, otherwise uses the specified VSock (hyperkit driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#hyperkit_vpnkit_sock Cluster#hyperkit_vpnkit_sock}
  */
  readonly hyperkitVpnkitSock?: string;
  /**
  * List of guest VSock ports that should be exposed as sockets on the host (hyperkit driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#hyperkit_vsock_ports Cluster#hyperkit_vsock_ports}
  */
  readonly hyperkitVsockPorts?: string[];
  /**
  * External Adapter on which external switch will be created if no external switch is found. (hyperv driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#hyperv_external_adapter Cluster#hyperv_external_adapter}
  */
  readonly hypervExternalAdapter?: string;
  /**
  * Whether to use external switch over Default Switch if virtual switch not explicitly specified. (hyperv driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#hyperv_use_external_switch Cluster#hyperv_use_external_switch}
  */
  readonly hypervUseExternalSwitch?: boolean | cdktf.IResolvable;
  /**
  * The hyperv virtual switch name. Defaults to first found. (hyperv driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#hyperv_virtual_switch Cluster#hyperv_virtual_switch}
  */
  readonly hypervVirtualSwitch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#id Cluster#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Country code of the image mirror to be used. Leave empty to use the global one. For Chinese mainland users, set it to cn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#image_mirror_country Cluster#image_mirror_country}
  */
  readonly imageMirrorCountry?: string;
  /**
  * Alternative image repository to pull docker images from. This can be used when you have limited access to gcr.io. Set it to "auto" to let minikube decide one for you. For Chinese mainland users, you may use local gcr.io mirrors such as registry.cn-hangzhou.aliyuncs.com/google_containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#image_repository Cluster#image_repository}
  */
  readonly imageRepository?: string;
  /**
  * Insecure Docker registries to pass to the Docker daemon.  The default service CIDR range will automatically be added.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#insecure_registry Cluster#insecure_registry}
  */
  readonly insecureRegistry?: string[];
  /**
  * If set, install addons. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#install_addons Cluster#install_addons}
  */
  readonly installAddons?: boolean | cdktf.IResolvable;
  /**
  * Allow user prompts for more information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#interactive Cluster#interactive}
  */
  readonly interactive?: boolean | cdktf.IResolvable;
  /**
  * Locations to fetch the minikube ISO from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#iso_url Cluster#iso_url}
  */
  readonly isoUrl?: string[];
  /**
  * This will keep the existing kubectl context and will create a minikube context.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#keep_context Cluster#keep_context}
  */
  readonly keepContext?: boolean | cdktf.IResolvable;
  /**
  * The Kubernetes version that the minikube VM will use (ex: v1.2.3, 'stable' for v1.34.0, 'latest' for v1.34.0). Defaults to 'stable'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#kubernetes_version Cluster#kubernetes_version}
  */
  readonly kubernetesVersion?: string;
  /**
  * Enable experimental NVIDIA GPU support in minikube
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#kvm_gpu Cluster#kvm_gpu}
  */
  readonly kvmGpu?: boolean | cdktf.IResolvable;
  /**
  * Hide the hypervisor signature from the guest in minikube (kvm2 driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#kvm_hidden Cluster#kvm_hidden}
  */
  readonly kvmHidden?: boolean | cdktf.IResolvable;
  /**
  * The KVM default network name. (kvm2 driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#kvm_network Cluster#kvm_network}
  */
  readonly kvmNetwork?: string;
  /**
  * Simulate numa node count in minikube, supported numa node count range is 1-8 (kvm2 driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#kvm_numa_count Cluster#kvm_numa_count}
  */
  readonly kvmNumaCount?: number;
  /**
  * The KVM QEMU connection URI. (kvm2 driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#kvm_qemu_uri Cluster#kvm_qemu_uri}
  */
  readonly kvmQemuUri?: string;
  /**
  * IP Address to use to expose ports (docker and podman driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#listen_address Cluster#listen_address}
  */
  readonly listenAddress?: string;
  /**
  * Amount of RAM to allocate to Kubernetes (format: <number>[<unit>], where unit = b, k, m or g). Use "max" to use the maximum amount of memory. Use "no-limit" to not specify a limit (Docker/Podman only))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#memory Cluster#memory}
  */
  readonly memory?: string;
  /**
  * Kept for backward compatibility, value is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#mount Cluster#mount}
  */
  readonly mount?: boolean | cdktf.IResolvable;
  /**
  * Specify the 9p version that the mount should use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#mount_9p_version Cluster#mount_9p_version}
  */
  readonly mount9PVersion?: string;
  /**
  * Default group id used for the mount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#mount_gid Cluster#mount_gid}
  */
  readonly mountGid?: string;
  /**
  * Specify the ip that the mount should be setup on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#mount_ip Cluster#mount_ip}
  */
  readonly mountIp?: string;
  /**
  * The number of bytes to use for 9p packet payload
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#mount_msize Cluster#mount_msize}
  */
  readonly mountMsize?: number;
  /**
  * Additional mount options, such as cache=fscache
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#mount_options Cluster#mount_options}
  */
  readonly mountOptions?: string[];
  /**
  * Specify the port that the mount should be setup on, where 0 means any free port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#mount_port Cluster#mount_port}
  */
  readonly mountPort?: number;
  /**
  * The argument to pass the minikube mount command on start.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#mount_string Cluster#mount_string}
  */
  readonly mountString?: string;
  /**
  * Specify the mount filesystem type (supported types: 9p)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#mount_type Cluster#mount_type}
  */
  readonly mountType?: string;
  /**
  * Default user id used for the mount
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#mount_uid Cluster#mount_uid}
  */
  readonly mountUid?: string;
  /**
  * The named space to activate after start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#namespace Cluster#namespace}
  */
  readonly namespace?: string;
  /**
  * NIC Type used for nat network. One of Am79C970A, Am79C973, 82540EM, 82543GC, 82545EM, or virtio (virtualbox driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#nat_nic_type Cluster#nat_nic_type}
  */
  readonly natNicType?: string;
  /**
  * Use native Golang SSH client (default true). Set to 'false' to use the command line 'ssh' command when accessing the docker machine. Useful for the machine drivers when they will not start with 'Waiting for SSH'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#native_ssh Cluster#native_ssh}
  */
  readonly nativeSsh?: boolean | cdktf.IResolvable;
  /**
  * network to run minikube with. Used by docker/podman, qemu, kvm, and vfkit drivers. If left empty, minikube will create a new network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#network Cluster#network}
  */
  readonly network?: string;
  /**
  * Local folders to share with Guest via NFS mounts (hyperkit driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#nfs_share Cluster#nfs_share}
  */
  readonly nfsShare?: string[];
  /**
  * Where to root the NFS Shares, defaults to /nfsshares (hyperkit driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#nfs_shares_root Cluster#nfs_shares_root}
  */
  readonly nfsSharesRoot?: string;
  /**
  * If set, minikube VM/container will start without starting or configuring Kubernetes. (only works on new clusters)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#no_kubernetes Cluster#no_kubernetes}
  */
  readonly noKubernetes?: boolean | cdktf.IResolvable;
  /**
  * Disable checking for the availability of hardware virtualization before the vm is started (virtualbox driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#no_vtx_check Cluster#no_vtx_check}
  */
  readonly noVtxCheck?: boolean | cdktf.IResolvable;
  /**
  * The total number of nodes to spin up. Defaults to 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#nodes Cluster#nodes}
  */
  readonly nodes?: number;
  /**
  * Format to print stdout in. Options include: [text,json]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#output Cluster#output}
  */
  readonly output?: string;
  /**
  * List of ports that should be exposed (docker and podman driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#ports Cluster#ports}
  */
  readonly ports?: string[];
  /**
  * If set, download tarball of preloaded images if available to improve start time. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#preload Cluster#preload}
  */
  readonly preload?: boolean | cdktf.IResolvable;
  /**
  * Path to the qemu firmware file. Defaults: For Linux, the default firmware location. For macOS, the brew installation location. For Windows, C:\Program Files\qemu\share
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#qemu_firmware_path Cluster#qemu_firmware_path}
  */
  readonly qemuFirmwarePath?: string;
  /**
  * Registry mirrors to pass to the Docker daemon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#registry_mirror Cluster#registry_mirror}
  */
  readonly registryMirror?: string[];
  /**
  * The CIDR to be used for service cluster IPs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#service_cluster_ip_range Cluster#service_cluster_ip_range}
  */
  readonly serviceClusterIpRange?: string;
  /**
  * Path to the socket vmnet client binary (QEMU driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#socket_vmnet_client_path Cluster#socket_vmnet_client_path}
  */
  readonly socketVmnetClientPath?: string;
  /**
  * Path to socket vmnet binary (QEMU driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#socket_vmnet_path Cluster#socket_vmnet_path}
  */
  readonly socketVmnetPath?: string;
  /**
  * IP address (ssh driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#ssh_ip_address Cluster#ssh_ip_address}
  */
  readonly sshIpAddress?: string;
  /**
  * SSH key (ssh driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#ssh_key Cluster#ssh_key}
  */
  readonly sshKey?: string;
  /**
  * SSH port (ssh driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#ssh_port Cluster#ssh_port}
  */
  readonly sshPort?: number;
  /**
  * SSH user (ssh driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#ssh_user Cluster#ssh_user}
  */
  readonly sshUser?: string;
  /**
  * Set a static IP for the minikube cluster, the IP must be: private, IPv4, and the last octet must be between 2 and 254, for example 192.168.200.200 (Docker and Podman drivers only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#static_ip Cluster#static_ip}
  */
  readonly staticIp?: string;
  /**
  * Subnet to be used on kic cluster. If left empty, minikube will choose subnet address, beginning from 192.168.49.0. (docker and podman driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#subnet Cluster#subnet}
  */
  readonly subnet?: string;
  /**
  * Send trace events. Options include: [gcp]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#trace Cluster#trace}
  */
  readonly trace?: string;
  /**
  * Provide VM UUID to restore MAC address (hyperkit driver only)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#uuid Cluster#uuid}
  */
  readonly uuid?: string;
  /**
  * Filter to use only VM Drivers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#vm Cluster#vm}
  */
  readonly vm?: boolean | cdktf.IResolvable;
  /**
  * comma separated list of Kubernetes components to verify and wait for after starting a cluster. defaults to "apiserver,system_pods", available options: "apiserver,system_pods,default_sa,apps_running,node_ready,kubelet,extra" . other acceptable values are 'all' or 'none', 'true' and 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#wait Cluster#wait}
  */
  readonly wait?: string[];
  /**
  * max time to wait per Kubernetes or host to be healthy. (Configured in minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#wait_timeout Cluster#wait_timeout}
  */
  readonly waitTimeout?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster minikube_cluster}
*/
export class Cluster extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "minikube_cluster";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cluster resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cluster to import
  * @param importFromId The id of the existing Cluster that should be imported. Refer to the {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cluster to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "minikube_cluster", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scott-the-programmer/minikube/0.6.0/docs/resources/cluster minikube_cluster} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClusterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'minikube_cluster',
      terraformGeneratorMetadata: {
        providerName: 'minikube',
        providerVersion: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addons = config.addons;
    this._apiserverIps = config.apiserverIps;
    this._apiserverName = config.apiserverName;
    this._apiserverNames = config.apiserverNames;
    this._apiserverPort = config.apiserverPort;
    this._autoPauseInterval = config.autoPauseInterval;
    this._autoUpdateDrivers = config.autoUpdateDrivers;
    this._baseImage = config.baseImage;
    this._binaryMirror = config.binaryMirror;
    this._cacheImages = config.cacheImages;
    this._certExpiration = config.certExpiration;
    this._clusterName = config.clusterName;
    this._cni = config.cni;
    this._containerRuntime = config.containerRuntime;
    this._cpus = config.cpus;
    this._criSocket = config.criSocket;
    this._deleteOnFailure = config.deleteOnFailure;
    this._disableCorednsLog = config.disableCorednsLog;
    this._disableDriverMounts = config.disableDriverMounts;
    this._disableMetrics = config.disableMetrics;
    this._disableOptimizations = config.disableOptimizations;
    this._diskSize = config.diskSize;
    this._dnsDomain = config.dnsDomain;
    this._dnsProxy = config.dnsProxy;
    this._dockerEnv = config.dockerEnv;
    this._dockerOpt = config.dockerOpt;
    this._downloadOnly = config.downloadOnly;
    this._driver = config.driver;
    this._dryRun = config.dryRun;
    this._embedCerts = config.embedCerts;
    this._extraConfig = config.extraConfig;
    this._extraDisks = config.extraDisks;
    this._featureGates = config.featureGates;
    this._force = config.force;
    this._forceSystemd = config.forceSystemd;
    this._gpus = config.gpus;
    this._ha = config.ha;
    this._hostDnsResolver = config.hostDnsResolver;
    this._hostOnlyCidr = config.hostOnlyCidr;
    this._hostOnlyNicType = config.hostOnlyNicType;
    this._hyperkitVpnkitSock = config.hyperkitVpnkitSock;
    this._hyperkitVsockPorts = config.hyperkitVsockPorts;
    this._hypervExternalAdapter = config.hypervExternalAdapter;
    this._hypervUseExternalSwitch = config.hypervUseExternalSwitch;
    this._hypervVirtualSwitch = config.hypervVirtualSwitch;
    this._id = config.id;
    this._imageMirrorCountry = config.imageMirrorCountry;
    this._imageRepository = config.imageRepository;
    this._insecureRegistry = config.insecureRegistry;
    this._installAddons = config.installAddons;
    this._interactive = config.interactive;
    this._isoUrl = config.isoUrl;
    this._keepContext = config.keepContext;
    this._kubernetesVersion = config.kubernetesVersion;
    this._kvmGpu = config.kvmGpu;
    this._kvmHidden = config.kvmHidden;
    this._kvmNetwork = config.kvmNetwork;
    this._kvmNumaCount = config.kvmNumaCount;
    this._kvmQemuUri = config.kvmQemuUri;
    this._listenAddress = config.listenAddress;
    this._memory = config.memory;
    this._mount = config.mount;
    this._mount9PVersion = config.mount9PVersion;
    this._mountGid = config.mountGid;
    this._mountIp = config.mountIp;
    this._mountMsize = config.mountMsize;
    this._mountOptions = config.mountOptions;
    this._mountPort = config.mountPort;
    this._mountString = config.mountString;
    this._mountType = config.mountType;
    this._mountUid = config.mountUid;
    this._namespace = config.namespace;
    this._natNicType = config.natNicType;
    this._nativeSsh = config.nativeSsh;
    this._network = config.network;
    this._nfsShare = config.nfsShare;
    this._nfsSharesRoot = config.nfsSharesRoot;
    this._noKubernetes = config.noKubernetes;
    this._noVtxCheck = config.noVtxCheck;
    this._nodes = config.nodes;
    this._output = config.output;
    this._ports = config.ports;
    this._preload = config.preload;
    this._qemuFirmwarePath = config.qemuFirmwarePath;
    this._registryMirror = config.registryMirror;
    this._serviceClusterIpRange = config.serviceClusterIpRange;
    this._socketVmnetClientPath = config.socketVmnetClientPath;
    this._socketVmnetPath = config.socketVmnetPath;
    this._sshIpAddress = config.sshIpAddress;
    this._sshKey = config.sshKey;
    this._sshPort = config.sshPort;
    this._sshUser = config.sshUser;
    this._staticIp = config.staticIp;
    this._subnet = config.subnet;
    this._trace = config.trace;
    this._uuid = config.uuid;
    this._vm = config.vm;
    this._wait = config.wait;
    this._waitTimeout = config.waitTimeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addons - computed: false, optional: true, required: false
  private _addons?: string[]; 
  public get addons() {
    return cdktf.Fn.tolist(this.getListAttribute('addons'));
  }
  public set addons(value: string[]) {
    this._addons = value;
  }
  public resetAddons() {
    this._addons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addonsInput() {
    return this._addons;
  }

  // apiserver_ips - computed: false, optional: true, required: false
  private _apiserverIps?: string[]; 
  public get apiserverIps() {
    return cdktf.Fn.tolist(this.getListAttribute('apiserver_ips'));
  }
  public set apiserverIps(value: string[]) {
    this._apiserverIps = value;
  }
  public resetApiserverIps() {
    this._apiserverIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiserverIpsInput() {
    return this._apiserverIps;
  }

  // apiserver_name - computed: false, optional: true, required: false
  private _apiserverName?: string; 
  public get apiserverName() {
    return this.getStringAttribute('apiserver_name');
  }
  public set apiserverName(value: string) {
    this._apiserverName = value;
  }
  public resetApiserverName() {
    this._apiserverName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiserverNameInput() {
    return this._apiserverName;
  }

  // apiserver_names - computed: true, optional: true, required: false
  private _apiserverNames?: string[]; 
  public get apiserverNames() {
    return cdktf.Fn.tolist(this.getListAttribute('apiserver_names'));
  }
  public set apiserverNames(value: string[]) {
    this._apiserverNames = value;
  }
  public resetApiserverNames() {
    this._apiserverNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiserverNamesInput() {
    return this._apiserverNames;
  }

  // apiserver_port - computed: false, optional: true, required: false
  private _apiserverPort?: number; 
  public get apiserverPort() {
    return this.getNumberAttribute('apiserver_port');
  }
  public set apiserverPort(value: number) {
    this._apiserverPort = value;
  }
  public resetApiserverPort() {
    this._apiserverPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiserverPortInput() {
    return this._apiserverPort;
  }

  // auto_pause_interval - computed: false, optional: true, required: false
  private _autoPauseInterval?: number; 
  public get autoPauseInterval() {
    return this.getNumberAttribute('auto_pause_interval');
  }
  public set autoPauseInterval(value: number) {
    this._autoPauseInterval = value;
  }
  public resetAutoPauseInterval() {
    this._autoPauseInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPauseIntervalInput() {
    return this._autoPauseInterval;
  }

  // auto_update_drivers - computed: false, optional: true, required: false
  private _autoUpdateDrivers?: boolean | cdktf.IResolvable; 
  public get autoUpdateDrivers() {
    return this.getBooleanAttribute('auto_update_drivers');
  }
  public set autoUpdateDrivers(value: boolean | cdktf.IResolvable) {
    this._autoUpdateDrivers = value;
  }
  public resetAutoUpdateDrivers() {
    this._autoUpdateDrivers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateDriversInput() {
    return this._autoUpdateDrivers;
  }

  // base_image - computed: false, optional: true, required: false
  private _baseImage?: string; 
  public get baseImage() {
    return this.getStringAttribute('base_image');
  }
  public set baseImage(value: string) {
    this._baseImage = value;
  }
  public resetBaseImage() {
    this._baseImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseImageInput() {
    return this._baseImage;
  }

  // binary_mirror - computed: false, optional: true, required: false
  private _binaryMirror?: string; 
  public get binaryMirror() {
    return this.getStringAttribute('binary_mirror');
  }
  public set binaryMirror(value: string) {
    this._binaryMirror = value;
  }
  public resetBinaryMirror() {
    this._binaryMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryMirrorInput() {
    return this._binaryMirror;
  }

  // cache_images - computed: false, optional: true, required: false
  private _cacheImages?: boolean | cdktf.IResolvable; 
  public get cacheImages() {
    return this.getBooleanAttribute('cache_images');
  }
  public set cacheImages(value: boolean | cdktf.IResolvable) {
    this._cacheImages = value;
  }
  public resetCacheImages() {
    this._cacheImages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheImagesInput() {
    return this._cacheImages;
  }

  // cert_expiration - computed: false, optional: true, required: false
  private _certExpiration?: number; 
  public get certExpiration() {
    return this.getNumberAttribute('cert_expiration');
  }
  public set certExpiration(value: number) {
    this._certExpiration = value;
  }
  public resetCertExpiration() {
    this._certExpiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certExpirationInput() {
    return this._certExpiration;
  }

  // client_certificate - computed: true, optional: false, required: false
  public get clientCertificate() {
    return this.getStringAttribute('client_certificate');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
  }

  // cluster_ca_certificate - computed: true, optional: false, required: false
  public get clusterCaCertificate() {
    return this.getStringAttribute('cluster_ca_certificate');
  }

  // cluster_name - computed: false, optional: true, required: false
  private _clusterName?: string; 
  public get clusterName() {
    return this.getStringAttribute('cluster_name');
  }
  public set clusterName(value: string) {
    this._clusterName = value;
  }
  public resetClusterName() {
    this._clusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterNameInput() {
    return this._clusterName;
  }

  // cni - computed: false, optional: true, required: false
  private _cni?: string; 
  public get cni() {
    return this.getStringAttribute('cni');
  }
  public set cni(value: string) {
    this._cni = value;
  }
  public resetCni() {
    this._cni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cniInput() {
    return this._cni;
  }

  // container_runtime - computed: false, optional: true, required: false
  private _containerRuntime?: string; 
  public get containerRuntime() {
    return this.getStringAttribute('container_runtime');
  }
  public set containerRuntime(value: string) {
    this._containerRuntime = value;
  }
  public resetContainerRuntime() {
    this._containerRuntime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerRuntimeInput() {
    return this._containerRuntime;
  }

  // cpus - computed: false, optional: true, required: false
  private _cpus?: string; 
  public get cpus() {
    return this.getStringAttribute('cpus');
  }
  public set cpus(value: string) {
    this._cpus = value;
  }
  public resetCpus() {
    this._cpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpusInput() {
    return this._cpus;
  }

  // cri_socket - computed: false, optional: true, required: false
  private _criSocket?: string; 
  public get criSocket() {
    return this.getStringAttribute('cri_socket');
  }
  public set criSocket(value: string) {
    this._criSocket = value;
  }
  public resetCriSocket() {
    this._criSocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get criSocketInput() {
    return this._criSocket;
  }

  // delete_on_failure - computed: false, optional: true, required: false
  private _deleteOnFailure?: boolean | cdktf.IResolvable; 
  public get deleteOnFailure() {
    return this.getBooleanAttribute('delete_on_failure');
  }
  public set deleteOnFailure(value: boolean | cdktf.IResolvable) {
    this._deleteOnFailure = value;
  }
  public resetDeleteOnFailure() {
    this._deleteOnFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOnFailureInput() {
    return this._deleteOnFailure;
  }

  // disable_coredns_log - computed: false, optional: true, required: false
  private _disableCorednsLog?: boolean | cdktf.IResolvable; 
  public get disableCorednsLog() {
    return this.getBooleanAttribute('disable_coredns_log');
  }
  public set disableCorednsLog(value: boolean | cdktf.IResolvable) {
    this._disableCorednsLog = value;
  }
  public resetDisableCorednsLog() {
    this._disableCorednsLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCorednsLogInput() {
    return this._disableCorednsLog;
  }

  // disable_driver_mounts - computed: false, optional: true, required: false
  private _disableDriverMounts?: boolean | cdktf.IResolvable; 
  public get disableDriverMounts() {
    return this.getBooleanAttribute('disable_driver_mounts');
  }
  public set disableDriverMounts(value: boolean | cdktf.IResolvable) {
    this._disableDriverMounts = value;
  }
  public resetDisableDriverMounts() {
    this._disableDriverMounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDriverMountsInput() {
    return this._disableDriverMounts;
  }

  // disable_metrics - computed: false, optional: true, required: false
  private _disableMetrics?: boolean | cdktf.IResolvable; 
  public get disableMetrics() {
    return this.getBooleanAttribute('disable_metrics');
  }
  public set disableMetrics(value: boolean | cdktf.IResolvable) {
    this._disableMetrics = value;
  }
  public resetDisableMetrics() {
    this._disableMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMetricsInput() {
    return this._disableMetrics;
  }

  // disable_optimizations - computed: false, optional: true, required: false
  private _disableOptimizations?: boolean | cdktf.IResolvable; 
  public get disableOptimizations() {
    return this.getBooleanAttribute('disable_optimizations');
  }
  public set disableOptimizations(value: boolean | cdktf.IResolvable) {
    this._disableOptimizations = value;
  }
  public resetDisableOptimizations() {
    this._disableOptimizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableOptimizationsInput() {
    return this._disableOptimizations;
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: string; 
  public get diskSize() {
    return this.getStringAttribute('disk_size');
  }
  public set diskSize(value: string) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // dns_domain - computed: false, optional: true, required: false
  private _dnsDomain?: string; 
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }
  public set dnsDomain(value: string) {
    this._dnsDomain = value;
  }
  public resetDnsDomain() {
    this._dnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainInput() {
    return this._dnsDomain;
  }

  // dns_proxy - computed: false, optional: true, required: false
  private _dnsProxy?: boolean | cdktf.IResolvable; 
  public get dnsProxy() {
    return this.getBooleanAttribute('dns_proxy');
  }
  public set dnsProxy(value: boolean | cdktf.IResolvable) {
    this._dnsProxy = value;
  }
  public resetDnsProxy() {
    this._dnsProxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsProxyInput() {
    return this._dnsProxy;
  }

  // docker_env - computed: false, optional: true, required: false
  private _dockerEnv?: string[]; 
  public get dockerEnv() {
    return cdktf.Fn.tolist(this.getListAttribute('docker_env'));
  }
  public set dockerEnv(value: string[]) {
    this._dockerEnv = value;
  }
  public resetDockerEnv() {
    this._dockerEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerEnvInput() {
    return this._dockerEnv;
  }

  // docker_opt - computed: false, optional: true, required: false
  private _dockerOpt?: string[]; 
  public get dockerOpt() {
    return cdktf.Fn.tolist(this.getListAttribute('docker_opt'));
  }
  public set dockerOpt(value: string[]) {
    this._dockerOpt = value;
  }
  public resetDockerOpt() {
    this._dockerOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerOptInput() {
    return this._dockerOpt;
  }

  // download_only - computed: false, optional: true, required: false
  private _downloadOnly?: boolean | cdktf.IResolvable; 
  public get downloadOnly() {
    return this.getBooleanAttribute('download_only');
  }
  public set downloadOnly(value: boolean | cdktf.IResolvable) {
    this._downloadOnly = value;
  }
  public resetDownloadOnly() {
    this._downloadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadOnlyInput() {
    return this._downloadOnly;
  }

  // driver - computed: false, optional: true, required: false
  private _driver?: string; 
  public get driver() {
    return this.getStringAttribute('driver');
  }
  public set driver(value: string) {
    this._driver = value;
  }
  public resetDriver() {
    this._driver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverInput() {
    return this._driver;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // embed_certs - computed: false, optional: true, required: false
  private _embedCerts?: boolean | cdktf.IResolvable; 
  public get embedCerts() {
    return this.getBooleanAttribute('embed_certs');
  }
  public set embedCerts(value: boolean | cdktf.IResolvable) {
    this._embedCerts = value;
  }
  public resetEmbedCerts() {
    this._embedCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get embedCertsInput() {
    return this._embedCerts;
  }

  // extra_config - computed: false, optional: true, required: false
  private _extraConfig?: string[]; 
  public get extraConfig() {
    return cdktf.Fn.tolist(this.getListAttribute('extra_config'));
  }
  public set extraConfig(value: string[]) {
    this._extraConfig = value;
  }
  public resetExtraConfig() {
    this._extraConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigInput() {
    return this._extraConfig;
  }

  // extra_disks - computed: false, optional: true, required: false
  private _extraDisks?: number; 
  public get extraDisks() {
    return this.getNumberAttribute('extra_disks');
  }
  public set extraDisks(value: number) {
    this._extraDisks = value;
  }
  public resetExtraDisks() {
    this._extraDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraDisksInput() {
    return this._extraDisks;
  }

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates?: string; 
  public get featureGates() {
    return this.getStringAttribute('feature_gates');
  }
  public set featureGates(value: string) {
    this._featureGates = value;
  }
  public resetFeatureGates() {
    this._featureGates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }

  // force_systemd - computed: false, optional: true, required: false
  private _forceSystemd?: boolean | cdktf.IResolvable; 
  public get forceSystemd() {
    return this.getBooleanAttribute('force_systemd');
  }
  public set forceSystemd(value: boolean | cdktf.IResolvable) {
    this._forceSystemd = value;
  }
  public resetForceSystemd() {
    this._forceSystemd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceSystemdInput() {
    return this._forceSystemd;
  }

  // gpus - computed: false, optional: true, required: false
  private _gpus?: string; 
  public get gpus() {
    return this.getStringAttribute('gpus');
  }
  public set gpus(value: string) {
    this._gpus = value;
  }
  public resetGpus() {
    this._gpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpusInput() {
    return this._gpus;
  }

  // ha - computed: false, optional: true, required: false
  private _ha?: boolean | cdktf.IResolvable; 
  public get ha() {
    return this.getBooleanAttribute('ha');
  }
  public set ha(value: boolean | cdktf.IResolvable) {
    this._ha = value;
  }
  public resetHa() {
    this._ha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haInput() {
    return this._ha;
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // host_dns_resolver - computed: false, optional: true, required: false
  private _hostDnsResolver?: boolean | cdktf.IResolvable; 
  public get hostDnsResolver() {
    return this.getBooleanAttribute('host_dns_resolver');
  }
  public set hostDnsResolver(value: boolean | cdktf.IResolvable) {
    this._hostDnsResolver = value;
  }
  public resetHostDnsResolver() {
    this._hostDnsResolver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostDnsResolverInput() {
    return this._hostDnsResolver;
  }

  // host_only_cidr - computed: false, optional: true, required: false
  private _hostOnlyCidr?: string; 
  public get hostOnlyCidr() {
    return this.getStringAttribute('host_only_cidr');
  }
  public set hostOnlyCidr(value: string) {
    this._hostOnlyCidr = value;
  }
  public resetHostOnlyCidr() {
    this._hostOnlyCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostOnlyCidrInput() {
    return this._hostOnlyCidr;
  }

  // host_only_nic_type - computed: false, optional: true, required: false
  private _hostOnlyNicType?: string; 
  public get hostOnlyNicType() {
    return this.getStringAttribute('host_only_nic_type');
  }
  public set hostOnlyNicType(value: string) {
    this._hostOnlyNicType = value;
  }
  public resetHostOnlyNicType() {
    this._hostOnlyNicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostOnlyNicTypeInput() {
    return this._hostOnlyNicType;
  }

  // hyperkit_vpnkit_sock - computed: false, optional: true, required: false
  private _hyperkitVpnkitSock?: string; 
  public get hyperkitVpnkitSock() {
    return this.getStringAttribute('hyperkit_vpnkit_sock');
  }
  public set hyperkitVpnkitSock(value: string) {
    this._hyperkitVpnkitSock = value;
  }
  public resetHyperkitVpnkitSock() {
    this._hyperkitVpnkitSock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperkitVpnkitSockInput() {
    return this._hyperkitVpnkitSock;
  }

  // hyperkit_vsock_ports - computed: true, optional: true, required: false
  private _hyperkitVsockPorts?: string[]; 
  public get hyperkitVsockPorts() {
    return cdktf.Fn.tolist(this.getListAttribute('hyperkit_vsock_ports'));
  }
  public set hyperkitVsockPorts(value: string[]) {
    this._hyperkitVsockPorts = value;
  }
  public resetHyperkitVsockPorts() {
    this._hyperkitVsockPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hyperkitVsockPortsInput() {
    return this._hyperkitVsockPorts;
  }

  // hyperv_external_adapter - computed: false, optional: true, required: false
  private _hypervExternalAdapter?: string; 
  public get hypervExternalAdapter() {
    return this.getStringAttribute('hyperv_external_adapter');
  }
  public set hypervExternalAdapter(value: string) {
    this._hypervExternalAdapter = value;
  }
  public resetHypervExternalAdapter() {
    this._hypervExternalAdapter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervExternalAdapterInput() {
    return this._hypervExternalAdapter;
  }

  // hyperv_use_external_switch - computed: false, optional: true, required: false
  private _hypervUseExternalSwitch?: boolean | cdktf.IResolvable; 
  public get hypervUseExternalSwitch() {
    return this.getBooleanAttribute('hyperv_use_external_switch');
  }
  public set hypervUseExternalSwitch(value: boolean | cdktf.IResolvable) {
    this._hypervUseExternalSwitch = value;
  }
  public resetHypervUseExternalSwitch() {
    this._hypervUseExternalSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervUseExternalSwitchInput() {
    return this._hypervUseExternalSwitch;
  }

  // hyperv_virtual_switch - computed: false, optional: true, required: false
  private _hypervVirtualSwitch?: string; 
  public get hypervVirtualSwitch() {
    return this.getStringAttribute('hyperv_virtual_switch');
  }
  public set hypervVirtualSwitch(value: string) {
    this._hypervVirtualSwitch = value;
  }
  public resetHypervVirtualSwitch() {
    this._hypervVirtualSwitch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervVirtualSwitchInput() {
    return this._hypervVirtualSwitch;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // image_mirror_country - computed: false, optional: true, required: false
  private _imageMirrorCountry?: string; 
  public get imageMirrorCountry() {
    return this.getStringAttribute('image_mirror_country');
  }
  public set imageMirrorCountry(value: string) {
    this._imageMirrorCountry = value;
  }
  public resetImageMirrorCountry() {
    this._imageMirrorCountry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageMirrorCountryInput() {
    return this._imageMirrorCountry;
  }

  // image_repository - computed: false, optional: true, required: false
  private _imageRepository?: string; 
  public get imageRepository() {
    return this.getStringAttribute('image_repository');
  }
  public set imageRepository(value: string) {
    this._imageRepository = value;
  }
  public resetImageRepository() {
    this._imageRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRepositoryInput() {
    return this._imageRepository;
  }

  // insecure_registry - computed: true, optional: true, required: false
  private _insecureRegistry?: string[]; 
  public get insecureRegistry() {
    return cdktf.Fn.tolist(this.getListAttribute('insecure_registry'));
  }
  public set insecureRegistry(value: string[]) {
    this._insecureRegistry = value;
  }
  public resetInsecureRegistry() {
    this._insecureRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureRegistryInput() {
    return this._insecureRegistry;
  }

  // install_addons - computed: false, optional: true, required: false
  private _installAddons?: boolean | cdktf.IResolvable; 
  public get installAddons() {
    return this.getBooleanAttribute('install_addons');
  }
  public set installAddons(value: boolean | cdktf.IResolvable) {
    this._installAddons = value;
  }
  public resetInstallAddons() {
    this._installAddons = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installAddonsInput() {
    return this._installAddons;
  }

  // interactive - computed: false, optional: true, required: false
  private _interactive?: boolean | cdktf.IResolvable; 
  public get interactive() {
    return this.getBooleanAttribute('interactive');
  }
  public set interactive(value: boolean | cdktf.IResolvable) {
    this._interactive = value;
  }
  public resetInteractive() {
    this._interactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactiveInput() {
    return this._interactive;
  }

  // iso_url - computed: true, optional: true, required: false
  private _isoUrl?: string[]; 
  public get isoUrl() {
    return cdktf.Fn.tolist(this.getListAttribute('iso_url'));
  }
  public set isoUrl(value: string[]) {
    this._isoUrl = value;
  }
  public resetIsoUrl() {
    this._isoUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isoUrlInput() {
    return this._isoUrl;
  }

  // keep_context - computed: false, optional: true, required: false
  private _keepContext?: boolean | cdktf.IResolvable; 
  public get keepContext() {
    return this.getBooleanAttribute('keep_context');
  }
  public set keepContext(value: boolean | cdktf.IResolvable) {
    this._keepContext = value;
  }
  public resetKeepContext() {
    this._keepContext = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepContextInput() {
    return this._keepContext;
  }

  // kubernetes_version - computed: false, optional: true, required: false
  private _kubernetesVersion?: string; 
  public get kubernetesVersion() {
    return this.getStringAttribute('kubernetes_version');
  }
  public set kubernetesVersion(value: string) {
    this._kubernetesVersion = value;
  }
  public resetKubernetesVersion() {
    this._kubernetesVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubernetesVersionInput() {
    return this._kubernetesVersion;
  }

  // kvm_gpu - computed: false, optional: true, required: false
  private _kvmGpu?: boolean | cdktf.IResolvable; 
  public get kvmGpu() {
    return this.getBooleanAttribute('kvm_gpu');
  }
  public set kvmGpu(value: boolean | cdktf.IResolvable) {
    this._kvmGpu = value;
  }
  public resetKvmGpu() {
    this._kvmGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvmGpuInput() {
    return this._kvmGpu;
  }

  // kvm_hidden - computed: false, optional: true, required: false
  private _kvmHidden?: boolean | cdktf.IResolvable; 
  public get kvmHidden() {
    return this.getBooleanAttribute('kvm_hidden');
  }
  public set kvmHidden(value: boolean | cdktf.IResolvable) {
    this._kvmHidden = value;
  }
  public resetKvmHidden() {
    this._kvmHidden = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvmHiddenInput() {
    return this._kvmHidden;
  }

  // kvm_network - computed: false, optional: true, required: false
  private _kvmNetwork?: string; 
  public get kvmNetwork() {
    return this.getStringAttribute('kvm_network');
  }
  public set kvmNetwork(value: string) {
    this._kvmNetwork = value;
  }
  public resetKvmNetwork() {
    this._kvmNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvmNetworkInput() {
    return this._kvmNetwork;
  }

  // kvm_numa_count - computed: false, optional: true, required: false
  private _kvmNumaCount?: number; 
  public get kvmNumaCount() {
    return this.getNumberAttribute('kvm_numa_count');
  }
  public set kvmNumaCount(value: number) {
    this._kvmNumaCount = value;
  }
  public resetKvmNumaCount() {
    this._kvmNumaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvmNumaCountInput() {
    return this._kvmNumaCount;
  }

  // kvm_qemu_uri - computed: false, optional: true, required: false
  private _kvmQemuUri?: string; 
  public get kvmQemuUri() {
    return this.getStringAttribute('kvm_qemu_uri');
  }
  public set kvmQemuUri(value: string) {
    this._kvmQemuUri = value;
  }
  public resetKvmQemuUri() {
    this._kvmQemuUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kvmQemuUriInput() {
    return this._kvmQemuUri;
  }

  // listen_address - computed: false, optional: true, required: false
  private _listenAddress?: string; 
  public get listenAddress() {
    return this.getStringAttribute('listen_address');
  }
  public set listenAddress(value: string) {
    this._listenAddress = value;
  }
  public resetListenAddress() {
    this._listenAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenAddressInput() {
    return this._listenAddress;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }

  // mount - computed: false, optional: true, required: false
  private _mount?: boolean | cdktf.IResolvable; 
  public get mount() {
    return this.getBooleanAttribute('mount');
  }
  public set mount(value: boolean | cdktf.IResolvable) {
    this._mount = value;
  }
  public resetMount() {
    this._mount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountInput() {
    return this._mount;
  }

  // mount_9p_version - computed: false, optional: true, required: false
  private _mount9PVersion?: string; 
  public get mount9PVersion() {
    return this.getStringAttribute('mount_9p_version');
  }
  public set mount9PVersion(value: string) {
    this._mount9PVersion = value;
  }
  public resetMount9PVersion() {
    this._mount9PVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mount9PVersionInput() {
    return this._mount9PVersion;
  }

  // mount_gid - computed: false, optional: true, required: false
  private _mountGid?: string; 
  public get mountGid() {
    return this.getStringAttribute('mount_gid');
  }
  public set mountGid(value: string) {
    this._mountGid = value;
  }
  public resetMountGid() {
    this._mountGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountGidInput() {
    return this._mountGid;
  }

  // mount_ip - computed: false, optional: true, required: false
  private _mountIp?: string; 
  public get mountIp() {
    return this.getStringAttribute('mount_ip');
  }
  public set mountIp(value: string) {
    this._mountIp = value;
  }
  public resetMountIp() {
    this._mountIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountIpInput() {
    return this._mountIp;
  }

  // mount_msize - computed: false, optional: true, required: false
  private _mountMsize?: number; 
  public get mountMsize() {
    return this.getNumberAttribute('mount_msize');
  }
  public set mountMsize(value: number) {
    this._mountMsize = value;
  }
  public resetMountMsize() {
    this._mountMsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountMsizeInput() {
    return this._mountMsize;
  }

  // mount_options - computed: false, optional: true, required: false
  private _mountOptions?: string[]; 
  public get mountOptions() {
    return cdktf.Fn.tolist(this.getListAttribute('mount_options'));
  }
  public set mountOptions(value: string[]) {
    this._mountOptions = value;
  }
  public resetMountOptions() {
    this._mountOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountOptionsInput() {
    return this._mountOptions;
  }

  // mount_port - computed: false, optional: true, required: false
  private _mountPort?: number; 
  public get mountPort() {
    return this.getNumberAttribute('mount_port');
  }
  public set mountPort(value: number) {
    this._mountPort = value;
  }
  public resetMountPort() {
    this._mountPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPortInput() {
    return this._mountPort;
  }

  // mount_string - computed: false, optional: true, required: false
  private _mountString?: string; 
  public get mountString() {
    return this.getStringAttribute('mount_string');
  }
  public set mountString(value: string) {
    this._mountString = value;
  }
  public resetMountString() {
    this._mountString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountStringInput() {
    return this._mountString;
  }

  // mount_type - computed: false, optional: true, required: false
  private _mountType?: string; 
  public get mountType() {
    return this.getStringAttribute('mount_type');
  }
  public set mountType(value: string) {
    this._mountType = value;
  }
  public resetMountType() {
    this._mountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountTypeInput() {
    return this._mountType;
  }

  // mount_uid - computed: false, optional: true, required: false
  private _mountUid?: string; 
  public get mountUid() {
    return this.getStringAttribute('mount_uid');
  }
  public set mountUid(value: string) {
    this._mountUid = value;
  }
  public resetMountUid() {
    this._mountUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountUidInput() {
    return this._mountUid;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // nat_nic_type - computed: false, optional: true, required: false
  private _natNicType?: string; 
  public get natNicType() {
    return this.getStringAttribute('nat_nic_type');
  }
  public set natNicType(value: string) {
    this._natNicType = value;
  }
  public resetNatNicType() {
    this._natNicType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natNicTypeInput() {
    return this._natNicType;
  }

  // native_ssh - computed: false, optional: true, required: false
  private _nativeSsh?: boolean | cdktf.IResolvable; 
  public get nativeSsh() {
    return this.getBooleanAttribute('native_ssh');
  }
  public set nativeSsh(value: boolean | cdktf.IResolvable) {
    this._nativeSsh = value;
  }
  public resetNativeSsh() {
    this._nativeSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nativeSshInput() {
    return this._nativeSsh;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // nfs_share - computed: true, optional: true, required: false
  private _nfsShare?: string[]; 
  public get nfsShare() {
    return cdktf.Fn.tolist(this.getListAttribute('nfs_share'));
  }
  public set nfsShare(value: string[]) {
    this._nfsShare = value;
  }
  public resetNfsShare() {
    this._nfsShare = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsShareInput() {
    return this._nfsShare;
  }

  // nfs_shares_root - computed: false, optional: true, required: false
  private _nfsSharesRoot?: string; 
  public get nfsSharesRoot() {
    return this.getStringAttribute('nfs_shares_root');
  }
  public set nfsSharesRoot(value: string) {
    this._nfsSharesRoot = value;
  }
  public resetNfsSharesRoot() {
    this._nfsSharesRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsSharesRootInput() {
    return this._nfsSharesRoot;
  }

  // no_kubernetes - computed: false, optional: true, required: false
  private _noKubernetes?: boolean | cdktf.IResolvable; 
  public get noKubernetes() {
    return this.getBooleanAttribute('no_kubernetes');
  }
  public set noKubernetes(value: boolean | cdktf.IResolvable) {
    this._noKubernetes = value;
  }
  public resetNoKubernetes() {
    this._noKubernetes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noKubernetesInput() {
    return this._noKubernetes;
  }

  // no_vtx_check - computed: false, optional: true, required: false
  private _noVtxCheck?: boolean | cdktf.IResolvable; 
  public get noVtxCheck() {
    return this.getBooleanAttribute('no_vtx_check');
  }
  public set noVtxCheck(value: boolean | cdktf.IResolvable) {
    this._noVtxCheck = value;
  }
  public resetNoVtxCheck() {
    this._noVtxCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noVtxCheckInput() {
    return this._noVtxCheck;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes?: number; 
  public get nodes() {
    return this.getNumberAttribute('nodes');
  }
  public set nodes(value: number) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // output - computed: false, optional: true, required: false
  private _output?: string; 
  public get output() {
    return this.getStringAttribute('output');
  }
  public set output(value: string) {
    this._output = value;
  }
  public resetOutput() {
    this._output = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputInput() {
    return this._output;
  }

  // ports - computed: true, optional: true, required: false
  private _ports?: string[]; 
  public get ports() {
    return cdktf.Fn.tolist(this.getListAttribute('ports'));
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  public resetPorts() {
    this._ports = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // preload - computed: false, optional: true, required: false
  private _preload?: boolean | cdktf.IResolvable; 
  public get preload() {
    return this.getBooleanAttribute('preload');
  }
  public set preload(value: boolean | cdktf.IResolvable) {
    this._preload = value;
  }
  public resetPreload() {
    this._preload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preloadInput() {
    return this._preload;
  }

  // qemu_firmware_path - computed: false, optional: true, required: false
  private _qemuFirmwarePath?: string; 
  public get qemuFirmwarePath() {
    return this.getStringAttribute('qemu_firmware_path');
  }
  public set qemuFirmwarePath(value: string) {
    this._qemuFirmwarePath = value;
  }
  public resetQemuFirmwarePath() {
    this._qemuFirmwarePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qemuFirmwarePathInput() {
    return this._qemuFirmwarePath;
  }

  // registry_mirror - computed: true, optional: true, required: false
  private _registryMirror?: string[]; 
  public get registryMirror() {
    return cdktf.Fn.tolist(this.getListAttribute('registry_mirror'));
  }
  public set registryMirror(value: string[]) {
    this._registryMirror = value;
  }
  public resetRegistryMirror() {
    this._registryMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryMirrorInput() {
    return this._registryMirror;
  }

  // service_cluster_ip_range - computed: false, optional: true, required: false
  private _serviceClusterIpRange?: string; 
  public get serviceClusterIpRange() {
    return this.getStringAttribute('service_cluster_ip_range');
  }
  public set serviceClusterIpRange(value: string) {
    this._serviceClusterIpRange = value;
  }
  public resetServiceClusterIpRange() {
    this._serviceClusterIpRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceClusterIpRangeInput() {
    return this._serviceClusterIpRange;
  }

  // socket_vmnet_client_path - computed: false, optional: true, required: false
  private _socketVmnetClientPath?: string; 
  public get socketVmnetClientPath() {
    return this.getStringAttribute('socket_vmnet_client_path');
  }
  public set socketVmnetClientPath(value: string) {
    this._socketVmnetClientPath = value;
  }
  public resetSocketVmnetClientPath() {
    this._socketVmnetClientPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketVmnetClientPathInput() {
    return this._socketVmnetClientPath;
  }

  // socket_vmnet_path - computed: false, optional: true, required: false
  private _socketVmnetPath?: string; 
  public get socketVmnetPath() {
    return this.getStringAttribute('socket_vmnet_path');
  }
  public set socketVmnetPath(value: string) {
    this._socketVmnetPath = value;
  }
  public resetSocketVmnetPath() {
    this._socketVmnetPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get socketVmnetPathInput() {
    return this._socketVmnetPath;
  }

  // ssh_ip_address - computed: false, optional: true, required: false
  private _sshIpAddress?: string; 
  public get sshIpAddress() {
    return this.getStringAttribute('ssh_ip_address');
  }
  public set sshIpAddress(value: string) {
    this._sshIpAddress = value;
  }
  public resetSshIpAddress() {
    this._sshIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshIpAddressInput() {
    return this._sshIpAddress;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: string; 
  public get sshKey() {
    return this.getStringAttribute('ssh_key');
  }
  public set sshKey(value: string) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // ssh_port - computed: false, optional: true, required: false
  private _sshPort?: number; 
  public get sshPort() {
    return this.getNumberAttribute('ssh_port');
  }
  public set sshPort(value: number) {
    this._sshPort = value;
  }
  public resetSshPort() {
    this._sshPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPortInput() {
    return this._sshPort;
  }

  // ssh_user - computed: false, optional: true, required: false
  private _sshUser?: string; 
  public get sshUser() {
    return this.getStringAttribute('ssh_user');
  }
  public set sshUser(value: string) {
    this._sshUser = value;
  }
  public resetSshUser() {
    this._sshUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUserInput() {
    return this._sshUser;
  }

  // static_ip - computed: false, optional: true, required: false
  private _staticIp?: string; 
  public get staticIp() {
    return this.getStringAttribute('static_ip');
  }
  public set staticIp(value: string) {
    this._staticIp = value;
  }
  public resetStaticIp() {
    this._staticIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpInput() {
    return this._staticIp;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // trace - computed: false, optional: true, required: false
  private _trace?: string; 
  public get trace() {
    return this.getStringAttribute('trace');
  }
  public set trace(value: string) {
    this._trace = value;
  }
  public resetTrace() {
    this._trace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceInput() {
    return this._trace;
  }

  // uuid - computed: false, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vm - computed: false, optional: true, required: false
  private _vm?: boolean | cdktf.IResolvable; 
  public get vm() {
    return this.getBooleanAttribute('vm');
  }
  public set vm(value: boolean | cdktf.IResolvable) {
    this._vm = value;
  }
  public resetVm() {
    this._vm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmInput() {
    return this._vm;
  }

  // wait - computed: false, optional: true, required: false
  private _wait?: string[]; 
  public get wait() {
    return cdktf.Fn.tolist(this.getListAttribute('wait'));
  }
  public set wait(value: string[]) {
    this._wait = value;
  }
  public resetWait() {
    this._wait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitInput() {
    return this._wait;
  }

  // wait_timeout - computed: false, optional: true, required: false
  private _waitTimeout?: number; 
  public get waitTimeout() {
    return this.getNumberAttribute('wait_timeout');
  }
  public set waitTimeout(value: number) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addons: cdktf.listMapper(cdktf.stringToTerraform, false)(this._addons),
      apiserver_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiserverIps),
      apiserver_name: cdktf.stringToTerraform(this._apiserverName),
      apiserver_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiserverNames),
      apiserver_port: cdktf.numberToTerraform(this._apiserverPort),
      auto_pause_interval: cdktf.numberToTerraform(this._autoPauseInterval),
      auto_update_drivers: cdktf.booleanToTerraform(this._autoUpdateDrivers),
      base_image: cdktf.stringToTerraform(this._baseImage),
      binary_mirror: cdktf.stringToTerraform(this._binaryMirror),
      cache_images: cdktf.booleanToTerraform(this._cacheImages),
      cert_expiration: cdktf.numberToTerraform(this._certExpiration),
      cluster_name: cdktf.stringToTerraform(this._clusterName),
      cni: cdktf.stringToTerraform(this._cni),
      container_runtime: cdktf.stringToTerraform(this._containerRuntime),
      cpus: cdktf.stringToTerraform(this._cpus),
      cri_socket: cdktf.stringToTerraform(this._criSocket),
      delete_on_failure: cdktf.booleanToTerraform(this._deleteOnFailure),
      disable_coredns_log: cdktf.booleanToTerraform(this._disableCorednsLog),
      disable_driver_mounts: cdktf.booleanToTerraform(this._disableDriverMounts),
      disable_metrics: cdktf.booleanToTerraform(this._disableMetrics),
      disable_optimizations: cdktf.booleanToTerraform(this._disableOptimizations),
      disk_size: cdktf.stringToTerraform(this._diskSize),
      dns_domain: cdktf.stringToTerraform(this._dnsDomain),
      dns_proxy: cdktf.booleanToTerraform(this._dnsProxy),
      docker_env: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dockerEnv),
      docker_opt: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dockerOpt),
      download_only: cdktf.booleanToTerraform(this._downloadOnly),
      driver: cdktf.stringToTerraform(this._driver),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      embed_certs: cdktf.booleanToTerraform(this._embedCerts),
      extra_config: cdktf.listMapper(cdktf.stringToTerraform, false)(this._extraConfig),
      extra_disks: cdktf.numberToTerraform(this._extraDisks),
      feature_gates: cdktf.stringToTerraform(this._featureGates),
      force: cdktf.booleanToTerraform(this._force),
      force_systemd: cdktf.booleanToTerraform(this._forceSystemd),
      gpus: cdktf.stringToTerraform(this._gpus),
      ha: cdktf.booleanToTerraform(this._ha),
      host_dns_resolver: cdktf.booleanToTerraform(this._hostDnsResolver),
      host_only_cidr: cdktf.stringToTerraform(this._hostOnlyCidr),
      host_only_nic_type: cdktf.stringToTerraform(this._hostOnlyNicType),
      hyperkit_vpnkit_sock: cdktf.stringToTerraform(this._hyperkitVpnkitSock),
      hyperkit_vsock_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hyperkitVsockPorts),
      hyperv_external_adapter: cdktf.stringToTerraform(this._hypervExternalAdapter),
      hyperv_use_external_switch: cdktf.booleanToTerraform(this._hypervUseExternalSwitch),
      hyperv_virtual_switch: cdktf.stringToTerraform(this._hypervVirtualSwitch),
      id: cdktf.stringToTerraform(this._id),
      image_mirror_country: cdktf.stringToTerraform(this._imageMirrorCountry),
      image_repository: cdktf.stringToTerraform(this._imageRepository),
      insecure_registry: cdktf.listMapper(cdktf.stringToTerraform, false)(this._insecureRegistry),
      install_addons: cdktf.booleanToTerraform(this._installAddons),
      interactive: cdktf.booleanToTerraform(this._interactive),
      iso_url: cdktf.listMapper(cdktf.stringToTerraform, false)(this._isoUrl),
      keep_context: cdktf.booleanToTerraform(this._keepContext),
      kubernetes_version: cdktf.stringToTerraform(this._kubernetesVersion),
      kvm_gpu: cdktf.booleanToTerraform(this._kvmGpu),
      kvm_hidden: cdktf.booleanToTerraform(this._kvmHidden),
      kvm_network: cdktf.stringToTerraform(this._kvmNetwork),
      kvm_numa_count: cdktf.numberToTerraform(this._kvmNumaCount),
      kvm_qemu_uri: cdktf.stringToTerraform(this._kvmQemuUri),
      listen_address: cdktf.stringToTerraform(this._listenAddress),
      memory: cdktf.stringToTerraform(this._memory),
      mount: cdktf.booleanToTerraform(this._mount),
      mount_9p_version: cdktf.stringToTerraform(this._mount9PVersion),
      mount_gid: cdktf.stringToTerraform(this._mountGid),
      mount_ip: cdktf.stringToTerraform(this._mountIp),
      mount_msize: cdktf.numberToTerraform(this._mountMsize),
      mount_options: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mountOptions),
      mount_port: cdktf.numberToTerraform(this._mountPort),
      mount_string: cdktf.stringToTerraform(this._mountString),
      mount_type: cdktf.stringToTerraform(this._mountType),
      mount_uid: cdktf.stringToTerraform(this._mountUid),
      namespace: cdktf.stringToTerraform(this._namespace),
      nat_nic_type: cdktf.stringToTerraform(this._natNicType),
      native_ssh: cdktf.booleanToTerraform(this._nativeSsh),
      network: cdktf.stringToTerraform(this._network),
      nfs_share: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nfsShare),
      nfs_shares_root: cdktf.stringToTerraform(this._nfsSharesRoot),
      no_kubernetes: cdktf.booleanToTerraform(this._noKubernetes),
      no_vtx_check: cdktf.booleanToTerraform(this._noVtxCheck),
      nodes: cdktf.numberToTerraform(this._nodes),
      output: cdktf.stringToTerraform(this._output),
      ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ports),
      preload: cdktf.booleanToTerraform(this._preload),
      qemu_firmware_path: cdktf.stringToTerraform(this._qemuFirmwarePath),
      registry_mirror: cdktf.listMapper(cdktf.stringToTerraform, false)(this._registryMirror),
      service_cluster_ip_range: cdktf.stringToTerraform(this._serviceClusterIpRange),
      socket_vmnet_client_path: cdktf.stringToTerraform(this._socketVmnetClientPath),
      socket_vmnet_path: cdktf.stringToTerraform(this._socketVmnetPath),
      ssh_ip_address: cdktf.stringToTerraform(this._sshIpAddress),
      ssh_key: cdktf.stringToTerraform(this._sshKey),
      ssh_port: cdktf.numberToTerraform(this._sshPort),
      ssh_user: cdktf.stringToTerraform(this._sshUser),
      static_ip: cdktf.stringToTerraform(this._staticIp),
      subnet: cdktf.stringToTerraform(this._subnet),
      trace: cdktf.stringToTerraform(this._trace),
      uuid: cdktf.stringToTerraform(this._uuid),
      vm: cdktf.booleanToTerraform(this._vm),
      wait: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wait),
      wait_timeout: cdktf.numberToTerraform(this._waitTimeout),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addons: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._addons),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      apiserver_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiserverIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      apiserver_name: {
        value: cdktf.stringToHclTerraform(this._apiserverName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apiserver_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiserverNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      apiserver_port: {
        value: cdktf.numberToHclTerraform(this._apiserverPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_pause_interval: {
        value: cdktf.numberToHclTerraform(this._autoPauseInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      auto_update_drivers: {
        value: cdktf.booleanToHclTerraform(this._autoUpdateDrivers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      base_image: {
        value: cdktf.stringToHclTerraform(this._baseImage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binary_mirror: {
        value: cdktf.stringToHclTerraform(this._binaryMirror),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_images: {
        value: cdktf.booleanToHclTerraform(this._cacheImages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cert_expiration: {
        value: cdktf.numberToHclTerraform(this._certExpiration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_name: {
        value: cdktf.stringToHclTerraform(this._clusterName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cni: {
        value: cdktf.stringToHclTerraform(this._cni),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_runtime: {
        value: cdktf.stringToHclTerraform(this._containerRuntime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpus: {
        value: cdktf.stringToHclTerraform(this._cpus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cri_socket: {
        value: cdktf.stringToHclTerraform(this._criSocket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_on_failure: {
        value: cdktf.booleanToHclTerraform(this._deleteOnFailure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_coredns_log: {
        value: cdktf.booleanToHclTerraform(this._disableCorednsLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_driver_mounts: {
        value: cdktf.booleanToHclTerraform(this._disableDriverMounts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_metrics: {
        value: cdktf.booleanToHclTerraform(this._disableMetrics),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_optimizations: {
        value: cdktf.booleanToHclTerraform(this._disableOptimizations),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disk_size: {
        value: cdktf.stringToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_domain: {
        value: cdktf.stringToHclTerraform(this._dnsDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dns_proxy: {
        value: cdktf.booleanToHclTerraform(this._dnsProxy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      docker_env: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dockerEnv),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      docker_opt: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dockerOpt),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      download_only: {
        value: cdktf.booleanToHclTerraform(this._downloadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      driver: {
        value: cdktf.stringToHclTerraform(this._driver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      embed_certs: {
        value: cdktf.booleanToHclTerraform(this._embedCerts),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extra_config: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._extraConfig),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      extra_disks: {
        value: cdktf.numberToHclTerraform(this._extraDisks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      feature_gates: {
        value: cdktf.stringToHclTerraform(this._featureGates),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force_systemd: {
        value: cdktf.booleanToHclTerraform(this._forceSystemd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gpus: {
        value: cdktf.stringToHclTerraform(this._gpus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha: {
        value: cdktf.booleanToHclTerraform(this._ha),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_dns_resolver: {
        value: cdktf.booleanToHclTerraform(this._hostDnsResolver),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_only_cidr: {
        value: cdktf.stringToHclTerraform(this._hostOnlyCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_only_nic_type: {
        value: cdktf.stringToHclTerraform(this._hostOnlyNicType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hyperkit_vpnkit_sock: {
        value: cdktf.stringToHclTerraform(this._hyperkitVpnkitSock),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hyperkit_vsock_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hyperkitVsockPorts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hyperv_external_adapter: {
        value: cdktf.stringToHclTerraform(this._hypervExternalAdapter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hyperv_use_external_switch: {
        value: cdktf.booleanToHclTerraform(this._hypervUseExternalSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hyperv_virtual_switch: {
        value: cdktf.stringToHclTerraform(this._hypervVirtualSwitch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_mirror_country: {
        value: cdktf.stringToHclTerraform(this._imageMirrorCountry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_repository: {
        value: cdktf.stringToHclTerraform(this._imageRepository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insecure_registry: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._insecureRegistry),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      install_addons: {
        value: cdktf.booleanToHclTerraform(this._installAddons),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      interactive: {
        value: cdktf.booleanToHclTerraform(this._interactive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      iso_url: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._isoUrl),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      keep_context: {
        value: cdktf.booleanToHclTerraform(this._keepContext),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kubernetes_version: {
        value: cdktf.stringToHclTerraform(this._kubernetesVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kvm_gpu: {
        value: cdktf.booleanToHclTerraform(this._kvmGpu),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kvm_hidden: {
        value: cdktf.booleanToHclTerraform(this._kvmHidden),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      kvm_network: {
        value: cdktf.stringToHclTerraform(this._kvmNetwork),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kvm_numa_count: {
        value: cdktf.numberToHclTerraform(this._kvmNumaCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      kvm_qemu_uri: {
        value: cdktf.stringToHclTerraform(this._kvmQemuUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listen_address: {
        value: cdktf.stringToHclTerraform(this._listenAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      memory: {
        value: cdktf.stringToHclTerraform(this._memory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount: {
        value: cdktf.booleanToHclTerraform(this._mount),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      mount_9p_version: {
        value: cdktf.stringToHclTerraform(this._mount9PVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_gid: {
        value: cdktf.stringToHclTerraform(this._mountGid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_ip: {
        value: cdktf.stringToHclTerraform(this._mountIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_msize: {
        value: cdktf.numberToHclTerraform(this._mountMsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mount_options: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mountOptions),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mount_port: {
        value: cdktf.numberToHclTerraform(this._mountPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mount_string: {
        value: cdktf.stringToHclTerraform(this._mountString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_type: {
        value: cdktf.stringToHclTerraform(this._mountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_uid: {
        value: cdktf.stringToHclTerraform(this._mountUid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_nic_type: {
        value: cdktf.stringToHclTerraform(this._natNicType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      native_ssh: {
        value: cdktf.booleanToHclTerraform(this._nativeSsh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nfs_share: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nfsShare),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      nfs_shares_root: {
        value: cdktf.stringToHclTerraform(this._nfsSharesRoot),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      no_kubernetes: {
        value: cdktf.booleanToHclTerraform(this._noKubernetes),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      no_vtx_check: {
        value: cdktf.booleanToHclTerraform(this._noVtxCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nodes: {
        value: cdktf.numberToHclTerraform(this._nodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      output: {
        value: cdktf.stringToHclTerraform(this._output),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      preload: {
        value: cdktf.booleanToHclTerraform(this._preload),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      qemu_firmware_path: {
        value: cdktf.stringToHclTerraform(this._qemuFirmwarePath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry_mirror: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._registryMirror),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      service_cluster_ip_range: {
        value: cdktf.stringToHclTerraform(this._serviceClusterIpRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      socket_vmnet_client_path: {
        value: cdktf.stringToHclTerraform(this._socketVmnetClientPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      socket_vmnet_path: {
        value: cdktf.stringToHclTerraform(this._socketVmnetPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_ip_address: {
        value: cdktf.stringToHclTerraform(this._sshIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_key: {
        value: cdktf.stringToHclTerraform(this._sshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssh_port: {
        value: cdktf.numberToHclTerraform(this._sshPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_user: {
        value: cdktf.stringToHclTerraform(this._sshUser),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_ip: {
        value: cdktf.stringToHclTerraform(this._staticIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace: {
        value: cdktf.stringToHclTerraform(this._trace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vm: {
        value: cdktf.booleanToHclTerraform(this._vm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wait),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      wait_timeout: {
        value: cdktf.numberToHclTerraform(this._waitTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
