// https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#annotations NodeTemplate#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#auth_certificate_authority NodeTemplate#auth_certificate_authority}
  */
  readonly authCertificateAuthority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#auth_key NodeTemplate#auth_key}
  */
  readonly authKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#cloud_credential_id NodeTemplate#cloud_credential_id}
  */
  readonly cloudCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#description NodeTemplate#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#driver_id NodeTemplate#driver_id}
  */
  readonly driverId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#engine_env NodeTemplate#engine_env}
  */
  readonly engineEnv?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#engine_insecure_registry NodeTemplate#engine_insecure_registry}
  */
  readonly engineInsecureRegistry?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#engine_install_url NodeTemplate#engine_install_url}
  */
  readonly engineInstallUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#engine_label NodeTemplate#engine_label}
  */
  readonly engineLabel?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#engine_opt NodeTemplate#engine_opt}
  */
  readonly engineOpt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#engine_registry_mirror NodeTemplate#engine_registry_mirror}
  */
  readonly engineRegistryMirror?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#engine_storage_driver NodeTemplate#engine_storage_driver}
  */
  readonly engineStorageDriver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#id NodeTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#labels NodeTemplate#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#name NodeTemplate#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#use_internal_ip_address NodeTemplate#use_internal_ip_address}
  */
  readonly useInternalIpAddress?: boolean | cdktf.IResolvable;
  /**
  * amazonec2_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#amazonec2_config NodeTemplate#amazonec2_config}
  */
  readonly amazonec2Config?: NodeTemplateAmazonec2Config;
  /**
  * azure_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#azure_config NodeTemplate#azure_config}
  */
  readonly azureConfig?: NodeTemplateAzureConfig;
  /**
  * digitalocean_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#digitalocean_config NodeTemplate#digitalocean_config}
  */
  readonly digitaloceanConfig?: NodeTemplateDigitaloceanConfig;
  /**
  * harvester_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#harvester_config NodeTemplate#harvester_config}
  */
  readonly harvesterConfig?: NodeTemplateHarvesterConfig;
  /**
  * hetzner_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#hetzner_config NodeTemplate#hetzner_config}
  */
  readonly hetznerConfig?: NodeTemplateHetznerConfig;
  /**
  * linode_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#linode_config NodeTemplate#linode_config}
  */
  readonly linodeConfig?: NodeTemplateLinodeConfig;
  /**
  * node_taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#node_taints NodeTemplate#node_taints}
  */
  readonly nodeTaints?: NodeTemplateNodeTaints[] | cdktf.IResolvable;
  /**
  * opennebula_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#opennebula_config NodeTemplate#opennebula_config}
  */
  readonly opennebulaConfig?: NodeTemplateOpennebulaConfig;
  /**
  * openstack_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#openstack_config NodeTemplate#openstack_config}
  */
  readonly openstackConfig?: NodeTemplateOpenstackConfig;
  /**
  * outscale_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#outscale_config NodeTemplate#outscale_config}
  */
  readonly outscaleConfig?: NodeTemplateOutscaleConfig;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#timeouts NodeTemplate#timeouts}
  */
  readonly timeouts?: NodeTemplateTimeouts;
  /**
  * vsphere_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#vsphere_config NodeTemplate#vsphere_config}
  */
  readonly vsphereConfig?: NodeTemplateVsphereConfig;
}
export interface NodeTemplateAmazonec2Config {
  /**
  * AWS Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#access_key NodeTemplate#access_key}
  */
  readonly accessKey?: string;
  /**
  * AWS machine image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ami NodeTemplate#ami}
  */
  readonly ami: string;
  /**
  * AWS spot instance duration in minutes (60, 120, 180, 240, 300, or 360)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#block_duration_minutes NodeTemplate#block_duration_minutes}
  */
  readonly blockDurationMinutes?: string;
  /**
  * AWS root device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#device_name NodeTemplate#device_name}
  */
  readonly deviceName?: string;
  /**
  * Encrypt EBS volume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#encrypt_ebs_volume NodeTemplate#encrypt_ebs_volume}
  */
  readonly encryptEbsVolume?: boolean | cdktf.IResolvable;
  /**
  * Optional endpoint URL (hostname only or fully qualified URI)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#endpoint NodeTemplate#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Enables or disables the HTTP metadata endpoint on your instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#http_endpoint NodeTemplate#http_endpoint}
  */
  readonly httpEndpoint?: string;
  /**
  * The state of token usage for your instance metadata requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#http_tokens NodeTemplate#http_tokens}
  */
  readonly httpTokens?: string;
  /**
  * AWS IAM Instance Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#iam_instance_profile NodeTemplate#iam_instance_profile}
  */
  readonly iamInstanceProfile?: string;
  /**
  * Disable SSL when sending requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#insecure_transport NodeTemplate#insecure_transport}
  */
  readonly insecureTransport?: boolean | cdktf.IResolvable;
  /**
  * AWS instance type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#instance_type NodeTemplate#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Custom KMS key ID using the AWS Managed CMK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#kms_key NodeTemplate#kms_key}
  */
  readonly kmsKey?: string;
  /**
  * Set this flag to enable CloudWatch monitoring
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#monitoring NodeTemplate#monitoring}
  */
  readonly monitoring?: boolean | cdktf.IResolvable;
  /**
  * Make the specified port number accessible from the Internet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#open_port NodeTemplate#open_port}
  */
  readonly openPort?: string[];
  /**
  * Only use a private IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#private_address_only NodeTemplate#private_address_only}
  */
  readonly privateAddressOnly?: boolean | cdktf.IResolvable;
  /**
  * AWS Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#region NodeTemplate#region}
  */
  readonly region: string;
  /**
  * Set this flag to request spot instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#request_spot_instance NodeTemplate#request_spot_instance}
  */
  readonly requestSpotInstance?: boolean | cdktf.IResolvable;
  /**
  * Set retry count for recoverable failures (use -1 to disable)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#retries NodeTemplate#retries}
  */
  readonly retries?: string;
  /**
  * AWS root disk size (in GB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#root_size NodeTemplate#root_size}
  */
  readonly rootSize?: string;
  /**
  * AWS Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#secret_key NodeTemplate#secret_key}
  */
  readonly secretKey?: string;
  /**
  * AWS VPC security group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#security_group NodeTemplate#security_group}
  */
  readonly securityGroup: string[];
  /**
  * Skip adding default rules to security groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#security_group_readonly NodeTemplate#security_group_readonly}
  */
  readonly securityGroupReadonly?: boolean | cdktf.IResolvable;
  /**
  * AWS Session Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#session_token NodeTemplate#session_token}
  */
  readonly sessionToken?: string;
  /**
  * AWS spot instance bid price (in dollar)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#spot_price NodeTemplate#spot_price}
  */
  readonly spotPrice?: string;
  /**
  * SSH Key for Instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_keypath NodeTemplate#ssh_keypath}
  */
  readonly sshKeypath?: string;
  /**
  * Set the name of the ssh user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_user NodeTemplate#ssh_user}
  */
  readonly sshUser?: string;
  /**
  * AWS VPC subnet id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#subnet_id NodeTemplate#subnet_id}
  */
  readonly subnetId: string;
  /**
  * AWS Tags (e.g. key1,value1,key2,value2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#tags NodeTemplate#tags}
  */
  readonly tags?: string;
  /**
  * Create an EBS optimized instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#use_ebs_optimized_instance NodeTemplate#use_ebs_optimized_instance}
  */
  readonly useEbsOptimizedInstance?: boolean | cdktf.IResolvable;
  /**
  * Force the usage of private IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#use_private_address NodeTemplate#use_private_address}
  */
  readonly usePrivateAddress?: boolean | cdktf.IResolvable;
  /**
  * Path to file with cloud-init user data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#userdata NodeTemplate#userdata}
  */
  readonly userdata?: string;
  /**
  * Amazon EBS volume type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#volume_type NodeTemplate#volume_type}
  */
  readonly volumeType?: string;
  /**
  * AWS VPC id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#vpc_id NodeTemplate#vpc_id}
  */
  readonly vpcId: string;
  /**
  * AWS zone for instance (i.e. a,b,c,d,e)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#zone NodeTemplate#zone}
  */
  readonly zone: string;
}

export function nodeTemplateAmazonec2ConfigToTerraform(struct?: NodeTemplateAmazonec2ConfigOutputReference | NodeTemplateAmazonec2Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    ami: cdktf.stringToTerraform(struct!.ami),
    block_duration_minutes: cdktf.stringToTerraform(struct!.blockDurationMinutes),
    device_name: cdktf.stringToTerraform(struct!.deviceName),
    encrypt_ebs_volume: cdktf.booleanToTerraform(struct!.encryptEbsVolume),
    endpoint: cdktf.stringToTerraform(struct!.endpoint),
    http_endpoint: cdktf.stringToTerraform(struct!.httpEndpoint),
    http_tokens: cdktf.stringToTerraform(struct!.httpTokens),
    iam_instance_profile: cdktf.stringToTerraform(struct!.iamInstanceProfile),
    insecure_transport: cdktf.booleanToTerraform(struct!.insecureTransport),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    kms_key: cdktf.stringToTerraform(struct!.kmsKey),
    monitoring: cdktf.booleanToTerraform(struct!.monitoring),
    open_port: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.openPort),
    private_address_only: cdktf.booleanToTerraform(struct!.privateAddressOnly),
    region: cdktf.stringToTerraform(struct!.region),
    request_spot_instance: cdktf.booleanToTerraform(struct!.requestSpotInstance),
    retries: cdktf.stringToTerraform(struct!.retries),
    root_size: cdktf.stringToTerraform(struct!.rootSize),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    security_group: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroup),
    security_group_readonly: cdktf.booleanToTerraform(struct!.securityGroupReadonly),
    session_token: cdktf.stringToTerraform(struct!.sessionToken),
    spot_price: cdktf.stringToTerraform(struct!.spotPrice),
    ssh_keypath: cdktf.stringToTerraform(struct!.sshKeypath),
    ssh_user: cdktf.stringToTerraform(struct!.sshUser),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    tags: cdktf.stringToTerraform(struct!.tags),
    use_ebs_optimized_instance: cdktf.booleanToTerraform(struct!.useEbsOptimizedInstance),
    use_private_address: cdktf.booleanToTerraform(struct!.usePrivateAddress),
    userdata: cdktf.stringToTerraform(struct!.userdata),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
    vpc_id: cdktf.stringToTerraform(struct!.vpcId),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function nodeTemplateAmazonec2ConfigToHclTerraform(struct?: NodeTemplateAmazonec2ConfigOutputReference | NodeTemplateAmazonec2Config): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ami: {
      value: cdktf.stringToHclTerraform(struct!.ami),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    block_duration_minutes: {
      value: cdktf.stringToHclTerraform(struct!.blockDurationMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_name: {
      value: cdktf.stringToHclTerraform(struct!.deviceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encrypt_ebs_volume: {
      value: cdktf.booleanToHclTerraform(struct!.encryptEbsVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    endpoint: {
      value: cdktf.stringToHclTerraform(struct!.endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.httpEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_tokens: {
      value: cdktf.stringToHclTerraform(struct!.httpTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iam_instance_profile: {
      value: cdktf.stringToHclTerraform(struct!.iamInstanceProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure_transport: {
      value: cdktf.booleanToHclTerraform(struct!.insecureTransport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key: {
      value: cdktf.stringToHclTerraform(struct!.kmsKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.monitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    open_port: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.openPort),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    private_address_only: {
      value: cdktf.booleanToHclTerraform(struct!.privateAddressOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_spot_instance: {
      value: cdktf.booleanToHclTerraform(struct!.requestSpotInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retries: {
      value: cdktf.stringToHclTerraform(struct!.retries),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_size: {
      value: cdktf.stringToHclTerraform(struct!.rootSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    security_group_readonly: {
      value: cdktf.booleanToHclTerraform(struct!.securityGroupReadonly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    session_token: {
      value: cdktf.stringToHclTerraform(struct!.sessionToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_price: {
      value: cdktf.stringToHclTerraform(struct!.spotPrice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_keypath: {
      value: cdktf.stringToHclTerraform(struct!.sshKeypath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_user: {
      value: cdktf.stringToHclTerraform(struct!.sshUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_ebs_optimized_instance: {
      value: cdktf.booleanToHclTerraform(struct!.useEbsOptimizedInstance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_private_address: {
      value: cdktf.booleanToHclTerraform(struct!.usePrivateAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    userdata: {
      value: cdktf.stringToHclTerraform(struct!.userdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpc_id: {
      value: cdktf.stringToHclTerraform(struct!.vpcId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateAmazonec2ConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeTemplateAmazonec2Config | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._ami !== undefined) {
      hasAnyValues = true;
      internalValueResult.ami = this._ami;
    }
    if (this._blockDurationMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDurationMinutes = this._blockDurationMinutes;
    }
    if (this._deviceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceName = this._deviceName;
    }
    if (this._encryptEbsVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptEbsVolume = this._encryptEbsVolume;
    }
    if (this._endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpoint = this._endpoint;
    }
    if (this._httpEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpEndpoint = this._httpEndpoint;
    }
    if (this._httpTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpTokens = this._httpTokens;
    }
    if (this._iamInstanceProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.iamInstanceProfile = this._iamInstanceProfile;
    }
    if (this._insecureTransport !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecureTransport = this._insecureTransport;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._kmsKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKey = this._kmsKey;
    }
    if (this._monitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring;
    }
    if (this._openPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.openPort = this._openPort;
    }
    if (this._privateAddressOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAddressOnly = this._privateAddressOnly;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._requestSpotInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSpotInstance = this._requestSpotInstance;
    }
    if (this._retries !== undefined) {
      hasAnyValues = true;
      internalValueResult.retries = this._retries;
    }
    if (this._rootSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootSize = this._rootSize;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._securityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroup = this._securityGroup;
    }
    if (this._securityGroupReadonly !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupReadonly = this._securityGroupReadonly;
    }
    if (this._sessionToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionToken = this._sessionToken;
    }
    if (this._spotPrice !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotPrice = this._spotPrice;
    }
    if (this._sshKeypath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeypath = this._sshKeypath;
    }
    if (this._sshUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshUser = this._sshUser;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._useEbsOptimizedInstance !== undefined) {
      hasAnyValues = true;
      internalValueResult.useEbsOptimizedInstance = this._useEbsOptimizedInstance;
    }
    if (this._usePrivateAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePrivateAddress = this._usePrivateAddress;
    }
    if (this._userdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.userdata = this._userdata;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    if (this._vpcId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpcId = this._vpcId;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateAmazonec2Config | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._ami = undefined;
      this._blockDurationMinutes = undefined;
      this._deviceName = undefined;
      this._encryptEbsVolume = undefined;
      this._endpoint = undefined;
      this._httpEndpoint = undefined;
      this._httpTokens = undefined;
      this._iamInstanceProfile = undefined;
      this._insecureTransport = undefined;
      this._instanceType = undefined;
      this._kmsKey = undefined;
      this._monitoring = undefined;
      this._openPort = undefined;
      this._privateAddressOnly = undefined;
      this._region = undefined;
      this._requestSpotInstance = undefined;
      this._retries = undefined;
      this._rootSize = undefined;
      this._secretKey = undefined;
      this._securityGroup = undefined;
      this._securityGroupReadonly = undefined;
      this._sessionToken = undefined;
      this._spotPrice = undefined;
      this._sshKeypath = undefined;
      this._sshUser = undefined;
      this._subnetId = undefined;
      this._tags = undefined;
      this._useEbsOptimizedInstance = undefined;
      this._usePrivateAddress = undefined;
      this._userdata = undefined;
      this._volumeType = undefined;
      this._vpcId = undefined;
      this._zone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._ami = value.ami;
      this._blockDurationMinutes = value.blockDurationMinutes;
      this._deviceName = value.deviceName;
      this._encryptEbsVolume = value.encryptEbsVolume;
      this._endpoint = value.endpoint;
      this._httpEndpoint = value.httpEndpoint;
      this._httpTokens = value.httpTokens;
      this._iamInstanceProfile = value.iamInstanceProfile;
      this._insecureTransport = value.insecureTransport;
      this._instanceType = value.instanceType;
      this._kmsKey = value.kmsKey;
      this._monitoring = value.monitoring;
      this._openPort = value.openPort;
      this._privateAddressOnly = value.privateAddressOnly;
      this._region = value.region;
      this._requestSpotInstance = value.requestSpotInstance;
      this._retries = value.retries;
      this._rootSize = value.rootSize;
      this._secretKey = value.secretKey;
      this._securityGroup = value.securityGroup;
      this._securityGroupReadonly = value.securityGroupReadonly;
      this._sessionToken = value.sessionToken;
      this._spotPrice = value.spotPrice;
      this._sshKeypath = value.sshKeypath;
      this._sshUser = value.sshUser;
      this._subnetId = value.subnetId;
      this._tags = value.tags;
      this._useEbsOptimizedInstance = value.useEbsOptimizedInstance;
      this._usePrivateAddress = value.usePrivateAddress;
      this._userdata = value.userdata;
      this._volumeType = value.volumeType;
      this._vpcId = value.vpcId;
      this._zone = value.zone;
    }
  }

  // access_key - computed: false, optional: true, required: false
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  public resetAccessKey() {
    this._accessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // ami - computed: false, optional: false, required: true
  private _ami?: string; 
  public get ami() {
    return this.getStringAttribute('ami');
  }
  public set ami(value: string) {
    this._ami = value;
  }
  // Temporarily expose input value. Use with caution.
  public get amiInput() {
    return this._ami;
  }

  // block_duration_minutes - computed: false, optional: true, required: false
  private _blockDurationMinutes?: string; 
  public get blockDurationMinutes() {
    return this.getStringAttribute('block_duration_minutes');
  }
  public set blockDurationMinutes(value: string) {
    this._blockDurationMinutes = value;
  }
  public resetBlockDurationMinutes() {
    this._blockDurationMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDurationMinutesInput() {
    return this._blockDurationMinutes;
  }

  // device_name - computed: false, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // encrypt_ebs_volume - computed: false, optional: true, required: false
  private _encryptEbsVolume?: boolean | cdktf.IResolvable; 
  public get encryptEbsVolume() {
    return this.getBooleanAttribute('encrypt_ebs_volume');
  }
  public set encryptEbsVolume(value: boolean | cdktf.IResolvable) {
    this._encryptEbsVolume = value;
  }
  public resetEncryptEbsVolume() {
    this._encryptEbsVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptEbsVolumeInput() {
    return this._encryptEbsVolume;
  }

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // http_endpoint - computed: false, optional: true, required: false
  private _httpEndpoint?: string; 
  public get httpEndpoint() {
    return this.getStringAttribute('http_endpoint');
  }
  public set httpEndpoint(value: string) {
    this._httpEndpoint = value;
  }
  public resetHttpEndpoint() {
    this._httpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpEndpointInput() {
    return this._httpEndpoint;
  }

  // http_tokens - computed: false, optional: true, required: false
  private _httpTokens?: string; 
  public get httpTokens() {
    return this.getStringAttribute('http_tokens');
  }
  public set httpTokens(value: string) {
    this._httpTokens = value;
  }
  public resetHttpTokens() {
    this._httpTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTokensInput() {
    return this._httpTokens;
  }

  // iam_instance_profile - computed: false, optional: true, required: false
  private _iamInstanceProfile?: string; 
  public get iamInstanceProfile() {
    return this.getStringAttribute('iam_instance_profile');
  }
  public set iamInstanceProfile(value: string) {
    this._iamInstanceProfile = value;
  }
  public resetIamInstanceProfile() {
    this._iamInstanceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iamInstanceProfileInput() {
    return this._iamInstanceProfile;
  }

  // insecure_transport - computed: false, optional: true, required: false
  private _insecureTransport?: boolean | cdktf.IResolvable; 
  public get insecureTransport() {
    return this.getBooleanAttribute('insecure_transport');
  }
  public set insecureTransport(value: boolean | cdktf.IResolvable) {
    this._insecureTransport = value;
  }
  public resetInsecureTransport() {
    this._insecureTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureTransportInput() {
    return this._insecureTransport;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // kms_key - computed: false, optional: true, required: false
  private _kmsKey?: string; 
  public get kmsKey() {
    return this.getStringAttribute('kms_key');
  }
  public set kmsKey(value: string) {
    this._kmsKey = value;
  }
  public resetKmsKey() {
    this._kmsKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyInput() {
    return this._kmsKey;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring?: boolean | cdktf.IResolvable; 
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }
  public set monitoring(value: boolean | cdktf.IResolvable) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring;
  }

  // open_port - computed: false, optional: true, required: false
  private _openPort?: string[]; 
  public get openPort() {
    return this.getListAttribute('open_port');
  }
  public set openPort(value: string[]) {
    this._openPort = value;
  }
  public resetOpenPort() {
    this._openPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openPortInput() {
    return this._openPort;
  }

  // private_address_only - computed: false, optional: true, required: false
  private _privateAddressOnly?: boolean | cdktf.IResolvable; 
  public get privateAddressOnly() {
    return this.getBooleanAttribute('private_address_only');
  }
  public set privateAddressOnly(value: boolean | cdktf.IResolvable) {
    this._privateAddressOnly = value;
  }
  public resetPrivateAddressOnly() {
    this._privateAddressOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAddressOnlyInput() {
    return this._privateAddressOnly;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // request_spot_instance - computed: false, optional: true, required: false
  private _requestSpotInstance?: boolean | cdktf.IResolvable; 
  public get requestSpotInstance() {
    return this.getBooleanAttribute('request_spot_instance');
  }
  public set requestSpotInstance(value: boolean | cdktf.IResolvable) {
    this._requestSpotInstance = value;
  }
  public resetRequestSpotInstance() {
    this._requestSpotInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSpotInstanceInput() {
    return this._requestSpotInstance;
  }

  // retries - computed: false, optional: true, required: false
  private _retries?: string; 
  public get retries() {
    return this.getStringAttribute('retries');
  }
  public set retries(value: string) {
    this._retries = value;
  }
  public resetRetries() {
    this._retries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriesInput() {
    return this._retries;
  }

  // root_size - computed: false, optional: true, required: false
  private _rootSize?: string; 
  public get rootSize() {
    return this.getStringAttribute('root_size');
  }
  public set rootSize(value: string) {
    this._rootSize = value;
  }
  public resetRootSize() {
    this._rootSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootSizeInput() {
    return this._rootSize;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // security_group - computed: false, optional: false, required: true
  private _securityGroup?: string[]; 
  public get securityGroup() {
    return this.getListAttribute('security_group');
  }
  public set securityGroup(value: string[]) {
    this._securityGroup = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupInput() {
    return this._securityGroup;
  }

  // security_group_readonly - computed: false, optional: true, required: false
  private _securityGroupReadonly?: boolean | cdktf.IResolvable; 
  public get securityGroupReadonly() {
    return this.getBooleanAttribute('security_group_readonly');
  }
  public set securityGroupReadonly(value: boolean | cdktf.IResolvable) {
    this._securityGroupReadonly = value;
  }
  public resetSecurityGroupReadonly() {
    this._securityGroupReadonly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupReadonlyInput() {
    return this._securityGroupReadonly;
  }

  // session_token - computed: false, optional: true, required: false
  private _sessionToken?: string; 
  public get sessionToken() {
    return this.getStringAttribute('session_token');
  }
  public set sessionToken(value: string) {
    this._sessionToken = value;
  }
  public resetSessionToken() {
    this._sessionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionTokenInput() {
    return this._sessionToken;
  }

  // spot_price - computed: false, optional: true, required: false
  private _spotPrice?: string; 
  public get spotPrice() {
    return this.getStringAttribute('spot_price');
  }
  public set spotPrice(value: string) {
    this._spotPrice = value;
  }
  public resetSpotPrice() {
    this._spotPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotPriceInput() {
    return this._spotPrice;
  }

  // ssh_keypath - computed: false, optional: true, required: false
  private _sshKeypath?: string; 
  public get sshKeypath() {
    return this.getStringAttribute('ssh_keypath');
  }
  public set sshKeypath(value: string) {
    this._sshKeypath = value;
  }
  public resetSshKeypath() {
    this._sshKeypath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeypathInput() {
    return this._sshKeypath;
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

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // use_ebs_optimized_instance - computed: false, optional: true, required: false
  private _useEbsOptimizedInstance?: boolean | cdktf.IResolvable; 
  public get useEbsOptimizedInstance() {
    return this.getBooleanAttribute('use_ebs_optimized_instance');
  }
  public set useEbsOptimizedInstance(value: boolean | cdktf.IResolvable) {
    this._useEbsOptimizedInstance = value;
  }
  public resetUseEbsOptimizedInstance() {
    this._useEbsOptimizedInstance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useEbsOptimizedInstanceInput() {
    return this._useEbsOptimizedInstance;
  }

  // use_private_address - computed: false, optional: true, required: false
  private _usePrivateAddress?: boolean | cdktf.IResolvable; 
  public get usePrivateAddress() {
    return this.getBooleanAttribute('use_private_address');
  }
  public set usePrivateAddress(value: boolean | cdktf.IResolvable) {
    this._usePrivateAddress = value;
  }
  public resetUsePrivateAddress() {
    this._usePrivateAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivateAddressInput() {
    return this._usePrivateAddress;
  }

  // userdata - computed: false, optional: true, required: false
  private _userdata?: string; 
  public get userdata() {
    return this.getStringAttribute('userdata');
  }
  public set userdata(value: string) {
    this._userdata = value;
  }
  public resetUserdata() {
    this._userdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdataInput() {
    return this._userdata;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}
export interface NodeTemplateAzureConfig {
  /**
  * Enable Accelerated Networking when creating an Azure Network Interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#accelerated_networking NodeTemplate#accelerated_networking}
  */
  readonly acceleratedNetworking?: boolean | cdktf.IResolvable;
  /**
  * Azure Availability Set to place the virtual machine into
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#availability_set NodeTemplate#availability_set}
  */
  readonly availabilitySet?: string;
  /**
  * The Azure Availability Zone the VM should be created in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#availability_zone NodeTemplate#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * Azure Service Principal Account ID (optional, browser auth is used if not specified)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#client_id NodeTemplate#client_id}
  */
  readonly clientId?: string;
  /**
  * Azure Service Principal Account password (optional, browser auth is used if not specified)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#client_secret NodeTemplate#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Path to file with custom-data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#custom_data NodeTemplate#custom_data}
  */
  readonly customData?: string;
  /**
  * Disk size if using managed disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#disk_size NodeTemplate#disk_size}
  */
  readonly diskSize?: string;
  /**
  * A unique DNS label for the public IP adddress
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#dns NodeTemplate#dns}
  */
  readonly dns?: string;
  /**
  * Port number for Docker engine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#docker_port NodeTemplate#docker_port}
  */
  readonly dockerPort?: string;
  /**
  * Azure environment (e.g. AzurePublicCloud, AzureChinaCloud)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#environment NodeTemplate#environment}
  */
  readonly environment?: string;
  /**
  * Fault domain count to use for availability set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#fault_domain_count NodeTemplate#fault_domain_count}
  */
  readonly faultDomainCount?: string;
  /**
  * Azure virtual machine OS image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#image NodeTemplate#image}
  */
  readonly image?: string;
  /**
  * Azure region to create the virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#location NodeTemplate#location}
  */
  readonly location?: string;
  /**
  * Configures VM and availability set for managed disks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#managed_disks NodeTemplate#managed_disks}
  */
  readonly managedDisks?: boolean | cdktf.IResolvable;
  /**
  * Do not create a public IP address for the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#no_public_ip NodeTemplate#no_public_ip}
  */
  readonly noPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Azure Network Security Group to assign this node to (accepts either a name or resource ID, default is to create a new NSG for each machine)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#nsg NodeTemplate#nsg}
  */
  readonly nsg?: string;
  /**
  * Make the specified port number accessible from the Internet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#open_port NodeTemplate#open_port}
  */
  readonly openPort?: string[];
  /**
  * Purchase plan for Azure Virtual Machine (in <publisher>:<product>:<plan> format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#plan NodeTemplate#plan}
  */
  readonly plan?: string;
  /**
  * Specify a static private IP address for the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#private_ip_address NodeTemplate#private_ip_address}
  */
  readonly privateIpAddress?: string;
  /**
  * Azure Resource Group name (will be created if missing)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#resource_group NodeTemplate#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Size for Azure Virtual Machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#size NodeTemplate#size}
  */
  readonly size?: string;
  /**
  * Username for SSH login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_user NodeTemplate#ssh_user}
  */
  readonly sshUser?: string;
  /**
  * Assign a static public IP address to the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#static_public_ip NodeTemplate#static_public_ip}
  */
  readonly staticPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Type of Storage Account to host the OS Disk for the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#storage_type NodeTemplate#storage_type}
  */
  readonly storageType?: string;
  /**
  * Azure Subnet Name to be used within the Virtual Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#subnet NodeTemplate#subnet}
  */
  readonly subnet?: string;
  /**
  * Private CIDR block to be used for the new subnet, should comply RFC 1918
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#subnet_prefix NodeTemplate#subnet_prefix}
  */
  readonly subnetPrefix?: string;
  /**
  * Azure Subscription ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#subscription_id NodeTemplate#subscription_id}
  */
  readonly subscriptionId?: string;
  /**
  * Tags to be applied to the Azure VM instance (e.g. key1,value1,key2,value2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#tags NodeTemplate#tags}
  */
  readonly tags?: string;
  /**
  * Update domain count to use for availability set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#update_domain_count NodeTemplate#update_domain_count}
  */
  readonly updateDomainCount?: string;
  /**
  * Use private IP address of the machine to connect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#use_private_ip NodeTemplate#use_private_ip}
  */
  readonly usePrivateIp?: boolean | cdktf.IResolvable;
  /**
  * Use the Standard SKU when creating a public IP for an Azure VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#use_public_ip_standard_sku NodeTemplate#use_public_ip_standard_sku}
  */
  readonly usePublicIpStandardSku?: boolean | cdktf.IResolvable;
  /**
  * Azure Virtual Network name to connect the virtual machine (in [resourcegroup:]name format)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#vnet NodeTemplate#vnet}
  */
  readonly vnet?: string;
}

export function nodeTemplateAzureConfigToTerraform(struct?: NodeTemplateAzureConfigOutputReference | NodeTemplateAzureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accelerated_networking: cdktf.booleanToTerraform(struct!.acceleratedNetworking),
    availability_set: cdktf.stringToTerraform(struct!.availabilitySet),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    custom_data: cdktf.stringToTerraform(struct!.customData),
    disk_size: cdktf.stringToTerraform(struct!.diskSize),
    dns: cdktf.stringToTerraform(struct!.dns),
    docker_port: cdktf.stringToTerraform(struct!.dockerPort),
    environment: cdktf.stringToTerraform(struct!.environment),
    fault_domain_count: cdktf.stringToTerraform(struct!.faultDomainCount),
    image: cdktf.stringToTerraform(struct!.image),
    location: cdktf.stringToTerraform(struct!.location),
    managed_disks: cdktf.booleanToTerraform(struct!.managedDisks),
    no_public_ip: cdktf.booleanToTerraform(struct!.noPublicIp),
    nsg: cdktf.stringToTerraform(struct!.nsg),
    open_port: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.openPort),
    plan: cdktf.stringToTerraform(struct!.plan),
    private_ip_address: cdktf.stringToTerraform(struct!.privateIpAddress),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    size: cdktf.stringToTerraform(struct!.size),
    ssh_user: cdktf.stringToTerraform(struct!.sshUser),
    static_public_ip: cdktf.booleanToTerraform(struct!.staticPublicIp),
    storage_type: cdktf.stringToTerraform(struct!.storageType),
    subnet: cdktf.stringToTerraform(struct!.subnet),
    subnet_prefix: cdktf.stringToTerraform(struct!.subnetPrefix),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    tags: cdktf.stringToTerraform(struct!.tags),
    update_domain_count: cdktf.stringToTerraform(struct!.updateDomainCount),
    use_private_ip: cdktf.booleanToTerraform(struct!.usePrivateIp),
    use_public_ip_standard_sku: cdktf.booleanToTerraform(struct!.usePublicIpStandardSku),
    vnet: cdktf.stringToTerraform(struct!.vnet),
  }
}


export function nodeTemplateAzureConfigToHclTerraform(struct?: NodeTemplateAzureConfigOutputReference | NodeTemplateAzureConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accelerated_networking: {
      value: cdktf.booleanToHclTerraform(struct!.acceleratedNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    availability_set: {
      value: cdktf.stringToHclTerraform(struct!.availabilitySet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_data: {
      value: cdktf.stringToHclTerraform(struct!.customData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.stringToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns: {
      value: cdktf.stringToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    docker_port: {
      value: cdktf.stringToHclTerraform(struct!.dockerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment: {
      value: cdktf.stringToHclTerraform(struct!.environment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fault_domain_count: {
      value: cdktf.stringToHclTerraform(struct!.faultDomainCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    location: {
      value: cdktf.stringToHclTerraform(struct!.location),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_disks: {
      value: cdktf.booleanToHclTerraform(struct!.managedDisks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.noPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    nsg: {
      value: cdktf.stringToHclTerraform(struct!.nsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    open_port: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.openPort),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    plan: {
      value: cdktf.stringToHclTerraform(struct!.plan),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.privateIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_user: {
      value: cdktf.stringToHclTerraform(struct!.sshUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.staticPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_type: {
      value: cdktf.stringToHclTerraform(struct!.storageType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subnet_prefix: {
      value: cdktf.stringToHclTerraform(struct!.subnetPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_domain_count: {
      value: cdktf.stringToHclTerraform(struct!.updateDomainCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_private_ip: {
      value: cdktf.booleanToHclTerraform(struct!.usePrivateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    use_public_ip_standard_sku: {
      value: cdktf.booleanToHclTerraform(struct!.usePublicIpStandardSku),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    vnet: {
      value: cdktf.stringToHclTerraform(struct!.vnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateAzureConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeTemplateAzureConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceleratedNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceleratedNetworking = this._acceleratedNetworking;
    }
    if (this._availabilitySet !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilitySet = this._availabilitySet;
    }
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._customData !== undefined) {
      hasAnyValues = true;
      internalValueResult.customData = this._customData;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._dockerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerPort = this._dockerPort;
    }
    if (this._environment !== undefined) {
      hasAnyValues = true;
      internalValueResult.environment = this._environment;
    }
    if (this._faultDomainCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.faultDomainCount = this._faultDomainCount;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._location !== undefined) {
      hasAnyValues = true;
      internalValueResult.location = this._location;
    }
    if (this._managedDisks !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedDisks = this._managedDisks;
    }
    if (this._noPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.noPublicIp = this._noPublicIp;
    }
    if (this._nsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsg = this._nsg;
    }
    if (this._openPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.openPort = this._openPort;
    }
    if (this._plan !== undefined) {
      hasAnyValues = true;
      internalValueResult.plan = this._plan;
    }
    if (this._privateIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpAddress = this._privateIpAddress;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sshUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshUser = this._sshUser;
    }
    if (this._staticPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticPublicIp = this._staticPublicIp;
    }
    if (this._storageType !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageType = this._storageType;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    if (this._subnetPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetPrefix = this._subnetPrefix;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._updateDomainCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateDomainCount = this._updateDomainCount;
    }
    if (this._usePrivateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePrivateIp = this._usePrivateIp;
    }
    if (this._usePublicIpStandardSku !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePublicIpStandardSku = this._usePublicIpStandardSku;
    }
    if (this._vnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.vnet = this._vnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateAzureConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceleratedNetworking = undefined;
      this._availabilitySet = undefined;
      this._availabilityZone = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._customData = undefined;
      this._diskSize = undefined;
      this._dns = undefined;
      this._dockerPort = undefined;
      this._environment = undefined;
      this._faultDomainCount = undefined;
      this._image = undefined;
      this._location = undefined;
      this._managedDisks = undefined;
      this._noPublicIp = undefined;
      this._nsg = undefined;
      this._openPort = undefined;
      this._plan = undefined;
      this._privateIpAddress = undefined;
      this._resourceGroup = undefined;
      this._size = undefined;
      this._sshUser = undefined;
      this._staticPublicIp = undefined;
      this._storageType = undefined;
      this._subnet = undefined;
      this._subnetPrefix = undefined;
      this._subscriptionId = undefined;
      this._tags = undefined;
      this._updateDomainCount = undefined;
      this._usePrivateIp = undefined;
      this._usePublicIpStandardSku = undefined;
      this._vnet = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceleratedNetworking = value.acceleratedNetworking;
      this._availabilitySet = value.availabilitySet;
      this._availabilityZone = value.availabilityZone;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._customData = value.customData;
      this._diskSize = value.diskSize;
      this._dns = value.dns;
      this._dockerPort = value.dockerPort;
      this._environment = value.environment;
      this._faultDomainCount = value.faultDomainCount;
      this._image = value.image;
      this._location = value.location;
      this._managedDisks = value.managedDisks;
      this._noPublicIp = value.noPublicIp;
      this._nsg = value.nsg;
      this._openPort = value.openPort;
      this._plan = value.plan;
      this._privateIpAddress = value.privateIpAddress;
      this._resourceGroup = value.resourceGroup;
      this._size = value.size;
      this._sshUser = value.sshUser;
      this._staticPublicIp = value.staticPublicIp;
      this._storageType = value.storageType;
      this._subnet = value.subnet;
      this._subnetPrefix = value.subnetPrefix;
      this._subscriptionId = value.subscriptionId;
      this._tags = value.tags;
      this._updateDomainCount = value.updateDomainCount;
      this._usePrivateIp = value.usePrivateIp;
      this._usePublicIpStandardSku = value.usePublicIpStandardSku;
      this._vnet = value.vnet;
    }
  }

  // accelerated_networking - computed: false, optional: true, required: false
  private _acceleratedNetworking?: boolean | cdktf.IResolvable; 
  public get acceleratedNetworking() {
    return this.getBooleanAttribute('accelerated_networking');
  }
  public set acceleratedNetworking(value: boolean | cdktf.IResolvable) {
    this._acceleratedNetworking = value;
  }
  public resetAcceleratedNetworking() {
    this._acceleratedNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceleratedNetworkingInput() {
    return this._acceleratedNetworking;
  }

  // availability_set - computed: false, optional: true, required: false
  private _availabilitySet?: string; 
  public get availabilitySet() {
    return this.getStringAttribute('availability_set');
  }
  public set availabilitySet(value: string) {
    this._availabilitySet = value;
  }
  public resetAvailabilitySet() {
    this._availabilitySet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilitySetInput() {
    return this._availabilitySet;
  }

  // availability_zone - computed: false, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // custom_data - computed: false, optional: true, required: false
  private _customData?: string; 
  public get customData() {
    return this.getStringAttribute('custom_data');
  }
  public set customData(value: string) {
    this._customData = value;
  }
  public resetCustomData() {
    this._customData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDataInput() {
    return this._customData;
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

  // dns - computed: false, optional: true, required: false
  private _dns?: string; 
  public get dns() {
    return this.getStringAttribute('dns');
  }
  public set dns(value: string) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // docker_port - computed: false, optional: true, required: false
  private _dockerPort?: string; 
  public get dockerPort() {
    return this.getStringAttribute('docker_port');
  }
  public set dockerPort(value: string) {
    this._dockerPort = value;
  }
  public resetDockerPort() {
    this._dockerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerPortInput() {
    return this._dockerPort;
  }

  // environment - computed: false, optional: true, required: false
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  public resetEnvironment() {
    this._environment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // fault_domain_count - computed: false, optional: true, required: false
  private _faultDomainCount?: string; 
  public get faultDomainCount() {
    return this.getStringAttribute('fault_domain_count');
  }
  public set faultDomainCount(value: string) {
    this._faultDomainCount = value;
  }
  public resetFaultDomainCount() {
    this._faultDomainCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get faultDomainCountInput() {
    return this._faultDomainCount;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // location - computed: false, optional: true, required: false
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // managed_disks - computed: false, optional: true, required: false
  private _managedDisks?: boolean | cdktf.IResolvable; 
  public get managedDisks() {
    return this.getBooleanAttribute('managed_disks');
  }
  public set managedDisks(value: boolean | cdktf.IResolvable) {
    this._managedDisks = value;
  }
  public resetManagedDisks() {
    this._managedDisks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedDisksInput() {
    return this._managedDisks;
  }

  // no_public_ip - computed: false, optional: true, required: false
  private _noPublicIp?: boolean | cdktf.IResolvable; 
  public get noPublicIp() {
    return this.getBooleanAttribute('no_public_ip');
  }
  public set noPublicIp(value: boolean | cdktf.IResolvable) {
    this._noPublicIp = value;
  }
  public resetNoPublicIp() {
    this._noPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noPublicIpInput() {
    return this._noPublicIp;
  }

  // nsg - computed: false, optional: true, required: false
  private _nsg?: string; 
  public get nsg() {
    return this.getStringAttribute('nsg');
  }
  public set nsg(value: string) {
    this._nsg = value;
  }
  public resetNsg() {
    this._nsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgInput() {
    return this._nsg;
  }

  // open_port - computed: false, optional: true, required: false
  private _openPort?: string[]; 
  public get openPort() {
    return this.getListAttribute('open_port');
  }
  public set openPort(value: string[]) {
    this._openPort = value;
  }
  public resetOpenPort() {
    this._openPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openPortInput() {
    return this._openPort;
  }

  // plan - computed: false, optional: true, required: false
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  public resetPlan() {
    this._plan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // private_ip_address - computed: false, optional: true, required: false
  private _privateIpAddress?: string; 
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }
  public set privateIpAddress(value: string) {
    this._privateIpAddress = value;
  }
  public resetPrivateIpAddress() {
    this._privateIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpAddressInput() {
    return this._privateIpAddress;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // static_public_ip - computed: false, optional: true, required: false
  private _staticPublicIp?: boolean | cdktf.IResolvable; 
  public get staticPublicIp() {
    return this.getBooleanAttribute('static_public_ip');
  }
  public set staticPublicIp(value: boolean | cdktf.IResolvable) {
    this._staticPublicIp = value;
  }
  public resetStaticPublicIp() {
    this._staticPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPublicIpInput() {
    return this._staticPublicIp;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
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

  // subnet_prefix - computed: false, optional: true, required: false
  private _subnetPrefix?: string; 
  public get subnetPrefix() {
    return this.getStringAttribute('subnet_prefix');
  }
  public set subnetPrefix(value: string) {
    this._subnetPrefix = value;
  }
  public resetSubnetPrefix() {
    this._subnetPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetPrefixInput() {
    return this._subnetPrefix;
  }

  // subscription_id - computed: false, optional: true, required: false
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  public resetSubscriptionId() {
    this._subscriptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // update_domain_count - computed: false, optional: true, required: false
  private _updateDomainCount?: string; 
  public get updateDomainCount() {
    return this.getStringAttribute('update_domain_count');
  }
  public set updateDomainCount(value: string) {
    this._updateDomainCount = value;
  }
  public resetUpdateDomainCount() {
    this._updateDomainCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateDomainCountInput() {
    return this._updateDomainCount;
  }

  // use_private_ip - computed: false, optional: true, required: false
  private _usePrivateIp?: boolean | cdktf.IResolvable; 
  public get usePrivateIp() {
    return this.getBooleanAttribute('use_private_ip');
  }
  public set usePrivateIp(value: boolean | cdktf.IResolvable) {
    this._usePrivateIp = value;
  }
  public resetUsePrivateIp() {
    this._usePrivateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivateIpInput() {
    return this._usePrivateIp;
  }

  // use_public_ip_standard_sku - computed: false, optional: true, required: false
  private _usePublicIpStandardSku?: boolean | cdktf.IResolvable; 
  public get usePublicIpStandardSku() {
    return this.getBooleanAttribute('use_public_ip_standard_sku');
  }
  public set usePublicIpStandardSku(value: boolean | cdktf.IResolvable) {
    this._usePublicIpStandardSku = value;
  }
  public resetUsePublicIpStandardSku() {
    this._usePublicIpStandardSku = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicIpStandardSkuInput() {
    return this._usePublicIpStandardSku;
  }

  // vnet - computed: false, optional: true, required: false
  private _vnet?: string; 
  public get vnet() {
    return this.getStringAttribute('vnet');
  }
  public set vnet(value: string) {
    this._vnet = value;
  }
  public resetVnet() {
    this._vnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vnetInput() {
    return this._vnet;
  }
}
export interface NodeTemplateDigitaloceanConfig {
  /**
  * Digital Ocean access token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#access_token NodeTemplate#access_token}
  */
  readonly accessToken?: string;
  /**
  * Enable backups for droplet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#backups NodeTemplate#backups}
  */
  readonly backups?: boolean | cdktf.IResolvable;
  /**
  * Digital Ocean Image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#image NodeTemplate#image}
  */
  readonly image?: string;
  /**
  * Enable ipv6 for droplet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ipv6 NodeTemplate#ipv6}
  */
  readonly ipv6?: boolean | cdktf.IResolvable;
  /**
  * Enable monitoring for droplet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#monitoring NodeTemplate#monitoring}
  */
  readonly monitoring?: boolean | cdktf.IResolvable;
  /**
  * Enable private networking for droplet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#private_networking NodeTemplate#private_networking}
  */
  readonly privateNetworking?: boolean | cdktf.IResolvable;
  /**
  * Digital Ocean region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#region NodeTemplate#region}
  */
  readonly region?: string;
  /**
  * Digital Ocean size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#size NodeTemplate#size}
  */
  readonly size?: string;
  /**
  * SSH key fingerprint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_key_fingerprint NodeTemplate#ssh_key_fingerprint}
  */
  readonly sshKeyFingerprint?: string;
  /**
  * SSH private key path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_key_path NodeTemplate#ssh_key_path}
  */
  readonly sshKeyPath?: string;
  /**
  * SSH port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_port NodeTemplate#ssh_port}
  */
  readonly sshPort?: string;
  /**
  * SSH username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_user NodeTemplate#ssh_user}
  */
  readonly sshUser?: string;
  /**
  * Comma-separated list of tags to apply to the Droplet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#tags NodeTemplate#tags}
  */
  readonly tags?: string;
  /**
  * Path to file with cloud-init user-data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#userdata NodeTemplate#userdata}
  */
  readonly userdata?: string;
}

export function nodeTemplateDigitaloceanConfigToTerraform(struct?: NodeTemplateDigitaloceanConfigOutputReference | NodeTemplateDigitaloceanConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token: cdktf.stringToTerraform(struct!.accessToken),
    backups: cdktf.booleanToTerraform(struct!.backups),
    image: cdktf.stringToTerraform(struct!.image),
    ipv6: cdktf.booleanToTerraform(struct!.ipv6),
    monitoring: cdktf.booleanToTerraform(struct!.monitoring),
    private_networking: cdktf.booleanToTerraform(struct!.privateNetworking),
    region: cdktf.stringToTerraform(struct!.region),
    size: cdktf.stringToTerraform(struct!.size),
    ssh_key_fingerprint: cdktf.stringToTerraform(struct!.sshKeyFingerprint),
    ssh_key_path: cdktf.stringToTerraform(struct!.sshKeyPath),
    ssh_port: cdktf.stringToTerraform(struct!.sshPort),
    ssh_user: cdktf.stringToTerraform(struct!.sshUser),
    tags: cdktf.stringToTerraform(struct!.tags),
    userdata: cdktf.stringToTerraform(struct!.userdata),
  }
}


export function nodeTemplateDigitaloceanConfigToHclTerraform(struct?: NodeTemplateDigitaloceanConfigOutputReference | NodeTemplateDigitaloceanConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token: {
      value: cdktf.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backups: {
      value: cdktf.booleanToHclTerraform(struct!.backups),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.monitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_networking: {
      value: cdktf.booleanToHclTerraform(struct!.privateNetworking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key_fingerprint: {
      value: cdktf.stringToHclTerraform(struct!.sshKeyFingerprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_key_path: {
      value: cdktf.stringToHclTerraform(struct!.sshKeyPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_port: {
      value: cdktf.stringToHclTerraform(struct!.sshPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_user: {
      value: cdktf.stringToHclTerraform(struct!.sshUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    userdata: {
      value: cdktf.stringToHclTerraform(struct!.userdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateDigitaloceanConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeTemplateDigitaloceanConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._backups !== undefined) {
      hasAnyValues = true;
      internalValueResult.backups = this._backups;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._monitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring;
    }
    if (this._privateNetworking !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateNetworking = this._privateNetworking;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._sshKeyFingerprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyFingerprint = this._sshKeyFingerprint;
    }
    if (this._sshKeyPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyPath = this._sshKeyPath;
    }
    if (this._sshPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPort = this._sshPort;
    }
    if (this._sshUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshUser = this._sshUser;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._userdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.userdata = this._userdata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateDigitaloceanConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._backups = undefined;
      this._image = undefined;
      this._ipv6 = undefined;
      this._monitoring = undefined;
      this._privateNetworking = undefined;
      this._region = undefined;
      this._size = undefined;
      this._sshKeyFingerprint = undefined;
      this._sshKeyPath = undefined;
      this._sshPort = undefined;
      this._sshUser = undefined;
      this._tags = undefined;
      this._userdata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._backups = value.backups;
      this._image = value.image;
      this._ipv6 = value.ipv6;
      this._monitoring = value.monitoring;
      this._privateNetworking = value.privateNetworking;
      this._region = value.region;
      this._size = value.size;
      this._sshKeyFingerprint = value.sshKeyFingerprint;
      this._sshKeyPath = value.sshKeyPath;
      this._sshPort = value.sshPort;
      this._sshUser = value.sshUser;
      this._tags = value.tags;
      this._userdata = value.userdata;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // backups - computed: false, optional: true, required: false
  private _backups?: boolean | cdktf.IResolvable; 
  public get backups() {
    return this.getBooleanAttribute('backups');
  }
  public set backups(value: boolean | cdktf.IResolvable) {
    this._backups = value;
  }
  public resetBackups() {
    this._backups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupsInput() {
    return this._backups;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: boolean | cdktf.IResolvable; 
  public get ipv6() {
    return this.getBooleanAttribute('ipv6');
  }
  public set ipv6(value: boolean | cdktf.IResolvable) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring?: boolean | cdktf.IResolvable; 
  public get monitoring() {
    return this.getBooleanAttribute('monitoring');
  }
  public set monitoring(value: boolean | cdktf.IResolvable) {
    this._monitoring = value;
  }
  public resetMonitoring() {
    this._monitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring;
  }

  // private_networking - computed: false, optional: true, required: false
  private _privateNetworking?: boolean | cdktf.IResolvable; 
  public get privateNetworking() {
    return this.getBooleanAttribute('private_networking');
  }
  public set privateNetworking(value: boolean | cdktf.IResolvable) {
    this._privateNetworking = value;
  }
  public resetPrivateNetworking() {
    this._privateNetworking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateNetworkingInput() {
    return this._privateNetworking;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // ssh_key_fingerprint - computed: false, optional: true, required: false
  private _sshKeyFingerprint?: string; 
  public get sshKeyFingerprint() {
    return this.getStringAttribute('ssh_key_fingerprint');
  }
  public set sshKeyFingerprint(value: string) {
    this._sshKeyFingerprint = value;
  }
  public resetSshKeyFingerprint() {
    this._sshKeyFingerprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyFingerprintInput() {
    return this._sshKeyFingerprint;
  }

  // ssh_key_path - computed: false, optional: true, required: false
  private _sshKeyPath?: string; 
  public get sshKeyPath() {
    return this.getStringAttribute('ssh_key_path');
  }
  public set sshKeyPath(value: string) {
    this._sshKeyPath = value;
  }
  public resetSshKeyPath() {
    this._sshKeyPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyPathInput() {
    return this._sshKeyPath;
  }

  // ssh_port - computed: false, optional: true, required: false
  private _sshPort?: string; 
  public get sshPort() {
    return this.getStringAttribute('ssh_port');
  }
  public set sshPort(value: string) {
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

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // userdata - computed: false, optional: true, required: false
  private _userdata?: string; 
  public get userdata() {
    return this.getStringAttribute('userdata');
  }
  public set userdata(value: string) {
    this._userdata = value;
  }
  public resetUserdata() {
    this._userdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdataInput() {
    return this._userdata;
  }
}
export interface NodeTemplateHarvesterConfig {
  /**
  * CPU count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#cpu_count NodeTemplate#cpu_count}
  */
  readonly cpuCount?: string;
  /**
  * Disk bus
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#disk_bus NodeTemplate#disk_bus}
  */
  readonly diskBus?: string;
  /**
  * A JSON string specifying info for the disks e.g. `{"disks":[{"imageName":"harvester-public/image-57hzg","bootOrder":1,"size":40},{"storageClassName":"node-driver-test","bootOrder":2,"size":1}]}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#disk_info NodeTemplate#disk_info}
  */
  readonly diskInfo?: string;
  /**
  * Disk size (in GiB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#disk_size NodeTemplate#disk_size}
  */
  readonly diskSize?: string;
  /**
  * Image name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#image_name NodeTemplate#image_name}
  */
  readonly imageName?: string;
  /**
  * Memory size (in GiB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#memory_size NodeTemplate#memory_size}
  */
  readonly memorySize?: string;
  /**
  * NetworkData content of cloud-init, base64 is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#network_data NodeTemplate#network_data}
  */
  readonly networkData?: string;
  /**
  * A JSON string specifying info for the networks e.g. `{"interfaces":[{"networkName":"harvester-public/vlan1"},{"networkName":"harvester-public/vlan2"}]}`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#network_info NodeTemplate#network_info}
  */
  readonly networkInfo?: string;
  /**
  * Network model
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#network_model NodeTemplate#network_model}
  */
  readonly networkModel?: string;
  /**
  * Network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#network_name NodeTemplate#network_name}
  */
  readonly networkName?: string;
  /**
  * SSH password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_password NodeTemplate#ssh_password}
  */
  readonly sshPassword?: string;
  /**
  * SSH username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_user NodeTemplate#ssh_user}
  */
  readonly sshUser: string;
  /**
  * UserData content of cloud-init, base64 is supported. If the image does not contain the qemu-guest-agent package, you must install and start qemu-guest-agent using userdata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#user_data NodeTemplate#user_data}
  */
  readonly userData?: string;
  /**
  * VM affinity, base64 is supported
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#vm_affinity NodeTemplate#vm_affinity}
  */
  readonly vmAffinity?: string;
  /**
  * Virtual machine namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#vm_namespace NodeTemplate#vm_namespace}
  */
  readonly vmNamespace: string;
}

export function nodeTemplateHarvesterConfigToTerraform(struct?: NodeTemplateHarvesterConfigOutputReference | NodeTemplateHarvesterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.stringToTerraform(struct!.cpuCount),
    disk_bus: cdktf.stringToTerraform(struct!.diskBus),
    disk_info: cdktf.stringToTerraform(struct!.diskInfo),
    disk_size: cdktf.stringToTerraform(struct!.diskSize),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    memory_size: cdktf.stringToTerraform(struct!.memorySize),
    network_data: cdktf.stringToTerraform(struct!.networkData),
    network_info: cdktf.stringToTerraform(struct!.networkInfo),
    network_model: cdktf.stringToTerraform(struct!.networkModel),
    network_name: cdktf.stringToTerraform(struct!.networkName),
    ssh_password: cdktf.stringToTerraform(struct!.sshPassword),
    ssh_user: cdktf.stringToTerraform(struct!.sshUser),
    user_data: cdktf.stringToTerraform(struct!.userData),
    vm_affinity: cdktf.stringToTerraform(struct!.vmAffinity),
    vm_namespace: cdktf.stringToTerraform(struct!.vmNamespace),
  }
}


export function nodeTemplateHarvesterConfigToHclTerraform(struct?: NodeTemplateHarvesterConfigOutputReference | NodeTemplateHarvesterConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.stringToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_bus: {
      value: cdktf.stringToHclTerraform(struct!.diskBus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_info: {
      value: cdktf.stringToHclTerraform(struct!.diskInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.stringToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_size: {
      value: cdktf.stringToHclTerraform(struct!.memorySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_data: {
      value: cdktf.stringToHclTerraform(struct!.networkData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_info: {
      value: cdktf.stringToHclTerraform(struct!.networkInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_model: {
      value: cdktf.stringToHclTerraform(struct!.networkModel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_password: {
      value: cdktf.stringToHclTerraform(struct!.sshPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_user: {
      value: cdktf.stringToHclTerraform(struct!.sshUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_data: {
      value: cdktf.stringToHclTerraform(struct!.userData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_affinity: {
      value: cdktf.stringToHclTerraform(struct!.vmAffinity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_namespace: {
      value: cdktf.stringToHclTerraform(struct!.vmNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateHarvesterConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeTemplateHarvesterConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._diskBus !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskBus = this._diskBus;
    }
    if (this._diskInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskInfo = this._diskInfo;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._memorySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySize = this._memorySize;
    }
    if (this._networkData !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkData = this._networkData;
    }
    if (this._networkInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInfo = this._networkInfo;
    }
    if (this._networkModel !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkModel = this._networkModel;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._sshPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPassword = this._sshPassword;
    }
    if (this._sshUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshUser = this._sshUser;
    }
    if (this._userData !== undefined) {
      hasAnyValues = true;
      internalValueResult.userData = this._userData;
    }
    if (this._vmAffinity !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmAffinity = this._vmAffinity;
    }
    if (this._vmNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmNamespace = this._vmNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateHarvesterConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._diskBus = undefined;
      this._diskInfo = undefined;
      this._diskSize = undefined;
      this._imageName = undefined;
      this._memorySize = undefined;
      this._networkData = undefined;
      this._networkInfo = undefined;
      this._networkModel = undefined;
      this._networkName = undefined;
      this._sshPassword = undefined;
      this._sshUser = undefined;
      this._userData = undefined;
      this._vmAffinity = undefined;
      this._vmNamespace = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._diskBus = value.diskBus;
      this._diskInfo = value.diskInfo;
      this._diskSize = value.diskSize;
      this._imageName = value.imageName;
      this._memorySize = value.memorySize;
      this._networkData = value.networkData;
      this._networkInfo = value.networkInfo;
      this._networkModel = value.networkModel;
      this._networkName = value.networkName;
      this._sshPassword = value.sshPassword;
      this._sshUser = value.sshUser;
      this._userData = value.userData;
      this._vmAffinity = value.vmAffinity;
      this._vmNamespace = value.vmNamespace;
    }
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: string; 
  public get cpuCount() {
    return this.getStringAttribute('cpu_count');
  }
  public set cpuCount(value: string) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // disk_bus - computed: false, optional: true, required: false
  private _diskBus?: string; 
  public get diskBus() {
    return this.getStringAttribute('disk_bus');
  }
  public set diskBus(value: string) {
    this._diskBus = value;
  }
  public resetDiskBus() {
    this._diskBus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskBusInput() {
    return this._diskBus;
  }

  // disk_info - computed: false, optional: true, required: false
  private _diskInfo?: string; 
  public get diskInfo() {
    return this.getStringAttribute('disk_info');
  }
  public set diskInfo(value: string) {
    this._diskInfo = value;
  }
  public resetDiskInfo() {
    this._diskInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskInfoInput() {
    return this._diskInfo;
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

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // memory_size - computed: false, optional: true, required: false
  private _memorySize?: string; 
  public get memorySize() {
    return this.getStringAttribute('memory_size');
  }
  public set memorySize(value: string) {
    this._memorySize = value;
  }
  public resetMemorySize() {
    this._memorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize;
  }

  // network_data - computed: false, optional: true, required: false
  private _networkData?: string; 
  public get networkData() {
    return this.getStringAttribute('network_data');
  }
  public set networkData(value: string) {
    this._networkData = value;
  }
  public resetNetworkData() {
    this._networkData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkDataInput() {
    return this._networkData;
  }

  // network_info - computed: false, optional: true, required: false
  private _networkInfo?: string; 
  public get networkInfo() {
    return this.getStringAttribute('network_info');
  }
  public set networkInfo(value: string) {
    this._networkInfo = value;
  }
  public resetNetworkInfo() {
    this._networkInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInfoInput() {
    return this._networkInfo;
  }

  // network_model - computed: false, optional: true, required: false
  private _networkModel?: string; 
  public get networkModel() {
    return this.getStringAttribute('network_model');
  }
  public set networkModel(value: string) {
    this._networkModel = value;
  }
  public resetNetworkModel() {
    this._networkModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkModelInput() {
    return this._networkModel;
  }

  // network_name - computed: false, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // ssh_password - computed: false, optional: true, required: false
  private _sshPassword?: string; 
  public get sshPassword() {
    return this.getStringAttribute('ssh_password');
  }
  public set sshPassword(value: string) {
    this._sshPassword = value;
  }
  public resetSshPassword() {
    this._sshPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPasswordInput() {
    return this._sshPassword;
  }

  // ssh_user - computed: false, optional: false, required: true
  private _sshUser?: string; 
  public get sshUser() {
    return this.getStringAttribute('ssh_user');
  }
  public set sshUser(value: string) {
    this._sshUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUserInput() {
    return this._sshUser;
  }

  // user_data - computed: false, optional: true, required: false
  private _userData?: string; 
  public get userData() {
    return this.getStringAttribute('user_data');
  }
  public set userData(value: string) {
    this._userData = value;
  }
  public resetUserData() {
    this._userData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataInput() {
    return this._userData;
  }

  // vm_affinity - computed: false, optional: true, required: false
  private _vmAffinity?: string; 
  public get vmAffinity() {
    return this.getStringAttribute('vm_affinity');
  }
  public set vmAffinity(value: string) {
    this._vmAffinity = value;
  }
  public resetVmAffinity() {
    this._vmAffinity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmAffinityInput() {
    return this._vmAffinity;
  }

  // vm_namespace - computed: false, optional: false, required: true
  private _vmNamespace?: string; 
  public get vmNamespace() {
    return this.getStringAttribute('vm_namespace');
  }
  public set vmNamespace(value: string) {
    this._vmNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNamespaceInput() {
    return this._vmNamespace;
  }
}
export interface NodeTemplateHetznerConfig {
  /**
  * Hetzner Cloud project API token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#api_token NodeTemplate#api_token}
  */
  readonly apiToken: string;
  /**
  * Hetzner Cloud server image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#image NodeTemplate#image}
  */
  readonly image?: string;
  /**
  * Comma-separated list of network IDs or names which should be attached to the server private network interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#networks NodeTemplate#networks}
  */
  readonly networks?: string;
  /**
  * Map of the labels which will be assigned to the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#server_labels NodeTemplate#server_labels}
  */
  readonly serverLabels?: { [key: string]: string };
  /**
  * Hetzner Cloud datacenter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#server_location NodeTemplate#server_location}
  */
  readonly serverLocation?: string;
  /**
  * Hetzner Cloud server type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#server_type NodeTemplate#server_type}
  */
  readonly serverType?: string;
  /**
  * Use private network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#use_private_network NodeTemplate#use_private_network}
  */
  readonly usePrivateNetwork?: boolean | cdktf.IResolvable;
  /**
  * Path to file with cloud-init user-data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#userdata NodeTemplate#userdata}
  */
  readonly userdata?: string;
  /**
  * Comma-separated list of volume IDs or names which should be attached to the server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#volumes NodeTemplate#volumes}
  */
  readonly volumes?: string;
}

export function nodeTemplateHetznerConfigToTerraform(struct?: NodeTemplateHetznerConfigOutputReference | NodeTemplateHetznerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    image: cdktf.stringToTerraform(struct!.image),
    networks: cdktf.stringToTerraform(struct!.networks),
    server_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serverLabels),
    server_location: cdktf.stringToTerraform(struct!.serverLocation),
    server_type: cdktf.stringToTerraform(struct!.serverType),
    use_private_network: cdktf.booleanToTerraform(struct!.usePrivateNetwork),
    userdata: cdktf.stringToTerraform(struct!.userdata),
    volumes: cdktf.stringToTerraform(struct!.volumes),
  }
}


export function nodeTemplateHetznerConfigToHclTerraform(struct?: NodeTemplateHetznerConfigOutputReference | NodeTemplateHetznerConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    networks: {
      value: cdktf.stringToHclTerraform(struct!.networks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serverLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    server_location: {
      value: cdktf.stringToHclTerraform(struct!.serverLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_type: {
      value: cdktf.stringToHclTerraform(struct!.serverType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_private_network: {
      value: cdktf.booleanToHclTerraform(struct!.usePrivateNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    userdata: {
      value: cdktf.stringToHclTerraform(struct!.userdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volumes: {
      value: cdktf.stringToHclTerraform(struct!.volumes),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateHetznerConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeTemplateHetznerConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._networks !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks;
    }
    if (this._serverLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverLabels = this._serverLabels;
    }
    if (this._serverLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverLocation = this._serverLocation;
    }
    if (this._serverType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverType = this._serverType;
    }
    if (this._usePrivateNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePrivateNetwork = this._usePrivateNetwork;
    }
    if (this._userdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.userdata = this._userdata;
    }
    if (this._volumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumes = this._volumes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateHetznerConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiToken = undefined;
      this._image = undefined;
      this._networks = undefined;
      this._serverLabels = undefined;
      this._serverLocation = undefined;
      this._serverType = undefined;
      this._usePrivateNetwork = undefined;
      this._userdata = undefined;
      this._volumes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiToken = value.apiToken;
      this._image = value.image;
      this._networks = value.networks;
      this._serverLabels = value.serverLabels;
      this._serverLocation = value.serverLocation;
      this._serverType = value.serverType;
      this._usePrivateNetwork = value.usePrivateNetwork;
      this._userdata = value.userdata;
      this._volumes = value.volumes;
    }
  }

  // api_token - computed: false, optional: false, required: true
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // networks - computed: false, optional: true, required: false
  private _networks?: string; 
  public get networks() {
    return this.getStringAttribute('networks');
  }
  public set networks(value: string) {
    this._networks = value;
  }
  public resetNetworks() {
    this._networks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks;
  }

  // server_labels - computed: false, optional: true, required: false
  private _serverLabels?: { [key: string]: string }; 
  public get serverLabels() {
    return this.getStringMapAttribute('server_labels');
  }
  public set serverLabels(value: { [key: string]: string }) {
    this._serverLabels = value;
  }
  public resetServerLabels() {
    this._serverLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLabelsInput() {
    return this._serverLabels;
  }

  // server_location - computed: false, optional: true, required: false
  private _serverLocation?: string; 
  public get serverLocation() {
    return this.getStringAttribute('server_location');
  }
  public set serverLocation(value: string) {
    this._serverLocation = value;
  }
  public resetServerLocation() {
    this._serverLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLocationInput() {
    return this._serverLocation;
  }

  // server_type - computed: false, optional: true, required: false
  private _serverType?: string; 
  public get serverType() {
    return this.getStringAttribute('server_type');
  }
  public set serverType(value: string) {
    this._serverType = value;
  }
  public resetServerType() {
    this._serverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverTypeInput() {
    return this._serverType;
  }

  // use_private_network - computed: false, optional: true, required: false
  private _usePrivateNetwork?: boolean | cdktf.IResolvable; 
  public get usePrivateNetwork() {
    return this.getBooleanAttribute('use_private_network');
  }
  public set usePrivateNetwork(value: boolean | cdktf.IResolvable) {
    this._usePrivateNetwork = value;
  }
  public resetUsePrivateNetwork() {
    this._usePrivateNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePrivateNetworkInput() {
    return this._usePrivateNetwork;
  }

  // userdata - computed: false, optional: true, required: false
  private _userdata?: string; 
  public get userdata() {
    return this.getStringAttribute('userdata');
  }
  public set userdata(value: string) {
    this._userdata = value;
  }
  public resetUserdata() {
    this._userdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userdataInput() {
    return this._userdata;
  }

  // volumes - computed: false, optional: true, required: false
  private _volumes?: string; 
  public get volumes() {
    return this.getStringAttribute('volumes');
  }
  public set volumes(value: string) {
    this._volumes = value;
  }
  public resetVolumes() {
    this._volumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumesInput() {
    return this._volumes;
  }
}
export interface NodeTemplateLinodeConfig {
  /**
  * Linode user accounts (seperated by commas) whose Linode SSH keys will be permitted root access to the created node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#authorized_users NodeTemplate#authorized_users}
  */
  readonly authorizedUsers?: string;
  /**
  * Create private IP for the instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#create_private_ip NodeTemplate#create_private_ip}
  */
  readonly createPrivateIp?: boolean | cdktf.IResolvable;
  /**
  * Docker Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#docker_port NodeTemplate#docker_port}
  */
  readonly dockerPort?: string;
  /**
  * Specifies the Linode Instance image which determines the OS distribution and base files
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#image NodeTemplate#image}
  */
  readonly image?: string;
  /**
  * Specifies the Linode Instance type which determines CPU, memory, disk size, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#instance_type NodeTemplate#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Linode Instance Label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#label NodeTemplate#label}
  */
  readonly label?: string;
  /**
  * Specifies the region (location) of the Linode instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#region NodeTemplate#region}
  */
  readonly region?: string;
  /**
  * Root Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#root_pass NodeTemplate#root_pass}
  */
  readonly rootPass?: string;
  /**
  * Linode Instance SSH Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_port NodeTemplate#ssh_port}
  */
  readonly sshPort?: string;
  /**
  * Specifies the user as which docker-machine should log in to the Linode instance to install Docker.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_user NodeTemplate#ssh_user}
  */
  readonly sshUser?: string;
  /**
  * Specifies the Linode StackScript to use to create the instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#stackscript NodeTemplate#stackscript}
  */
  readonly stackscript?: string;
  /**
  * A JSON string specifying data for the selected StackScript
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#stackscript_data NodeTemplate#stackscript_data}
  */
  readonly stackscriptData?: string;
  /**
  * Linode Instance Swap Size (MB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#swap_size NodeTemplate#swap_size}
  */
  readonly swapSize?: string;
  /**
  * A comma separated list of tags to apply to the the Linode resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#tags NodeTemplate#tags}
  */
  readonly tags?: string;
  /**
  * Linode API Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#token NodeTemplate#token}
  */
  readonly token?: string;
  /**
  * Prefix the User-Agent in Linode API calls with some 'product/version'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ua_prefix NodeTemplate#ua_prefix}
  */
  readonly uaPrefix?: string;
}

export function nodeTemplateLinodeConfigToTerraform(struct?: NodeTemplateLinodeConfigOutputReference | NodeTemplateLinodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_users: cdktf.stringToTerraform(struct!.authorizedUsers),
    create_private_ip: cdktf.booleanToTerraform(struct!.createPrivateIp),
    docker_port: cdktf.stringToTerraform(struct!.dockerPort),
    image: cdktf.stringToTerraform(struct!.image),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    label: cdktf.stringToTerraform(struct!.label),
    region: cdktf.stringToTerraform(struct!.region),
    root_pass: cdktf.stringToTerraform(struct!.rootPass),
    ssh_port: cdktf.stringToTerraform(struct!.sshPort),
    ssh_user: cdktf.stringToTerraform(struct!.sshUser),
    stackscript: cdktf.stringToTerraform(struct!.stackscript),
    stackscript_data: cdktf.stringToTerraform(struct!.stackscriptData),
    swap_size: cdktf.stringToTerraform(struct!.swapSize),
    tags: cdktf.stringToTerraform(struct!.tags),
    token: cdktf.stringToTerraform(struct!.token),
    ua_prefix: cdktf.stringToTerraform(struct!.uaPrefix),
  }
}


export function nodeTemplateLinodeConfigToHclTerraform(struct?: NodeTemplateLinodeConfigOutputReference | NodeTemplateLinodeConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorized_users: {
      value: cdktf.stringToHclTerraform(struct!.authorizedUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_private_ip: {
      value: cdktf.booleanToHclTerraform(struct!.createPrivateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    docker_port: {
      value: cdktf.stringToHclTerraform(struct!.dockerPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_pass: {
      value: cdktf.stringToHclTerraform(struct!.rootPass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_port: {
      value: cdktf.stringToHclTerraform(struct!.sshPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_user: {
      value: cdktf.stringToHclTerraform(struct!.sshUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stackscript: {
      value: cdktf.stringToHclTerraform(struct!.stackscript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    stackscript_data: {
      value: cdktf.stringToHclTerraform(struct!.stackscriptData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    swap_size: {
      value: cdktf.stringToHclTerraform(struct!.swapSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.stringToHclTerraform(struct!.tags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token: {
      value: cdktf.stringToHclTerraform(struct!.token),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ua_prefix: {
      value: cdktf.stringToHclTerraform(struct!.uaPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateLinodeConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeTemplateLinodeConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedUsers = this._authorizedUsers;
    }
    if (this._createPrivateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.createPrivateIp = this._createPrivateIp;
    }
    if (this._dockerPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerPort = this._dockerPort;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._rootPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootPass = this._rootPass;
    }
    if (this._sshPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPort = this._sshPort;
    }
    if (this._sshUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshUser = this._sshUser;
    }
    if (this._stackscript !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackscript = this._stackscript;
    }
    if (this._stackscriptData !== undefined) {
      hasAnyValues = true;
      internalValueResult.stackscriptData = this._stackscriptData;
    }
    if (this._swapSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.swapSize = this._swapSize;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._token !== undefined) {
      hasAnyValues = true;
      internalValueResult.token = this._token;
    }
    if (this._uaPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.uaPrefix = this._uaPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateLinodeConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizedUsers = undefined;
      this._createPrivateIp = undefined;
      this._dockerPort = undefined;
      this._image = undefined;
      this._instanceType = undefined;
      this._label = undefined;
      this._region = undefined;
      this._rootPass = undefined;
      this._sshPort = undefined;
      this._sshUser = undefined;
      this._stackscript = undefined;
      this._stackscriptData = undefined;
      this._swapSize = undefined;
      this._tags = undefined;
      this._token = undefined;
      this._uaPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizedUsers = value.authorizedUsers;
      this._createPrivateIp = value.createPrivateIp;
      this._dockerPort = value.dockerPort;
      this._image = value.image;
      this._instanceType = value.instanceType;
      this._label = value.label;
      this._region = value.region;
      this._rootPass = value.rootPass;
      this._sshPort = value.sshPort;
      this._sshUser = value.sshUser;
      this._stackscript = value.stackscript;
      this._stackscriptData = value.stackscriptData;
      this._swapSize = value.swapSize;
      this._tags = value.tags;
      this._token = value.token;
      this._uaPrefix = value.uaPrefix;
    }
  }

  // authorized_users - computed: false, optional: true, required: false
  private _authorizedUsers?: string; 
  public get authorizedUsers() {
    return this.getStringAttribute('authorized_users');
  }
  public set authorizedUsers(value: string) {
    this._authorizedUsers = value;
  }
  public resetAuthorizedUsers() {
    this._authorizedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedUsersInput() {
    return this._authorizedUsers;
  }

  // create_private_ip - computed: false, optional: true, required: false
  private _createPrivateIp?: boolean | cdktf.IResolvable; 
  public get createPrivateIp() {
    return this.getBooleanAttribute('create_private_ip');
  }
  public set createPrivateIp(value: boolean | cdktf.IResolvable) {
    this._createPrivateIp = value;
  }
  public resetCreatePrivateIp() {
    this._createPrivateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPrivateIpInput() {
    return this._createPrivateIp;
  }

  // docker_port - computed: false, optional: true, required: false
  private _dockerPort?: string; 
  public get dockerPort() {
    return this.getStringAttribute('docker_port');
  }
  public set dockerPort(value: string) {
    this._dockerPort = value;
  }
  public resetDockerPort() {
    this._dockerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerPortInput() {
    return this._dockerPort;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // root_pass - computed: false, optional: true, required: false
  private _rootPass?: string; 
  public get rootPass() {
    return this.getStringAttribute('root_pass');
  }
  public set rootPass(value: string) {
    this._rootPass = value;
  }
  public resetRootPass() {
    this._rootPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPassInput() {
    return this._rootPass;
  }

  // ssh_port - computed: false, optional: true, required: false
  private _sshPort?: string; 
  public get sshPort() {
    return this.getStringAttribute('ssh_port');
  }
  public set sshPort(value: string) {
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

  // stackscript - computed: false, optional: true, required: false
  private _stackscript?: string; 
  public get stackscript() {
    return this.getStringAttribute('stackscript');
  }
  public set stackscript(value: string) {
    this._stackscript = value;
  }
  public resetStackscript() {
    this._stackscript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackscriptInput() {
    return this._stackscript;
  }

  // stackscript_data - computed: false, optional: true, required: false
  private _stackscriptData?: string; 
  public get stackscriptData() {
    return this.getStringAttribute('stackscript_data');
  }
  public set stackscriptData(value: string) {
    this._stackscriptData = value;
  }
  public resetStackscriptData() {
    this._stackscriptData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackscriptDataInput() {
    return this._stackscriptData;
  }

  // swap_size - computed: false, optional: true, required: false
  private _swapSize?: string; 
  public get swapSize() {
    return this.getStringAttribute('swap_size');
  }
  public set swapSize(value: string) {
    this._swapSize = value;
  }
  public resetSwapSize() {
    this._swapSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swapSizeInput() {
    return this._swapSize;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string; 
  public get tags() {
    return this.getStringAttribute('tags');
  }
  public set tags(value: string) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // token - computed: false, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // ua_prefix - computed: false, optional: true, required: false
  private _uaPrefix?: string; 
  public get uaPrefix() {
    return this.getStringAttribute('ua_prefix');
  }
  public set uaPrefix(value: string) {
    this._uaPrefix = value;
  }
  public resetUaPrefix() {
    this._uaPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uaPrefixInput() {
    return this._uaPrefix;
  }
}
export interface NodeTemplateNodeTaints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#effect NodeTemplate#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#key NodeTemplate#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#time_added NodeTemplate#time_added}
  */
  readonly timeAdded?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#value NodeTemplate#value}
  */
  readonly value: string;
}

export function nodeTemplateNodeTaintsToTerraform(struct?: NodeTemplateNodeTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    time_added: cdktf.stringToTerraform(struct!.timeAdded),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function nodeTemplateNodeTaintsToHclTerraform(struct?: NodeTemplateNodeTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_added: {
      value: cdktf.stringToHclTerraform(struct!.timeAdded),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateNodeTaintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): NodeTemplateNodeTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._timeAdded !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeAdded = this._timeAdded;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateNodeTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._timeAdded = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._timeAdded = value.timeAdded;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // time_added - computed: true, optional: true, required: false
  private _timeAdded?: string; 
  public get timeAdded() {
    return this.getStringAttribute('time_added');
  }
  public set timeAdded(value: string) {
    this._timeAdded = value;
  }
  public resetTimeAdded() {
    this._timeAdded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeAddedInput() {
    return this._timeAdded;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class NodeTemplateNodeTaintsList extends cdktf.ComplexList {
  public internalValue? : NodeTemplateNodeTaints[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): NodeTemplateNodeTaintsOutputReference {
    return new NodeTemplateNodeTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeTemplateOpennebulaConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#b2d_size NodeTemplate#b2d_size}
  */
  readonly b2DSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#cpu NodeTemplate#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#dev_prefix NodeTemplate#dev_prefix}
  */
  readonly devPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#disable_vnc NodeTemplate#disable_vnc}
  */
  readonly disableVnc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#disk_resize NodeTemplate#disk_resize}
  */
  readonly diskResize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#image_id NodeTemplate#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#image_name NodeTemplate#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#image_owner NodeTemplate#image_owner}
  */
  readonly imageOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#memory NodeTemplate#memory}
  */
  readonly memory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#network_id NodeTemplate#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#network_name NodeTemplate#network_name}
  */
  readonly networkName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#network_owner NodeTemplate#network_owner}
  */
  readonly networkOwner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#password NodeTemplate#password}
  */
  readonly password: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_user NodeTemplate#ssh_user}
  */
  readonly sshUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#template_id NodeTemplate#template_id}
  */
  readonly templateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#template_name NodeTemplate#template_name}
  */
  readonly templateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#user NodeTemplate#user}
  */
  readonly user: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#vcpu NodeTemplate#vcpu}
  */
  readonly vcpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#xml_rpc_url NodeTemplate#xml_rpc_url}
  */
  readonly xmlRpcUrl: string;
}

export function nodeTemplateOpennebulaConfigToTerraform(struct?: NodeTemplateOpennebulaConfigOutputReference | NodeTemplateOpennebulaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    b2d_size: cdktf.stringToTerraform(struct!.b2DSize),
    cpu: cdktf.stringToTerraform(struct!.cpu),
    dev_prefix: cdktf.stringToTerraform(struct!.devPrefix),
    disable_vnc: cdktf.booleanToTerraform(struct!.disableVnc),
    disk_resize: cdktf.stringToTerraform(struct!.diskResize),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_owner: cdktf.stringToTerraform(struct!.imageOwner),
    memory: cdktf.stringToTerraform(struct!.memory),
    network_id: cdktf.stringToTerraform(struct!.networkId),
    network_name: cdktf.stringToTerraform(struct!.networkName),
    network_owner: cdktf.stringToTerraform(struct!.networkOwner),
    password: cdktf.stringToTerraform(struct!.password),
    ssh_user: cdktf.stringToTerraform(struct!.sshUser),
    template_id: cdktf.stringToTerraform(struct!.templateId),
    template_name: cdktf.stringToTerraform(struct!.templateName),
    user: cdktf.stringToTerraform(struct!.user),
    vcpu: cdktf.stringToTerraform(struct!.vcpu),
    xml_rpc_url: cdktf.stringToTerraform(struct!.xmlRpcUrl),
  }
}


export function nodeTemplateOpennebulaConfigToHclTerraform(struct?: NodeTemplateOpennebulaConfigOutputReference | NodeTemplateOpennebulaConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    b2d_size: {
      value: cdktf.stringToHclTerraform(struct!.b2DSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_prefix: {
      value: cdktf.stringToHclTerraform(struct!.devPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_vnc: {
      value: cdktf.booleanToHclTerraform(struct!.disableVnc),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disk_resize: {
      value: cdktf.stringToHclTerraform(struct!.diskResize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_owner: {
      value: cdktf.stringToHclTerraform(struct!.imageOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_id: {
      value: cdktf.stringToHclTerraform(struct!.networkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_owner: {
      value: cdktf.stringToHclTerraform(struct!.networkOwner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_user: {
      value: cdktf.stringToHclTerraform(struct!.sshUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_name: {
      value: cdktf.stringToHclTerraform(struct!.templateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcpu: {
      value: cdktf.stringToHclTerraform(struct!.vcpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xml_rpc_url: {
      value: cdktf.stringToHclTerraform(struct!.xmlRpcUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateOpennebulaConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeTemplateOpennebulaConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._b2DSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.b2DSize = this._b2DSize;
    }
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._devPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.devPrefix = this._devPrefix;
    }
    if (this._disableVnc !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableVnc = this._disableVnc;
    }
    if (this._diskResize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskResize = this._diskResize;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imageOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageOwner = this._imageOwner;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    if (this._networkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkId = this._networkId;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    if (this._networkOwner !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkOwner = this._networkOwner;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._sshUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshUser = this._sshUser;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    if (this._templateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateName = this._templateName;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    if (this._vcpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcpu = this._vcpu;
    }
    if (this._xmlRpcUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmlRpcUrl = this._xmlRpcUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateOpennebulaConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._b2DSize = undefined;
      this._cpu = undefined;
      this._devPrefix = undefined;
      this._disableVnc = undefined;
      this._diskResize = undefined;
      this._imageId = undefined;
      this._imageName = undefined;
      this._imageOwner = undefined;
      this._memory = undefined;
      this._networkId = undefined;
      this._networkName = undefined;
      this._networkOwner = undefined;
      this._password = undefined;
      this._sshUser = undefined;
      this._templateId = undefined;
      this._templateName = undefined;
      this._user = undefined;
      this._vcpu = undefined;
      this._xmlRpcUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._b2DSize = value.b2DSize;
      this._cpu = value.cpu;
      this._devPrefix = value.devPrefix;
      this._disableVnc = value.disableVnc;
      this._diskResize = value.diskResize;
      this._imageId = value.imageId;
      this._imageName = value.imageName;
      this._imageOwner = value.imageOwner;
      this._memory = value.memory;
      this._networkId = value.networkId;
      this._networkName = value.networkName;
      this._networkOwner = value.networkOwner;
      this._password = value.password;
      this._sshUser = value.sshUser;
      this._templateId = value.templateId;
      this._templateName = value.templateName;
      this._user = value.user;
      this._vcpu = value.vcpu;
      this._xmlRpcUrl = value.xmlRpcUrl;
    }
  }

  // b2d_size - computed: false, optional: true, required: false
  private _b2DSize?: string; 
  public get b2DSize() {
    return this.getStringAttribute('b2d_size');
  }
  public set b2DSize(value: string) {
    this._b2DSize = value;
  }
  public resetB2DSize() {
    this._b2DSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get b2DSizeInput() {
    return this._b2DSize;
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // dev_prefix - computed: false, optional: true, required: false
  private _devPrefix?: string; 
  public get devPrefix() {
    return this.getStringAttribute('dev_prefix');
  }
  public set devPrefix(value: string) {
    this._devPrefix = value;
  }
  public resetDevPrefix() {
    this._devPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devPrefixInput() {
    return this._devPrefix;
  }

  // disable_vnc - computed: false, optional: true, required: false
  private _disableVnc?: boolean | cdktf.IResolvable; 
  public get disableVnc() {
    return this.getBooleanAttribute('disable_vnc');
  }
  public set disableVnc(value: boolean | cdktf.IResolvable) {
    this._disableVnc = value;
  }
  public resetDisableVnc() {
    this._disableVnc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableVncInput() {
    return this._disableVnc;
  }

  // disk_resize - computed: false, optional: true, required: false
  private _diskResize?: string; 
  public get diskResize() {
    return this.getStringAttribute('disk_resize');
  }
  public set diskResize(value: string) {
    this._diskResize = value;
  }
  public resetDiskResize() {
    this._diskResize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskResizeInput() {
    return this._diskResize;
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // image_owner - computed: false, optional: true, required: false
  private _imageOwner?: string; 
  public get imageOwner() {
    return this.getStringAttribute('image_owner');
  }
  public set imageOwner(value: string) {
    this._imageOwner = value;
  }
  public resetImageOwner() {
    this._imageOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageOwnerInput() {
    return this._imageOwner;
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

  // network_id - computed: false, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // network_name - computed: false, optional: true, required: false
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  public resetNetworkName() {
    this._networkName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // network_owner - computed: false, optional: true, required: false
  private _networkOwner?: string; 
  public get networkOwner() {
    return this.getStringAttribute('network_owner');
  }
  public set networkOwner(value: string) {
    this._networkOwner = value;
  }
  public resetNetworkOwner() {
    this._networkOwner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkOwnerInput() {
    return this._networkOwner;
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // template_id - computed: false, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // template_name - computed: false, optional: true, required: false
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  public resetTemplateName() {
    this._templateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // vcpu - computed: false, optional: true, required: false
  private _vcpu?: string; 
  public get vcpu() {
    return this.getStringAttribute('vcpu');
  }
  public set vcpu(value: string) {
    this._vcpu = value;
  }
  public resetVcpu() {
    this._vcpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcpuInput() {
    return this._vcpu;
  }

  // xml_rpc_url - computed: false, optional: false, required: true
  private _xmlRpcUrl?: string; 
  public get xmlRpcUrl() {
    return this.getStringAttribute('xml_rpc_url');
  }
  public set xmlRpcUrl(value: string) {
    this._xmlRpcUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlRpcUrlInput() {
    return this._xmlRpcUrl;
  }
}
export interface NodeTemplateOpenstackConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#active_timeout NodeTemplate#active_timeout}
  */
  readonly activeTimeout?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#application_credential_id NodeTemplate#application_credential_id}
  */
  readonly applicationCredentialId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#application_credential_name NodeTemplate#application_credential_name}
  */
  readonly applicationCredentialName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#application_credential_secret NodeTemplate#application_credential_secret}
  */
  readonly applicationCredentialSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#auth_url NodeTemplate#auth_url}
  */
  readonly authUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#availability_zone NodeTemplate#availability_zone}
  */
  readonly availabilityZone: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#boot_from_volume NodeTemplate#boot_from_volume}
  */
  readonly bootFromVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#cacert NodeTemplate#cacert}
  */
  readonly cacert?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#config_drive NodeTemplate#config_drive}
  */
  readonly configDrive?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#domain_id NodeTemplate#domain_id}
  */
  readonly domainId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#domain_name NodeTemplate#domain_name}
  */
  readonly domainName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#endpoint_type NodeTemplate#endpoint_type}
  */
  readonly endpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#flavor_id NodeTemplate#flavor_id}
  */
  readonly flavorId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#flavor_name NodeTemplate#flavor_name}
  */
  readonly flavorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#floating_ip_pool NodeTemplate#floating_ip_pool}
  */
  readonly floatingIpPool?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#image_id NodeTemplate#image_id}
  */
  readonly imageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#image_name NodeTemplate#image_name}
  */
  readonly imageName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#insecure NodeTemplate#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ip_version NodeTemplate#ip_version}
  */
  readonly ipVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#keypair_name NodeTemplate#keypair_name}
  */
  readonly keypairName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#net_id NodeTemplate#net_id}
  */
  readonly netId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#net_name NodeTemplate#net_name}
  */
  readonly netName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#nova_network NodeTemplate#nova_network}
  */
  readonly novaNetwork?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#password NodeTemplate#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#private_key_file NodeTemplate#private_key_file}
  */
  readonly privateKeyFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#region NodeTemplate#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#sec_groups NodeTemplate#sec_groups}
  */
  readonly secGroups?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_port NodeTemplate#ssh_port}
  */
  readonly sshPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_user NodeTemplate#ssh_user}
  */
  readonly sshUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#tenant_id NodeTemplate#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#tenant_name NodeTemplate#tenant_name}
  */
  readonly tenantName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#user_data_file NodeTemplate#user_data_file}
  */
  readonly userDataFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#username NodeTemplate#username}
  */
  readonly username?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#volume_device_path NodeTemplate#volume_device_path}
  */
  readonly volumeDevicePath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#volume_id NodeTemplate#volume_id}
  */
  readonly volumeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#volume_name NodeTemplate#volume_name}
  */
  readonly volumeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#volume_size NodeTemplate#volume_size}
  */
  readonly volumeSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#volume_type NodeTemplate#volume_type}
  */
  readonly volumeType?: string;
}

export function nodeTemplateOpenstackConfigToTerraform(struct?: NodeTemplateOpenstackConfigOutputReference | NodeTemplateOpenstackConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_timeout: cdktf.stringToTerraform(struct!.activeTimeout),
    application_credential_id: cdktf.stringToTerraform(struct!.applicationCredentialId),
    application_credential_name: cdktf.stringToTerraform(struct!.applicationCredentialName),
    application_credential_secret: cdktf.stringToTerraform(struct!.applicationCredentialSecret),
    auth_url: cdktf.stringToTerraform(struct!.authUrl),
    availability_zone: cdktf.stringToTerraform(struct!.availabilityZone),
    boot_from_volume: cdktf.booleanToTerraform(struct!.bootFromVolume),
    cacert: cdktf.stringToTerraform(struct!.cacert),
    config_drive: cdktf.booleanToTerraform(struct!.configDrive),
    domain_id: cdktf.stringToTerraform(struct!.domainId),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    endpoint_type: cdktf.stringToTerraform(struct!.endpointType),
    flavor_id: cdktf.stringToTerraform(struct!.flavorId),
    flavor_name: cdktf.stringToTerraform(struct!.flavorName),
    floating_ip_pool: cdktf.stringToTerraform(struct!.floatingIpPool),
    image_id: cdktf.stringToTerraform(struct!.imageId),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    ip_version: cdktf.stringToTerraform(struct!.ipVersion),
    keypair_name: cdktf.stringToTerraform(struct!.keypairName),
    net_id: cdktf.stringToTerraform(struct!.netId),
    net_name: cdktf.stringToTerraform(struct!.netName),
    nova_network: cdktf.booleanToTerraform(struct!.novaNetwork),
    password: cdktf.stringToTerraform(struct!.password),
    private_key_file: cdktf.stringToTerraform(struct!.privateKeyFile),
    region: cdktf.stringToTerraform(struct!.region),
    sec_groups: cdktf.stringToTerraform(struct!.secGroups),
    ssh_port: cdktf.stringToTerraform(struct!.sshPort),
    ssh_user: cdktf.stringToTerraform(struct!.sshUser),
    tenant_id: cdktf.stringToTerraform(struct!.tenantId),
    tenant_name: cdktf.stringToTerraform(struct!.tenantName),
    user_data_file: cdktf.stringToTerraform(struct!.userDataFile),
    username: cdktf.stringToTerraform(struct!.username),
    volume_device_path: cdktf.stringToTerraform(struct!.volumeDevicePath),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
    volume_size: cdktf.stringToTerraform(struct!.volumeSize),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function nodeTemplateOpenstackConfigToHclTerraform(struct?: NodeTemplateOpenstackConfigOutputReference | NodeTemplateOpenstackConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_timeout: {
      value: cdktf.stringToHclTerraform(struct!.activeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_credential_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationCredentialId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_credential_name: {
      value: cdktf.stringToHclTerraform(struct!.applicationCredentialName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_credential_secret: {
      value: cdktf.stringToHclTerraform(struct!.applicationCredentialSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auth_url: {
      value: cdktf.stringToHclTerraform(struct!.authUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    availability_zone: {
      value: cdktf.stringToHclTerraform(struct!.availabilityZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    boot_from_volume: {
      value: cdktf.booleanToHclTerraform(struct!.bootFromVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cacert: {
      value: cdktf.stringToHclTerraform(struct!.cacert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config_drive: {
      value: cdktf.booleanToHclTerraform(struct!.configDrive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    domain_id: {
      value: cdktf.stringToHclTerraform(struct!.domainId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_type: {
      value: cdktf.stringToHclTerraform(struct!.endpointType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flavor_id: {
      value: cdktf.stringToHclTerraform(struct!.flavorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    flavor_name: {
      value: cdktf.stringToHclTerraform(struct!.flavorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floating_ip_pool: {
      value: cdktf.stringToHclTerraform(struct!.floatingIpPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_id: {
      value: cdktf.stringToHclTerraform(struct!.imageId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ip_version: {
      value: cdktf.stringToHclTerraform(struct!.ipVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keypair_name: {
      value: cdktf.stringToHclTerraform(struct!.keypairName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_id: {
      value: cdktf.stringToHclTerraform(struct!.netId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    net_name: {
      value: cdktf.stringToHclTerraform(struct!.netName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nova_network: {
      value: cdktf.booleanToHclTerraform(struct!.novaNetwork),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_file: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sec_groups: {
      value: cdktf.stringToHclTerraform(struct!.secGroups),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_port: {
      value: cdktf.stringToHclTerraform(struct!.sshPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_user: {
      value: cdktf.stringToHclTerraform(struct!.sshUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_id: {
      value: cdktf.stringToHclTerraform(struct!.tenantId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tenant_name: {
      value: cdktf.stringToHclTerraform(struct!.tenantName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_data_file: {
      value: cdktf.stringToHclTerraform(struct!.userDataFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_device_path: {
      value: cdktf.stringToHclTerraform(struct!.volumeDevicePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_size: {
      value: cdktf.stringToHclTerraform(struct!.volumeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_type: {
      value: cdktf.stringToHclTerraform(struct!.volumeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateOpenstackConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeTemplateOpenstackConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTimeout = this._activeTimeout;
    }
    if (this._applicationCredentialId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationCredentialId = this._applicationCredentialId;
    }
    if (this._applicationCredentialName !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationCredentialName = this._applicationCredentialName;
    }
    if (this._applicationCredentialSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationCredentialSecret = this._applicationCredentialSecret;
    }
    if (this._authUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authUrl = this._authUrl;
    }
    if (this._availabilityZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.availabilityZone = this._availabilityZone;
    }
    if (this._bootFromVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootFromVolume = this._bootFromVolume;
    }
    if (this._cacert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacert = this._cacert;
    }
    if (this._configDrive !== undefined) {
      hasAnyValues = true;
      internalValueResult.configDrive = this._configDrive;
    }
    if (this._domainId !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainId = this._domainId;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._endpointType !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointType = this._endpointType;
    }
    if (this._flavorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavorId = this._flavorId;
    }
    if (this._flavorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.flavorName = this._flavorName;
    }
    if (this._floatingIpPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpPool = this._floatingIpPool;
    }
    if (this._imageId !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageId = this._imageId;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._ipVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipVersion = this._ipVersion;
    }
    if (this._keypairName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keypairName = this._keypairName;
    }
    if (this._netId !== undefined) {
      hasAnyValues = true;
      internalValueResult.netId = this._netId;
    }
    if (this._netName !== undefined) {
      hasAnyValues = true;
      internalValueResult.netName = this._netName;
    }
    if (this._novaNetwork !== undefined) {
      hasAnyValues = true;
      internalValueResult.novaNetwork = this._novaNetwork;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._privateKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyFile = this._privateKeyFile;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._secGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.secGroups = this._secGroups;
    }
    if (this._sshPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPort = this._sshPort;
    }
    if (this._sshUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshUser = this._sshUser;
    }
    if (this._tenantId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantId = this._tenantId;
    }
    if (this._tenantName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tenantName = this._tenantName;
    }
    if (this._userDataFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.userDataFile = this._userDataFile;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._volumeDevicePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeDevicePath = this._volumeDevicePath;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    if (this._volumeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSize = this._volumeSize;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateOpenstackConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeTimeout = undefined;
      this._applicationCredentialId = undefined;
      this._applicationCredentialName = undefined;
      this._applicationCredentialSecret = undefined;
      this._authUrl = undefined;
      this._availabilityZone = undefined;
      this._bootFromVolume = undefined;
      this._cacert = undefined;
      this._configDrive = undefined;
      this._domainId = undefined;
      this._domainName = undefined;
      this._endpointType = undefined;
      this._flavorId = undefined;
      this._flavorName = undefined;
      this._floatingIpPool = undefined;
      this._imageId = undefined;
      this._imageName = undefined;
      this._insecure = undefined;
      this._ipVersion = undefined;
      this._keypairName = undefined;
      this._netId = undefined;
      this._netName = undefined;
      this._novaNetwork = undefined;
      this._password = undefined;
      this._privateKeyFile = undefined;
      this._region = undefined;
      this._secGroups = undefined;
      this._sshPort = undefined;
      this._sshUser = undefined;
      this._tenantId = undefined;
      this._tenantName = undefined;
      this._userDataFile = undefined;
      this._username = undefined;
      this._volumeDevicePath = undefined;
      this._volumeId = undefined;
      this._volumeName = undefined;
      this._volumeSize = undefined;
      this._volumeType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeTimeout = value.activeTimeout;
      this._applicationCredentialId = value.applicationCredentialId;
      this._applicationCredentialName = value.applicationCredentialName;
      this._applicationCredentialSecret = value.applicationCredentialSecret;
      this._authUrl = value.authUrl;
      this._availabilityZone = value.availabilityZone;
      this._bootFromVolume = value.bootFromVolume;
      this._cacert = value.cacert;
      this._configDrive = value.configDrive;
      this._domainId = value.domainId;
      this._domainName = value.domainName;
      this._endpointType = value.endpointType;
      this._flavorId = value.flavorId;
      this._flavorName = value.flavorName;
      this._floatingIpPool = value.floatingIpPool;
      this._imageId = value.imageId;
      this._imageName = value.imageName;
      this._insecure = value.insecure;
      this._ipVersion = value.ipVersion;
      this._keypairName = value.keypairName;
      this._netId = value.netId;
      this._netName = value.netName;
      this._novaNetwork = value.novaNetwork;
      this._password = value.password;
      this._privateKeyFile = value.privateKeyFile;
      this._region = value.region;
      this._secGroups = value.secGroups;
      this._sshPort = value.sshPort;
      this._sshUser = value.sshUser;
      this._tenantId = value.tenantId;
      this._tenantName = value.tenantName;
      this._userDataFile = value.userDataFile;
      this._username = value.username;
      this._volumeDevicePath = value.volumeDevicePath;
      this._volumeId = value.volumeId;
      this._volumeName = value.volumeName;
      this._volumeSize = value.volumeSize;
      this._volumeType = value.volumeType;
    }
  }

  // active_timeout - computed: false, optional: true, required: false
  private _activeTimeout?: string; 
  public get activeTimeout() {
    return this.getStringAttribute('active_timeout');
  }
  public set activeTimeout(value: string) {
    this._activeTimeout = value;
  }
  public resetActiveTimeout() {
    this._activeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimeoutInput() {
    return this._activeTimeout;
  }

  // application_credential_id - computed: false, optional: true, required: false
  private _applicationCredentialId?: string; 
  public get applicationCredentialId() {
    return this.getStringAttribute('application_credential_id');
  }
  public set applicationCredentialId(value: string) {
    this._applicationCredentialId = value;
  }
  public resetApplicationCredentialId() {
    this._applicationCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCredentialIdInput() {
    return this._applicationCredentialId;
  }

  // application_credential_name - computed: false, optional: true, required: false
  private _applicationCredentialName?: string; 
  public get applicationCredentialName() {
    return this.getStringAttribute('application_credential_name');
  }
  public set applicationCredentialName(value: string) {
    this._applicationCredentialName = value;
  }
  public resetApplicationCredentialName() {
    this._applicationCredentialName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCredentialNameInput() {
    return this._applicationCredentialName;
  }

  // application_credential_secret - computed: false, optional: true, required: false
  private _applicationCredentialSecret?: string; 
  public get applicationCredentialSecret() {
    return this.getStringAttribute('application_credential_secret');
  }
  public set applicationCredentialSecret(value: string) {
    this._applicationCredentialSecret = value;
  }
  public resetApplicationCredentialSecret() {
    this._applicationCredentialSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationCredentialSecretInput() {
    return this._applicationCredentialSecret;
  }

  // auth_url - computed: false, optional: false, required: true
  private _authUrl?: string; 
  public get authUrl() {
    return this.getStringAttribute('auth_url');
  }
  public set authUrl(value: string) {
    this._authUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authUrlInput() {
    return this._authUrl;
  }

  // availability_zone - computed: false, optional: false, required: true
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // boot_from_volume - computed: false, optional: true, required: false
  private _bootFromVolume?: boolean | cdktf.IResolvable; 
  public get bootFromVolume() {
    return this.getBooleanAttribute('boot_from_volume');
  }
  public set bootFromVolume(value: boolean | cdktf.IResolvable) {
    this._bootFromVolume = value;
  }
  public resetBootFromVolume() {
    this._bootFromVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootFromVolumeInput() {
    return this._bootFromVolume;
  }

  // cacert - computed: false, optional: true, required: false
  private _cacert?: string; 
  public get cacert() {
    return this.getStringAttribute('cacert');
  }
  public set cacert(value: string) {
    this._cacert = value;
  }
  public resetCacert() {
    this._cacert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacertInput() {
    return this._cacert;
  }

  // config_drive - computed: false, optional: true, required: false
  private _configDrive?: boolean | cdktf.IResolvable; 
  public get configDrive() {
    return this.getBooleanAttribute('config_drive');
  }
  public set configDrive(value: boolean | cdktf.IResolvable) {
    this._configDrive = value;
  }
  public resetConfigDrive() {
    this._configDrive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configDriveInput() {
    return this._configDrive;
  }

  // domain_id - computed: false, optional: true, required: false
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  public resetDomainId() {
    this._domainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // endpoint_type - computed: false, optional: true, required: false
  private _endpointType?: string; 
  public get endpointType() {
    return this.getStringAttribute('endpoint_type');
  }
  public set endpointType(value: string) {
    this._endpointType = value;
  }
  public resetEndpointType() {
    this._endpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointTypeInput() {
    return this._endpointType;
  }

  // flavor_id - computed: false, optional: true, required: false
  private _flavorId?: string; 
  public get flavorId() {
    return this.getStringAttribute('flavor_id');
  }
  public set flavorId(value: string) {
    this._flavorId = value;
  }
  public resetFlavorId() {
    this._flavorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorIdInput() {
    return this._flavorId;
  }

  // flavor_name - computed: false, optional: true, required: false
  private _flavorName?: string; 
  public get flavorName() {
    return this.getStringAttribute('flavor_name');
  }
  public set flavorName(value: string) {
    this._flavorName = value;
  }
  public resetFlavorName() {
    this._flavorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flavorNameInput() {
    return this._flavorName;
  }

  // floating_ip_pool - computed: false, optional: true, required: false
  private _floatingIpPool?: string; 
  public get floatingIpPool() {
    return this.getStringAttribute('floating_ip_pool');
  }
  public set floatingIpPool(value: string) {
    this._floatingIpPool = value;
  }
  public resetFloatingIpPool() {
    this._floatingIpPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpPoolInput() {
    return this._floatingIpPool;
  }

  // image_id - computed: false, optional: true, required: false
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  public resetImageId() {
    this._imageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // ip_version - computed: false, optional: true, required: false
  private _ipVersion?: string; 
  public get ipVersion() {
    return this.getStringAttribute('ip_version');
  }
  public set ipVersion(value: string) {
    this._ipVersion = value;
  }
  public resetIpVersion() {
    this._ipVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipVersionInput() {
    return this._ipVersion;
  }

  // keypair_name - computed: false, optional: true, required: false
  private _keypairName?: string; 
  public get keypairName() {
    return this.getStringAttribute('keypair_name');
  }
  public set keypairName(value: string) {
    this._keypairName = value;
  }
  public resetKeypairName() {
    this._keypairName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairNameInput() {
    return this._keypairName;
  }

  // net_id - computed: false, optional: true, required: false
  private _netId?: string; 
  public get netId() {
    return this.getStringAttribute('net_id');
  }
  public set netId(value: string) {
    this._netId = value;
  }
  public resetNetId() {
    this._netId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netIdInput() {
    return this._netId;
  }

  // net_name - computed: false, optional: true, required: false
  private _netName?: string; 
  public get netName() {
    return this.getStringAttribute('net_name');
  }
  public set netName(value: string) {
    this._netName = value;
  }
  public resetNetName() {
    this._netName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netNameInput() {
    return this._netName;
  }

  // nova_network - computed: false, optional: true, required: false
  private _novaNetwork?: boolean | cdktf.IResolvable; 
  public get novaNetwork() {
    return this.getBooleanAttribute('nova_network');
  }
  public set novaNetwork(value: boolean | cdktf.IResolvable) {
    this._novaNetwork = value;
  }
  public resetNovaNetwork() {
    this._novaNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get novaNetworkInput() {
    return this._novaNetwork;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // private_key_file - computed: false, optional: true, required: false
  private _privateKeyFile?: string; 
  public get privateKeyFile() {
    return this.getStringAttribute('private_key_file');
  }
  public set privateKeyFile(value: string) {
    this._privateKeyFile = value;
  }
  public resetPrivateKeyFile() {
    this._privateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFileInput() {
    return this._privateKeyFile;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sec_groups - computed: false, optional: true, required: false
  private _secGroups?: string; 
  public get secGroups() {
    return this.getStringAttribute('sec_groups');
  }
  public set secGroups(value: string) {
    this._secGroups = value;
  }
  public resetSecGroups() {
    this._secGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secGroupsInput() {
    return this._secGroups;
  }

  // ssh_port - computed: false, optional: true, required: false
  private _sshPort?: string; 
  public get sshPort() {
    return this.getStringAttribute('ssh_port');
  }
  public set sshPort(value: string) {
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

  // tenant_id - computed: false, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // tenant_name - computed: false, optional: true, required: false
  private _tenantName?: string; 
  public get tenantName() {
    return this.getStringAttribute('tenant_name');
  }
  public set tenantName(value: string) {
    this._tenantName = value;
  }
  public resetTenantName() {
    this._tenantName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantNameInput() {
    return this._tenantName;
  }

  // user_data_file - computed: false, optional: true, required: false
  private _userDataFile?: string; 
  public get userDataFile() {
    return this.getStringAttribute('user_data_file');
  }
  public set userDataFile(value: string) {
    this._userDataFile = value;
  }
  public resetUserDataFile() {
    this._userDataFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataFileInput() {
    return this._userDataFile;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // volume_device_path - computed: false, optional: true, required: false
  private _volumeDevicePath?: string; 
  public get volumeDevicePath() {
    return this.getStringAttribute('volume_device_path');
  }
  public set volumeDevicePath(value: string) {
    this._volumeDevicePath = value;
  }
  public resetVolumeDevicePath() {
    this._volumeDevicePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeDevicePathInput() {
    return this._volumeDevicePath;
  }

  // volume_id - computed: false, optional: true, required: false
  private _volumeId?: string; 
  public get volumeId() {
    return this.getStringAttribute('volume_id');
  }
  public set volumeId(value: string) {
    this._volumeId = value;
  }
  public resetVolumeId() {
    this._volumeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIdInput() {
    return this._volumeId;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }

  // volume_size - computed: false, optional: true, required: false
  private _volumeSize?: string; 
  public get volumeSize() {
    return this.getStringAttribute('volume_size');
  }
  public set volumeSize(value: string) {
    this._volumeSize = value;
  }
  public resetVolumeSize() {
    this._volumeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSizeInput() {
    return this._volumeSize;
  }

  // volume_type - computed: false, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }
}
export interface NodeTemplateOutscaleConfig {
  /**
  * Outscale Access Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#access_key NodeTemplate#access_key}
  */
  readonly accessKey: string;
  /**
  * Extra tags for all created resources (e.g. key1=value1,key2=value2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#extra_tags_all NodeTemplate#extra_tags_all}
  */
  readonly extraTagsAll?: string[];
  /**
  * Extra tags only for instances (e.g. key1=value1,key2=value2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#extra_tags_instances NodeTemplate#extra_tags_instances}
  */
  readonly extraTagsInstances?: string[];
  /**
  * Outscale VM type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#instance_type NodeTemplate#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Outscale Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#region NodeTemplate#region}
  */
  readonly region?: string;
  /**
  * Iops for io1 Root Disk. From 1 to 13000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#root_disk_iops NodeTemplate#root_disk_iops}
  */
  readonly rootDiskIops?: number;
  /**
  * Size of the Root Disk (in GB). From 1 to 14901.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#root_disk_size NodeTemplate#root_disk_size}
  */
  readonly rootDiskSize?: number;
  /**
  * Type of the Root Disk. Possible values are :'standard', 'gp2' or 'io1'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#root_disk_type NodeTemplate#root_disk_type}
  */
  readonly rootDiskType?: string;
  /**
  * Outscale Secret Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#secret_key NodeTemplate#secret_key}
  */
  readonly secretKey: string;
  /**
  * Ids of user defined Security Groups to add to the machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#security_group_ids NodeTemplate#security_group_ids}
  */
  readonly securityGroupIds?: string[];
  /**
  * Outscale Machine Image to use as bootstrap for the VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#source_omi NodeTemplate#source_omi}
  */
  readonly sourceOmi?: string;
}

export function nodeTemplateOutscaleConfigToTerraform(struct?: NodeTemplateOutscaleConfigOutputReference | NodeTemplateOutscaleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_key: cdktf.stringToTerraform(struct!.accessKey),
    extra_tags_all: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraTagsAll),
    extra_tags_instances: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraTagsInstances),
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
    region: cdktf.stringToTerraform(struct!.region),
    root_disk_iops: cdktf.numberToTerraform(struct!.rootDiskIops),
    root_disk_size: cdktf.numberToTerraform(struct!.rootDiskSize),
    root_disk_type: cdktf.stringToTerraform(struct!.rootDiskType),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    security_group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.securityGroupIds),
    source_omi: cdktf.stringToTerraform(struct!.sourceOmi),
  }
}


export function nodeTemplateOutscaleConfigToHclTerraform(struct?: NodeTemplateOutscaleConfigOutputReference | NodeTemplateOutscaleConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_key: {
      value: cdktf.stringToHclTerraform(struct!.accessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_tags_all: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraTagsAll),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    extra_tags_instances: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraTagsInstances),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    root_disk_iops: {
      value: cdktf.numberToHclTerraform(struct!.rootDiskIops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_disk_size: {
      value: cdktf.numberToHclTerraform(struct!.rootDiskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    root_disk_type: {
      value: cdktf.stringToHclTerraform(struct!.rootDiskType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.securityGroupIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source_omi: {
      value: cdktf.stringToHclTerraform(struct!.sourceOmi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateOutscaleConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeTemplateOutscaleConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessKey = this._accessKey;
    }
    if (this._extraTagsAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraTagsAll = this._extraTagsAll;
    }
    if (this._extraTagsInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraTagsInstances = this._extraTagsInstances;
    }
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._rootDiskIops !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDiskIops = this._rootDiskIops;
    }
    if (this._rootDiskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDiskSize = this._rootDiskSize;
    }
    if (this._rootDiskType !== undefined) {
      hasAnyValues = true;
      internalValueResult.rootDiskType = this._rootDiskType;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._securityGroupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroupIds = this._securityGroupIds;
    }
    if (this._sourceOmi !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceOmi = this._sourceOmi;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateOutscaleConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessKey = undefined;
      this._extraTagsAll = undefined;
      this._extraTagsInstances = undefined;
      this._instanceType = undefined;
      this._region = undefined;
      this._rootDiskIops = undefined;
      this._rootDiskSize = undefined;
      this._rootDiskType = undefined;
      this._secretKey = undefined;
      this._securityGroupIds = undefined;
      this._sourceOmi = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessKey = value.accessKey;
      this._extraTagsAll = value.extraTagsAll;
      this._extraTagsInstances = value.extraTagsInstances;
      this._instanceType = value.instanceType;
      this._region = value.region;
      this._rootDiskIops = value.rootDiskIops;
      this._rootDiskSize = value.rootDiskSize;
      this._rootDiskType = value.rootDiskType;
      this._secretKey = value.secretKey;
      this._securityGroupIds = value.securityGroupIds;
      this._sourceOmi = value.sourceOmi;
    }
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // extra_tags_all - computed: false, optional: true, required: false
  private _extraTagsAll?: string[]; 
  public get extraTagsAll() {
    return this.getListAttribute('extra_tags_all');
  }
  public set extraTagsAll(value: string[]) {
    this._extraTagsAll = value;
  }
  public resetExtraTagsAll() {
    this._extraTagsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraTagsAllInput() {
    return this._extraTagsAll;
  }

  // extra_tags_instances - computed: false, optional: true, required: false
  private _extraTagsInstances?: string[]; 
  public get extraTagsInstances() {
    return this.getListAttribute('extra_tags_instances');
  }
  public set extraTagsInstances(value: string[]) {
    this._extraTagsInstances = value;
  }
  public resetExtraTagsInstances() {
    this._extraTagsInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraTagsInstancesInput() {
    return this._extraTagsInstances;
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // root_disk_iops - computed: false, optional: true, required: false
  private _rootDiskIops?: number; 
  public get rootDiskIops() {
    return this.getNumberAttribute('root_disk_iops');
  }
  public set rootDiskIops(value: number) {
    this._rootDiskIops = value;
  }
  public resetRootDiskIops() {
    this._rootDiskIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDiskIopsInput() {
    return this._rootDiskIops;
  }

  // root_disk_size - computed: false, optional: true, required: false
  private _rootDiskSize?: number; 
  public get rootDiskSize() {
    return this.getNumberAttribute('root_disk_size');
  }
  public set rootDiskSize(value: number) {
    this._rootDiskSize = value;
  }
  public resetRootDiskSize() {
    this._rootDiskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDiskSizeInput() {
    return this._rootDiskSize;
  }

  // root_disk_type - computed: false, optional: true, required: false
  private _rootDiskType?: string; 
  public get rootDiskType() {
    return this.getStringAttribute('root_disk_type');
  }
  public set rootDiskType(value: string) {
    this._rootDiskType = value;
  }
  public resetRootDiskType() {
    this._rootDiskType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootDiskTypeInput() {
    return this._rootDiskType;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // security_group_ids - computed: false, optional: true, required: false
  private _securityGroupIds?: string[]; 
  public get securityGroupIds() {
    return this.getListAttribute('security_group_ids');
  }
  public set securityGroupIds(value: string[]) {
    this._securityGroupIds = value;
  }
  public resetSecurityGroupIds() {
    this._securityGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdsInput() {
    return this._securityGroupIds;
  }

  // source_omi - computed: false, optional: true, required: false
  private _sourceOmi?: string; 
  public get sourceOmi() {
    return this.getStringAttribute('source_omi');
  }
  public set sourceOmi(value: string) {
    this._sourceOmi = value;
  }
  public resetSourceOmi() {
    this._sourceOmi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceOmiInput() {
    return this._sourceOmi;
  }
}
export interface NodeTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#create NodeTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#delete NodeTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#update NodeTemplate#update}
  */
  readonly update?: string;
}

export function nodeTemplateTimeoutsToTerraform(struct?: NodeTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function nodeTemplateTimeoutsToHclTerraform(struct?: NodeTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NodeTemplateTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface NodeTemplateVsphereConfig {
  /**
  * vSphere URL for boot2docker image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#boot2docker_url NodeTemplate#boot2docker_url}
  */
  readonly boot2DockerUrl?: string;
  /**
  * vSphere vm configuration parameters (used for guestinfo)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#cfgparam NodeTemplate#cfgparam}
  */
  readonly cfgparam?: string[];
  /**
  * If you choose creation type clone a name of what you want to clone is required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#clone_from NodeTemplate#clone_from}
  */
  readonly cloneFrom?: string;
  /**
  * Filepath to a cloud-config yaml file to put into the ISO user-data
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#cloud_config NodeTemplate#cloud_config}
  */
  readonly cloudConfig?: string;
  /**
  * vSphere cloud-init filepath or url to add to guestinfo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#cloudinit NodeTemplate#cloudinit}
  */
  readonly cloudinit?: string;
  /**
  * If you choose to clone from a content library template specify the name of the library
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#content_library NodeTemplate#content_library}
  */
  readonly contentLibrary?: string;
  /**
  * vSphere CPU number for docker VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#cpu_count NodeTemplate#cpu_count}
  */
  readonly cpuCount?: string;
  /**
  * Creation type when creating a new virtual machine. Supported values: vm, template, library, legacy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#creation_type NodeTemplate#creation_type}
  */
  readonly creationType?: string;
  /**
  * vSphere custom attributes, format key/value e.g. '200=my custom value'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#custom_attributes NodeTemplate#custom_attributes}
  */
  readonly customAttributes?: string[];
  /**
  * vSphere datacenter for virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#datacenter NodeTemplate#datacenter}
  */
  readonly datacenter?: string;
  /**
  * vSphere datastore for virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#datastore NodeTemplate#datastore}
  */
  readonly datastore?: string;
  /**
  * vSphere datastore cluster for virtual machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#datastore_cluster NodeTemplate#datastore_cluster}
  */
  readonly datastoreCluster?: string;
  /**
  * vSphere size of disk for docker VM (in MB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#disk_size NodeTemplate#disk_size}
  */
  readonly diskSize?: string;
  /**
  * vSphere folder for the docker VM. This folder must already exist in the datacenter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#folder NodeTemplate#folder}
  */
  readonly folder?: string;
  /**
  * Duration in seconds before the graceful shutdown of the VM times out and the VM is destroyed. A force destroy will be performed when the value is zero
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#graceful_shutdown_timeout NodeTemplate#graceful_shutdown_timeout}
  */
  readonly gracefulShutdownTimeout?: string;
  /**
  * vSphere compute resource where the docker VM will be instantiated. This can be omitted if using a cluster with DRS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#hostsystem NodeTemplate#hostsystem}
  */
  readonly hostsystem?: string;
  /**
  * vSphere size of memory for docker VM (in MB)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#memory_size NodeTemplate#memory_size}
  */
  readonly memorySize?: string;
  /**
  * vSphere network where the virtual machine will be attached
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#network NodeTemplate#network}
  */
  readonly network?: string[];
  /**
  * vSphere password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#password NodeTemplate#password}
  */
  readonly password?: string;
  /**
  * vSphere resource pool for docker VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#pool NodeTemplate#pool}
  */
  readonly pool?: string;
  /**
  * If using a non-B2D image you can specify the ssh password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_password NodeTemplate#ssh_password}
  */
  readonly sshPassword?: string;
  /**
  * If using a non-B2D image you can specify the ssh port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_port NodeTemplate#ssh_port}
  */
  readonly sshPort?: string;
  /**
  * If using a non-B2D image you can specify the ssh user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_user NodeTemplate#ssh_user}
  */
  readonly sshUser?: string;
  /**
  * If using a non-B2D image the uploaded keys will need chown'ed, defaults to staff e.g. docker:staff
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#ssh_user_group NodeTemplate#ssh_user_group}
  */
  readonly sshUserGroup?: string;
  /**
  * vSphere tags id e.g. urn:xxx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#tags NodeTemplate#tags}
  */
  readonly tags?: string[];
  /**
  * vSphere username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#username NodeTemplate#username}
  */
  readonly username?: string;
  /**
  * vSphere vApp IP allocation policy. Supported values are: dhcp, fixed, transient and fixedAllocated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#vapp_ip_allocation_policy NodeTemplate#vapp_ip_allocation_policy}
  */
  readonly vappIpAllocationPolicy?: string;
  /**
  * vSphere vApp IP protocol for this deployment. Supported values are: IPv4 and IPv6
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#vapp_ip_protocol NodeTemplate#vapp_ip_protocol}
  */
  readonly vappIpProtocol?: string;
  /**
  * vSphere vApp properties
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#vapp_property NodeTemplate#vapp_property}
  */
  readonly vappProperty?: string[];
  /**
  * vSphere OVF environment transports to use for properties. Supported values are: iso and com.vmware.guestInfo
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#vapp_transport NodeTemplate#vapp_transport}
  */
  readonly vappTransport?: string;
  /**
  * vSphere IP/hostname for vCenter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#vcenter NodeTemplate#vcenter}
  */
  readonly vcenter?: string;
  /**
  * vSphere Port for vCenter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#vcenter_port NodeTemplate#vcenter_port}
  */
  readonly vcenterPort?: string;
}

export function nodeTemplateVsphereConfigToTerraform(struct?: NodeTemplateVsphereConfigOutputReference | NodeTemplateVsphereConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot2docker_url: cdktf.stringToTerraform(struct!.boot2DockerUrl),
    cfgparam: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cfgparam),
    clone_from: cdktf.stringToTerraform(struct!.cloneFrom),
    cloud_config: cdktf.stringToTerraform(struct!.cloudConfig),
    cloudinit: cdktf.stringToTerraform(struct!.cloudinit),
    content_library: cdktf.stringToTerraform(struct!.contentLibrary),
    cpu_count: cdktf.stringToTerraform(struct!.cpuCount),
    creation_type: cdktf.stringToTerraform(struct!.creationType),
    custom_attributes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.customAttributes),
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    datastore: cdktf.stringToTerraform(struct!.datastore),
    datastore_cluster: cdktf.stringToTerraform(struct!.datastoreCluster),
    disk_size: cdktf.stringToTerraform(struct!.diskSize),
    folder: cdktf.stringToTerraform(struct!.folder),
    graceful_shutdown_timeout: cdktf.stringToTerraform(struct!.gracefulShutdownTimeout),
    hostsystem: cdktf.stringToTerraform(struct!.hostsystem),
    memory_size: cdktf.stringToTerraform(struct!.memorySize),
    network: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.network),
    password: cdktf.stringToTerraform(struct!.password),
    pool: cdktf.stringToTerraform(struct!.pool),
    ssh_password: cdktf.stringToTerraform(struct!.sshPassword),
    ssh_port: cdktf.stringToTerraform(struct!.sshPort),
    ssh_user: cdktf.stringToTerraform(struct!.sshUser),
    ssh_user_group: cdktf.stringToTerraform(struct!.sshUserGroup),
    tags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tags),
    username: cdktf.stringToTerraform(struct!.username),
    vapp_ip_allocation_policy: cdktf.stringToTerraform(struct!.vappIpAllocationPolicy),
    vapp_ip_protocol: cdktf.stringToTerraform(struct!.vappIpProtocol),
    vapp_property: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vappProperty),
    vapp_transport: cdktf.stringToTerraform(struct!.vappTransport),
    vcenter: cdktf.stringToTerraform(struct!.vcenter),
    vcenter_port: cdktf.stringToTerraform(struct!.vcenterPort),
  }
}


export function nodeTemplateVsphereConfigToHclTerraform(struct?: NodeTemplateVsphereConfigOutputReference | NodeTemplateVsphereConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot2docker_url: {
      value: cdktf.stringToHclTerraform(struct!.boot2DockerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfgparam: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cfgparam),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    clone_from: {
      value: cdktf.stringToHclTerraform(struct!.cloneFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_config: {
      value: cdktf.stringToHclTerraform(struct!.cloudConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloudinit: {
      value: cdktf.stringToHclTerraform(struct!.cloudinit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    content_library: {
      value: cdktf.stringToHclTerraform(struct!.contentLibrary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_count: {
      value: cdktf.stringToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creation_type: {
      value: cdktf.stringToHclTerraform(struct!.creationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_attributes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.customAttributes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore: {
      value: cdktf.stringToHclTerraform(struct!.datastore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datastore_cluster: {
      value: cdktf.stringToHclTerraform(struct!.datastoreCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disk_size: {
      value: cdktf.stringToHclTerraform(struct!.diskSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    folder: {
      value: cdktf.stringToHclTerraform(struct!.folder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    graceful_shutdown_timeout: {
      value: cdktf.stringToHclTerraform(struct!.gracefulShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostsystem: {
      value: cdktf.stringToHclTerraform(struct!.hostsystem),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory_size: {
      value: cdktf.stringToHclTerraform(struct!.memorySize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.network),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool: {
      value: cdktf.stringToHclTerraform(struct!.pool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_password: {
      value: cdktf.stringToHclTerraform(struct!.sshPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_port: {
      value: cdktf.stringToHclTerraform(struct!.sshPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_user: {
      value: cdktf.stringToHclTerraform(struct!.sshUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_user_group: {
      value: cdktf.stringToHclTerraform(struct!.sshUserGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vapp_ip_allocation_policy: {
      value: cdktf.stringToHclTerraform(struct!.vappIpAllocationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vapp_ip_protocol: {
      value: cdktf.stringToHclTerraform(struct!.vappIpProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vapp_property: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vappProperty),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    vapp_transport: {
      value: cdktf.stringToHclTerraform(struct!.vappTransport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter: {
      value: cdktf.stringToHclTerraform(struct!.vcenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vcenter_port: {
      value: cdktf.stringToHclTerraform(struct!.vcenterPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateVsphereConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeTemplateVsphereConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._boot2DockerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.boot2DockerUrl = this._boot2DockerUrl;
    }
    if (this._cfgparam !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfgparam = this._cfgparam;
    }
    if (this._cloneFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloneFrom = this._cloneFrom;
    }
    if (this._cloudConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudConfig = this._cloudConfig;
    }
    if (this._cloudinit !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudinit = this._cloudinit;
    }
    if (this._contentLibrary !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentLibrary = this._contentLibrary;
    }
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._creationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.creationType = this._creationType;
    }
    if (this._customAttributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.customAttributes = this._customAttributes;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._datastore !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastore = this._datastore;
    }
    if (this._datastoreCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.datastoreCluster = this._datastoreCluster;
    }
    if (this._diskSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskSize = this._diskSize;
    }
    if (this._folder !== undefined) {
      hasAnyValues = true;
      internalValueResult.folder = this._folder;
    }
    if (this._gracefulShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracefulShutdownTimeout = this._gracefulShutdownTimeout;
    }
    if (this._hostsystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostsystem = this._hostsystem;
    }
    if (this._memorySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.memorySize = this._memorySize;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._pool !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool;
    }
    if (this._sshPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPassword = this._sshPassword;
    }
    if (this._sshPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshPort = this._sshPort;
    }
    if (this._sshUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshUser = this._sshUser;
    }
    if (this._sshUserGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshUserGroup = this._sshUserGroup;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._vappIpAllocationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.vappIpAllocationPolicy = this._vappIpAllocationPolicy;
    }
    if (this._vappIpProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.vappIpProtocol = this._vappIpProtocol;
    }
    if (this._vappProperty !== undefined) {
      hasAnyValues = true;
      internalValueResult.vappProperty = this._vappProperty;
    }
    if (this._vappTransport !== undefined) {
      hasAnyValues = true;
      internalValueResult.vappTransport = this._vappTransport;
    }
    if (this._vcenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenter = this._vcenter;
    }
    if (this._vcenterPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.vcenterPort = this._vcenterPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateVsphereConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._boot2DockerUrl = undefined;
      this._cfgparam = undefined;
      this._cloneFrom = undefined;
      this._cloudConfig = undefined;
      this._cloudinit = undefined;
      this._contentLibrary = undefined;
      this._cpuCount = undefined;
      this._creationType = undefined;
      this._customAttributes = undefined;
      this._datacenter = undefined;
      this._datastore = undefined;
      this._datastoreCluster = undefined;
      this._diskSize = undefined;
      this._folder = undefined;
      this._gracefulShutdownTimeout = undefined;
      this._hostsystem = undefined;
      this._memorySize = undefined;
      this._network = undefined;
      this._password = undefined;
      this._pool = undefined;
      this._sshPassword = undefined;
      this._sshPort = undefined;
      this._sshUser = undefined;
      this._sshUserGroup = undefined;
      this._tags = undefined;
      this._username = undefined;
      this._vappIpAllocationPolicy = undefined;
      this._vappIpProtocol = undefined;
      this._vappProperty = undefined;
      this._vappTransport = undefined;
      this._vcenter = undefined;
      this._vcenterPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._boot2DockerUrl = value.boot2DockerUrl;
      this._cfgparam = value.cfgparam;
      this._cloneFrom = value.cloneFrom;
      this._cloudConfig = value.cloudConfig;
      this._cloudinit = value.cloudinit;
      this._contentLibrary = value.contentLibrary;
      this._cpuCount = value.cpuCount;
      this._creationType = value.creationType;
      this._customAttributes = value.customAttributes;
      this._datacenter = value.datacenter;
      this._datastore = value.datastore;
      this._datastoreCluster = value.datastoreCluster;
      this._diskSize = value.diskSize;
      this._folder = value.folder;
      this._gracefulShutdownTimeout = value.gracefulShutdownTimeout;
      this._hostsystem = value.hostsystem;
      this._memorySize = value.memorySize;
      this._network = value.network;
      this._password = value.password;
      this._pool = value.pool;
      this._sshPassword = value.sshPassword;
      this._sshPort = value.sshPort;
      this._sshUser = value.sshUser;
      this._sshUserGroup = value.sshUserGroup;
      this._tags = value.tags;
      this._username = value.username;
      this._vappIpAllocationPolicy = value.vappIpAllocationPolicy;
      this._vappIpProtocol = value.vappIpProtocol;
      this._vappProperty = value.vappProperty;
      this._vappTransport = value.vappTransport;
      this._vcenter = value.vcenter;
      this._vcenterPort = value.vcenterPort;
    }
  }

  // boot2docker_url - computed: false, optional: true, required: false
  private _boot2DockerUrl?: string; 
  public get boot2DockerUrl() {
    return this.getStringAttribute('boot2docker_url');
  }
  public set boot2DockerUrl(value: string) {
    this._boot2DockerUrl = value;
  }
  public resetBoot2DockerUrl() {
    this._boot2DockerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get boot2DockerUrlInput() {
    return this._boot2DockerUrl;
  }

  // cfgparam - computed: false, optional: true, required: false
  private _cfgparam?: string[]; 
  public get cfgparam() {
    return this.getListAttribute('cfgparam');
  }
  public set cfgparam(value: string[]) {
    this._cfgparam = value;
  }
  public resetCfgparam() {
    this._cfgparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgparamInput() {
    return this._cfgparam;
  }

  // clone_from - computed: false, optional: true, required: false
  private _cloneFrom?: string; 
  public get cloneFrom() {
    return this.getStringAttribute('clone_from');
  }
  public set cloneFrom(value: string) {
    this._cloneFrom = value;
  }
  public resetCloneFrom() {
    this._cloneFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneFromInput() {
    return this._cloneFrom;
  }

  // cloud_config - computed: false, optional: true, required: false
  private _cloudConfig?: string; 
  public get cloudConfig() {
    return this.getStringAttribute('cloud_config');
  }
  public set cloudConfig(value: string) {
    this._cloudConfig = value;
  }
  public resetCloudConfig() {
    this._cloudConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudConfigInput() {
    return this._cloudConfig;
  }

  // cloudinit - computed: false, optional: true, required: false
  private _cloudinit?: string; 
  public get cloudinit() {
    return this.getStringAttribute('cloudinit');
  }
  public set cloudinit(value: string) {
    this._cloudinit = value;
  }
  public resetCloudinit() {
    this._cloudinit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudinitInput() {
    return this._cloudinit;
  }

  // content_library - computed: false, optional: true, required: false
  private _contentLibrary?: string; 
  public get contentLibrary() {
    return this.getStringAttribute('content_library');
  }
  public set contentLibrary(value: string) {
    this._contentLibrary = value;
  }
  public resetContentLibrary() {
    this._contentLibrary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentLibraryInput() {
    return this._contentLibrary;
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: string; 
  public get cpuCount() {
    return this.getStringAttribute('cpu_count');
  }
  public set cpuCount(value: string) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // creation_type - computed: false, optional: true, required: false
  private _creationType?: string; 
  public get creationType() {
    return this.getStringAttribute('creation_type');
  }
  public set creationType(value: string) {
    this._creationType = value;
  }
  public resetCreationType() {
    this._creationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creationTypeInput() {
    return this._creationType;
  }

  // custom_attributes - computed: false, optional: true, required: false
  private _customAttributes?: string[]; 
  public get customAttributes() {
    return this.getListAttribute('custom_attributes');
  }
  public set customAttributes(value: string[]) {
    this._customAttributes = value;
  }
  public resetCustomAttributes() {
    this._customAttributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAttributesInput() {
    return this._customAttributes;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // datastore - computed: false, optional: true, required: false
  private _datastore?: string; 
  public get datastore() {
    return this.getStringAttribute('datastore');
  }
  public set datastore(value: string) {
    this._datastore = value;
  }
  public resetDatastore() {
    this._datastore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreInput() {
    return this._datastore;
  }

  // datastore_cluster - computed: false, optional: true, required: false
  private _datastoreCluster?: string; 
  public get datastoreCluster() {
    return this.getStringAttribute('datastore_cluster');
  }
  public set datastoreCluster(value: string) {
    this._datastoreCluster = value;
  }
  public resetDatastoreCluster() {
    this._datastoreCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datastoreClusterInput() {
    return this._datastoreCluster;
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

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // graceful_shutdown_timeout - computed: false, optional: true, required: false
  private _gracefulShutdownTimeout?: string; 
  public get gracefulShutdownTimeout() {
    return this.getStringAttribute('graceful_shutdown_timeout');
  }
  public set gracefulShutdownTimeout(value: string) {
    this._gracefulShutdownTimeout = value;
  }
  public resetGracefulShutdownTimeout() {
    this._gracefulShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracefulShutdownTimeoutInput() {
    return this._gracefulShutdownTimeout;
  }

  // hostsystem - computed: false, optional: true, required: false
  private _hostsystem?: string; 
  public get hostsystem() {
    return this.getStringAttribute('hostsystem');
  }
  public set hostsystem(value: string) {
    this._hostsystem = value;
  }
  public resetHostsystem() {
    this._hostsystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsystemInput() {
    return this._hostsystem;
  }

  // memory_size - computed: false, optional: true, required: false
  private _memorySize?: string; 
  public get memorySize() {
    return this.getStringAttribute('memory_size');
  }
  public set memorySize(value: string) {
    this._memorySize = value;
  }
  public resetMemorySize() {
    this._memorySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memorySizeInput() {
    return this._memorySize;
  }

  // network - computed: false, optional: true, required: false
  private _network?: string[]; 
  public get network() {
    return this.getListAttribute('network');
  }
  public set network(value: string[]) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // pool - computed: false, optional: true, required: false
  private _pool?: string; 
  public get pool() {
    return this.getStringAttribute('pool');
  }
  public set pool(value: string) {
    this._pool = value;
  }
  public resetPool() {
    this._pool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool;
  }

  // ssh_password - computed: false, optional: true, required: false
  private _sshPassword?: string; 
  public get sshPassword() {
    return this.getStringAttribute('ssh_password');
  }
  public set sshPassword(value: string) {
    this._sshPassword = value;
  }
  public resetSshPassword() {
    this._sshPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshPasswordInput() {
    return this._sshPassword;
  }

  // ssh_port - computed: false, optional: true, required: false
  private _sshPort?: string; 
  public get sshPort() {
    return this.getStringAttribute('ssh_port');
  }
  public set sshPort(value: string) {
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

  // ssh_user_group - computed: false, optional: true, required: false
  private _sshUserGroup?: string; 
  public get sshUserGroup() {
    return this.getStringAttribute('ssh_user_group');
  }
  public set sshUserGroup(value: string) {
    this._sshUserGroup = value;
  }
  public resetSshUserGroup() {
    this._sshUserGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshUserGroupInput() {
    return this._sshUserGroup;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // vapp_ip_allocation_policy - computed: false, optional: true, required: false
  private _vappIpAllocationPolicy?: string; 
  public get vappIpAllocationPolicy() {
    return this.getStringAttribute('vapp_ip_allocation_policy');
  }
  public set vappIpAllocationPolicy(value: string) {
    this._vappIpAllocationPolicy = value;
  }
  public resetVappIpAllocationPolicy() {
    this._vappIpAllocationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vappIpAllocationPolicyInput() {
    return this._vappIpAllocationPolicy;
  }

  // vapp_ip_protocol - computed: false, optional: true, required: false
  private _vappIpProtocol?: string; 
  public get vappIpProtocol() {
    return this.getStringAttribute('vapp_ip_protocol');
  }
  public set vappIpProtocol(value: string) {
    this._vappIpProtocol = value;
  }
  public resetVappIpProtocol() {
    this._vappIpProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vappIpProtocolInput() {
    return this._vappIpProtocol;
  }

  // vapp_property - computed: false, optional: true, required: false
  private _vappProperty?: string[]; 
  public get vappProperty() {
    return this.getListAttribute('vapp_property');
  }
  public set vappProperty(value: string[]) {
    this._vappProperty = value;
  }
  public resetVappProperty() {
    this._vappProperty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vappPropertyInput() {
    return this._vappProperty;
  }

  // vapp_transport - computed: false, optional: true, required: false
  private _vappTransport?: string; 
  public get vappTransport() {
    return this.getStringAttribute('vapp_transport');
  }
  public set vappTransport(value: string) {
    this._vappTransport = value;
  }
  public resetVappTransport() {
    this._vappTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vappTransportInput() {
    return this._vappTransport;
  }

  // vcenter - computed: false, optional: true, required: false
  private _vcenter?: string; 
  public get vcenter() {
    return this.getStringAttribute('vcenter');
  }
  public set vcenter(value: string) {
    this._vcenter = value;
  }
  public resetVcenter() {
    this._vcenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterInput() {
    return this._vcenter;
  }

  // vcenter_port - computed: false, optional: true, required: false
  private _vcenterPort?: string; 
  public get vcenterPort() {
    return this.getStringAttribute('vcenter_port');
  }
  public set vcenterPort(value: string) {
    this._vcenterPort = value;
  }
  public resetVcenterPort() {
    this._vcenterPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vcenterPortInput() {
    return this._vcenterPort;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template rancher2_node_template}
*/
export class NodeTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rancher2_node_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NodeTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NodeTemplate to import
  * @param importFromId The id of the existing NodeTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NodeTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rancher2_node_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rancher/rancher2/7.9.0/docs/resources/node_template rancher2_node_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodeTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: NodeTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'rancher2_node_template',
      terraformGeneratorMetadata: {
        providerName: 'rancher2',
        providerVersion: '7.9.0',
        providerVersionConstraint: '7.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._authCertificateAuthority = config.authCertificateAuthority;
    this._authKey = config.authKey;
    this._cloudCredentialId = config.cloudCredentialId;
    this._description = config.description;
    this._driverId = config.driverId;
    this._engineEnv = config.engineEnv;
    this._engineInsecureRegistry = config.engineInsecureRegistry;
    this._engineInstallUrl = config.engineInstallUrl;
    this._engineLabel = config.engineLabel;
    this._engineOpt = config.engineOpt;
    this._engineRegistryMirror = config.engineRegistryMirror;
    this._engineStorageDriver = config.engineStorageDriver;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._useInternalIpAddress = config.useInternalIpAddress;
    this._amazonec2Config.internalValue = config.amazonec2Config;
    this._azureConfig.internalValue = config.azureConfig;
    this._digitaloceanConfig.internalValue = config.digitaloceanConfig;
    this._harvesterConfig.internalValue = config.harvesterConfig;
    this._hetznerConfig.internalValue = config.hetznerConfig;
    this._linodeConfig.internalValue = config.linodeConfig;
    this._nodeTaints.internalValue = config.nodeTaints;
    this._opennebulaConfig.internalValue = config.opennebulaConfig;
    this._openstackConfig.internalValue = config.openstackConfig;
    this._outscaleConfig.internalValue = config.outscaleConfig;
    this._timeouts.internalValue = config.timeouts;
    this._vsphereConfig.internalValue = config.vsphereConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: true, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // auth_certificate_authority - computed: false, optional: true, required: false
  private _authCertificateAuthority?: string; 
  public get authCertificateAuthority() {
    return this.getStringAttribute('auth_certificate_authority');
  }
  public set authCertificateAuthority(value: string) {
    this._authCertificateAuthority = value;
  }
  public resetAuthCertificateAuthority() {
    this._authCertificateAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authCertificateAuthorityInput() {
    return this._authCertificateAuthority;
  }

  // auth_key - computed: false, optional: true, required: false
  private _authKey?: string; 
  public get authKey() {
    return this.getStringAttribute('auth_key');
  }
  public set authKey(value: string) {
    this._authKey = value;
  }
  public resetAuthKey() {
    this._authKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authKeyInput() {
    return this._authKey;
  }

  // cloud_credential_id - computed: false, optional: true, required: false
  private _cloudCredentialId?: string; 
  public get cloudCredentialId() {
    return this.getStringAttribute('cloud_credential_id');
  }
  public set cloudCredentialId(value: string) {
    this._cloudCredentialId = value;
  }
  public resetCloudCredentialId() {
    this._cloudCredentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCredentialIdInput() {
    return this._cloudCredentialId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // driver - computed: true, optional: false, required: false
  public get driver() {
    return this.getStringAttribute('driver');
  }

  // driver_id - computed: true, optional: true, required: false
  private _driverId?: string; 
  public get driverId() {
    return this.getStringAttribute('driver_id');
  }
  public set driverId(value: string) {
    this._driverId = value;
  }
  public resetDriverId() {
    this._driverId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get driverIdInput() {
    return this._driverId;
  }

  // engine_env - computed: false, optional: true, required: false
  private _engineEnv?: { [key: string]: string }; 
  public get engineEnv() {
    return this.getStringMapAttribute('engine_env');
  }
  public set engineEnv(value: { [key: string]: string }) {
    this._engineEnv = value;
  }
  public resetEngineEnv() {
    this._engineEnv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineEnvInput() {
    return this._engineEnv;
  }

  // engine_insecure_registry - computed: false, optional: true, required: false
  private _engineInsecureRegistry?: string[]; 
  public get engineInsecureRegistry() {
    return this.getListAttribute('engine_insecure_registry');
  }
  public set engineInsecureRegistry(value: string[]) {
    this._engineInsecureRegistry = value;
  }
  public resetEngineInsecureRegistry() {
    this._engineInsecureRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInsecureRegistryInput() {
    return this._engineInsecureRegistry;
  }

  // engine_install_url - computed: true, optional: true, required: false
  private _engineInstallUrl?: string; 
  public get engineInstallUrl() {
    return this.getStringAttribute('engine_install_url');
  }
  public set engineInstallUrl(value: string) {
    this._engineInstallUrl = value;
  }
  public resetEngineInstallUrl() {
    this._engineInstallUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInstallUrlInput() {
    return this._engineInstallUrl;
  }

  // engine_label - computed: false, optional: true, required: false
  private _engineLabel?: { [key: string]: string }; 
  public get engineLabel() {
    return this.getStringMapAttribute('engine_label');
  }
  public set engineLabel(value: { [key: string]: string }) {
    this._engineLabel = value;
  }
  public resetEngineLabel() {
    this._engineLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineLabelInput() {
    return this._engineLabel;
  }

  // engine_opt - computed: false, optional: true, required: false
  private _engineOpt?: { [key: string]: string }; 
  public get engineOpt() {
    return this.getStringMapAttribute('engine_opt');
  }
  public set engineOpt(value: { [key: string]: string }) {
    this._engineOpt = value;
  }
  public resetEngineOpt() {
    this._engineOpt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineOptInput() {
    return this._engineOpt;
  }

  // engine_registry_mirror - computed: false, optional: true, required: false
  private _engineRegistryMirror?: string[]; 
  public get engineRegistryMirror() {
    return this.getListAttribute('engine_registry_mirror');
  }
  public set engineRegistryMirror(value: string[]) {
    this._engineRegistryMirror = value;
  }
  public resetEngineRegistryMirror() {
    this._engineRegistryMirror = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineRegistryMirrorInput() {
    return this._engineRegistryMirror;
  }

  // engine_storage_driver - computed: false, optional: true, required: false
  private _engineStorageDriver?: string; 
  public get engineStorageDriver() {
    return this.getStringAttribute('engine_storage_driver');
  }
  public set engineStorageDriver(value: string) {
    this._engineStorageDriver = value;
  }
  public resetEngineStorageDriver() {
    this._engineStorageDriver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineStorageDriverInput() {
    return this._engineStorageDriver;
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

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // use_internal_ip_address - computed: false, optional: true, required: false
  private _useInternalIpAddress?: boolean | cdktf.IResolvable; 
  public get useInternalIpAddress() {
    return this.getBooleanAttribute('use_internal_ip_address');
  }
  public set useInternalIpAddress(value: boolean | cdktf.IResolvable) {
    this._useInternalIpAddress = value;
  }
  public resetUseInternalIpAddress() {
    this._useInternalIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useInternalIpAddressInput() {
    return this._useInternalIpAddress;
  }

  // amazonec2_config - computed: false, optional: true, required: false
  private _amazonec2Config = new NodeTemplateAmazonec2ConfigOutputReference(this, "amazonec2_config");
  public get amazonec2Config() {
    return this._amazonec2Config;
  }
  public putAmazonec2Config(value: NodeTemplateAmazonec2Config) {
    this._amazonec2Config.internalValue = value;
  }
  public resetAmazonec2Config() {
    this._amazonec2Config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonec2ConfigInput() {
    return this._amazonec2Config.internalValue;
  }

  // azure_config - computed: false, optional: true, required: false
  private _azureConfig = new NodeTemplateAzureConfigOutputReference(this, "azure_config");
  public get azureConfig() {
    return this._azureConfig;
  }
  public putAzureConfig(value: NodeTemplateAzureConfig) {
    this._azureConfig.internalValue = value;
  }
  public resetAzureConfig() {
    this._azureConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureConfigInput() {
    return this._azureConfig.internalValue;
  }

  // digitalocean_config - computed: false, optional: true, required: false
  private _digitaloceanConfig = new NodeTemplateDigitaloceanConfigOutputReference(this, "digitalocean_config");
  public get digitaloceanConfig() {
    return this._digitaloceanConfig;
  }
  public putDigitaloceanConfig(value: NodeTemplateDigitaloceanConfig) {
    this._digitaloceanConfig.internalValue = value;
  }
  public resetDigitaloceanConfig() {
    this._digitaloceanConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitaloceanConfigInput() {
    return this._digitaloceanConfig.internalValue;
  }

  // harvester_config - computed: false, optional: true, required: false
  private _harvesterConfig = new NodeTemplateHarvesterConfigOutputReference(this, "harvester_config");
  public get harvesterConfig() {
    return this._harvesterConfig;
  }
  public putHarvesterConfig(value: NodeTemplateHarvesterConfig) {
    this._harvesterConfig.internalValue = value;
  }
  public resetHarvesterConfig() {
    this._harvesterConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get harvesterConfigInput() {
    return this._harvesterConfig.internalValue;
  }

  // hetzner_config - computed: false, optional: true, required: false
  private _hetznerConfig = new NodeTemplateHetznerConfigOutputReference(this, "hetzner_config");
  public get hetznerConfig() {
    return this._hetznerConfig;
  }
  public putHetznerConfig(value: NodeTemplateHetznerConfig) {
    this._hetznerConfig.internalValue = value;
  }
  public resetHetznerConfig() {
    this._hetznerConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hetznerConfigInput() {
    return this._hetznerConfig.internalValue;
  }

  // linode_config - computed: false, optional: true, required: false
  private _linodeConfig = new NodeTemplateLinodeConfigOutputReference(this, "linode_config");
  public get linodeConfig() {
    return this._linodeConfig;
  }
  public putLinodeConfig(value: NodeTemplateLinodeConfig) {
    this._linodeConfig.internalValue = value;
  }
  public resetLinodeConfig() {
    this._linodeConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeConfigInput() {
    return this._linodeConfig.internalValue;
  }

  // node_taints - computed: false, optional: true, required: false
  private _nodeTaints = new NodeTemplateNodeTaintsList(this, "node_taints", false);
  public get nodeTaints() {
    return this._nodeTaints;
  }
  public putNodeTaints(value: NodeTemplateNodeTaints[] | cdktf.IResolvable) {
    this._nodeTaints.internalValue = value;
  }
  public resetNodeTaints() {
    this._nodeTaints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsInput() {
    return this._nodeTaints.internalValue;
  }

  // opennebula_config - computed: false, optional: true, required: false
  private _opennebulaConfig = new NodeTemplateOpennebulaConfigOutputReference(this, "opennebula_config");
  public get opennebulaConfig() {
    return this._opennebulaConfig;
  }
  public putOpennebulaConfig(value: NodeTemplateOpennebulaConfig) {
    this._opennebulaConfig.internalValue = value;
  }
  public resetOpennebulaConfig() {
    this._opennebulaConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get opennebulaConfigInput() {
    return this._opennebulaConfig.internalValue;
  }

  // openstack_config - computed: false, optional: true, required: false
  private _openstackConfig = new NodeTemplateOpenstackConfigOutputReference(this, "openstack_config");
  public get openstackConfig() {
    return this._openstackConfig;
  }
  public putOpenstackConfig(value: NodeTemplateOpenstackConfig) {
    this._openstackConfig.internalValue = value;
  }
  public resetOpenstackConfig() {
    this._openstackConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openstackConfigInput() {
    return this._openstackConfig.internalValue;
  }

  // outscale_config - computed: false, optional: true, required: false
  private _outscaleConfig = new NodeTemplateOutscaleConfigOutputReference(this, "outscale_config");
  public get outscaleConfig() {
    return this._outscaleConfig;
  }
  public putOutscaleConfig(value: NodeTemplateOutscaleConfig) {
    this._outscaleConfig.internalValue = value;
  }
  public resetOutscaleConfig() {
    this._outscaleConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outscaleConfigInput() {
    return this._outscaleConfig.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NodeTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NodeTemplateTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // vsphere_config - computed: false, optional: true, required: false
  private _vsphereConfig = new NodeTemplateVsphereConfigOutputReference(this, "vsphere_config");
  public get vsphereConfig() {
    return this._vsphereConfig;
  }
  public putVsphereConfig(value: NodeTemplateVsphereConfig) {
    this._vsphereConfig.internalValue = value;
  }
  public resetVsphereConfig() {
    this._vsphereConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vsphereConfigInput() {
    return this._vsphereConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      auth_certificate_authority: cdktf.stringToTerraform(this._authCertificateAuthority),
      auth_key: cdktf.stringToTerraform(this._authKey),
      cloud_credential_id: cdktf.stringToTerraform(this._cloudCredentialId),
      description: cdktf.stringToTerraform(this._description),
      driver_id: cdktf.stringToTerraform(this._driverId),
      engine_env: cdktf.hashMapper(cdktf.stringToTerraform)(this._engineEnv),
      engine_insecure_registry: cdktf.listMapper(cdktf.stringToTerraform, false)(this._engineInsecureRegistry),
      engine_install_url: cdktf.stringToTerraform(this._engineInstallUrl),
      engine_label: cdktf.hashMapper(cdktf.stringToTerraform)(this._engineLabel),
      engine_opt: cdktf.hashMapper(cdktf.stringToTerraform)(this._engineOpt),
      engine_registry_mirror: cdktf.listMapper(cdktf.stringToTerraform, false)(this._engineRegistryMirror),
      engine_storage_driver: cdktf.stringToTerraform(this._engineStorageDriver),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      use_internal_ip_address: cdktf.booleanToTerraform(this._useInternalIpAddress),
      amazonec2_config: nodeTemplateAmazonec2ConfigToTerraform(this._amazonec2Config.internalValue),
      azure_config: nodeTemplateAzureConfigToTerraform(this._azureConfig.internalValue),
      digitalocean_config: nodeTemplateDigitaloceanConfigToTerraform(this._digitaloceanConfig.internalValue),
      harvester_config: nodeTemplateHarvesterConfigToTerraform(this._harvesterConfig.internalValue),
      hetzner_config: nodeTemplateHetznerConfigToTerraform(this._hetznerConfig.internalValue),
      linode_config: nodeTemplateLinodeConfigToTerraform(this._linodeConfig.internalValue),
      node_taints: cdktf.listMapper(nodeTemplateNodeTaintsToTerraform, true)(this._nodeTaints.internalValue),
      opennebula_config: nodeTemplateOpennebulaConfigToTerraform(this._opennebulaConfig.internalValue),
      openstack_config: nodeTemplateOpenstackConfigToTerraform(this._openstackConfig.internalValue),
      outscale_config: nodeTemplateOutscaleConfigToTerraform(this._outscaleConfig.internalValue),
      timeouts: nodeTemplateTimeoutsToTerraform(this._timeouts.internalValue),
      vsphere_config: nodeTemplateVsphereConfigToTerraform(this._vsphereConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      auth_certificate_authority: {
        value: cdktf.stringToHclTerraform(this._authCertificateAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_key: {
        value: cdktf.stringToHclTerraform(this._authKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_credential_id: {
        value: cdktf.stringToHclTerraform(this._cloudCredentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      driver_id: {
        value: cdktf.stringToHclTerraform(this._driverId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_env: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._engineEnv),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      engine_insecure_registry: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._engineInsecureRegistry),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      engine_install_url: {
        value: cdktf.stringToHclTerraform(this._engineInstallUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      engine_label: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._engineLabel),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      engine_opt: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._engineOpt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      engine_registry_mirror: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._engineRegistryMirror),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      engine_storage_driver: {
        value: cdktf.stringToHclTerraform(this._engineStorageDriver),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_internal_ip_address: {
        value: cdktf.booleanToHclTerraform(this._useInternalIpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      amazonec2_config: {
        value: nodeTemplateAmazonec2ConfigToHclTerraform(this._amazonec2Config.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeTemplateAmazonec2ConfigList",
      },
      azure_config: {
        value: nodeTemplateAzureConfigToHclTerraform(this._azureConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeTemplateAzureConfigList",
      },
      digitalocean_config: {
        value: nodeTemplateDigitaloceanConfigToHclTerraform(this._digitaloceanConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeTemplateDigitaloceanConfigList",
      },
      harvester_config: {
        value: nodeTemplateHarvesterConfigToHclTerraform(this._harvesterConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeTemplateHarvesterConfigList",
      },
      hetzner_config: {
        value: nodeTemplateHetznerConfigToHclTerraform(this._hetznerConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeTemplateHetznerConfigList",
      },
      linode_config: {
        value: nodeTemplateLinodeConfigToHclTerraform(this._linodeConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeTemplateLinodeConfigList",
      },
      node_taints: {
        value: cdktf.listMapperHcl(nodeTemplateNodeTaintsToHclTerraform, true)(this._nodeTaints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeTemplateNodeTaintsList",
      },
      opennebula_config: {
        value: nodeTemplateOpennebulaConfigToHclTerraform(this._opennebulaConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeTemplateOpennebulaConfigList",
      },
      openstack_config: {
        value: nodeTemplateOpenstackConfigToHclTerraform(this._openstackConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeTemplateOpenstackConfigList",
      },
      outscale_config: {
        value: nodeTemplateOutscaleConfigToHclTerraform(this._outscaleConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeTemplateOutscaleConfigList",
      },
      timeouts: {
        value: nodeTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NodeTemplateTimeouts",
      },
      vsphere_config: {
        value: nodeTemplateVsphereConfigToHclTerraform(this._vsphereConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeTemplateVsphereConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
