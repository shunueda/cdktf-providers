// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * The numeric ID of the container agent pool that this host is added to.
  *  - 0: Linux Docker/Native
  * - 	4: None
  * - 5: Docker Windows
  * - 7: EKS Linux
  * - 8: ECS Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#agent_platform AwsHost#agent_platform}
  */
  readonly agentPlatform?: number;
  /**
  * Whether or not to allocate a public IP. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#allocated_public_ip AwsHost#allocated_public_ip}
  */
  readonly allocatedPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Base64 encoded EC2 user data to associated with the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#base64_user_data AwsHost#base64_user_data}
  */
  readonly base64UserData?: string;
  /**
  * The AWS EC2 instance type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#capacity AwsHost#capacity}
  */
  readonly capacity: string;
  /**
  * The numeric ID of the cloud provider to launch the host in. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#cloud AwsHost#cloud}
  */
  readonly cloud?: number;
  /**
  * Specify the labels to attach to the nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#custom_node_labels AwsHost#custom_node_labels}
  */
  readonly customNodeLabels?: { [key: string]: string };
  /**
  * The short name of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#friendly_name AwsHost#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#id AwsHost#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The AMI ID to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#image_id AwsHost#image_id}
  */
  readonly imageId: string;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#is_ebs_optimized AwsHost#is_ebs_optimized}
  */
  readonly isEbsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#is_minion AwsHost#is_minion}
  */
  readonly isMinion?: boolean | cdktf.IResolvable;
  /**
  * The numeric ID of the keypair type being used.Should be one of:
  * 
  *    - `0` : Default
  *    - `1` : RSA (deprecated - some operating systems no longer support it)
  *    - `2` : ED25519
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#keypair_type AwsHost#keypair_type}
  */
  readonly keypairType?: number;
  /**
  * Bootstrap an EKS host with Duplo's user data, prepending it to custom user data if also provided. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#prepend_user_data AwsHost#prepend_user_data}
  */
  readonly prependUserData?: boolean | cdktf.IResolvable;
  /**
  * The GUID of the tenant that the host will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#tenant_id AwsHost#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The name of the tenant that the host will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#user_account AwsHost#user_account}
  */
  readonly userAccount?: string;
  /**
  * Whether or not to wait until Duplo can connect to the host, after creation. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#wait_until_connected AwsHost#wait_until_connected}
  */
  readonly waitUntilConnected?: boolean | cdktf.IResolvable;
  /**
  * The availability zone to launch the host in, expressed as a number and starting at 0. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#zone AwsHost#zone}
  */
  readonly zone?: number;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#metadata AwsHost#metadata}
  */
  readonly metadata?: AwsHostMetadata[] | cdktf.IResolvable;
  /**
  * minion_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#minion_tags AwsHost#minion_tags}
  */
  readonly minionTags?: AwsHostMinionTags[] | cdktf.IResolvable;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#network_interface AwsHost#network_interface}
  */
  readonly networkInterface?: AwsHostNetworkInterface[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#tags AwsHost#tags}
  */
  readonly tags?: AwsHostTags[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#taints AwsHost#taints}
  */
  readonly taints?: AwsHostTaints[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#timeouts AwsHost#timeouts}
  */
  readonly timeouts?: AwsHostTimeouts;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#volume AwsHost#volume}
  */
  readonly volume?: AwsHostVolume[] | cdktf.IResolvable;
}
export interface AwsHostMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#key AwsHost#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#value AwsHost#value}
  */
  readonly value: string;
}

export function awsHostMetadataToTerraform(struct?: AwsHostMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function awsHostMetadataToHclTerraform(struct?: AwsHostMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class AwsHostMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsHostMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsHostMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class AwsHostMetadataList extends cdktf.ComplexList {
  public internalValue? : AwsHostMetadata[] | cdktf.IResolvable

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
  public get(index: number): AwsHostMetadataOutputReference {
    return new AwsHostMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsHostMinionTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#key AwsHost#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#value AwsHost#value}
  */
  readonly value: string;
}

export function awsHostMinionTagsToTerraform(struct?: AwsHostMinionTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function awsHostMinionTagsToHclTerraform(struct?: AwsHostMinionTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class AwsHostMinionTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsHostMinionTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsHostMinionTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class AwsHostMinionTagsList extends cdktf.ComplexList {
  public internalValue? : AwsHostMinionTags[] | cdktf.IResolvable

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
  public get(index: number): AwsHostMinionTagsOutputReference {
    return new AwsHostMinionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsHostNetworkInterfaceMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#key AwsHost#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#value AwsHost#value}
  */
  readonly value: string;
}

export function awsHostNetworkInterfaceMetadataToTerraform(struct?: AwsHostNetworkInterfaceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function awsHostNetworkInterfaceMetadataToHclTerraform(struct?: AwsHostNetworkInterfaceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class AwsHostNetworkInterfaceMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsHostNetworkInterfaceMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsHostNetworkInterfaceMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class AwsHostNetworkInterfaceMetadataList extends cdktf.ComplexList {
  public internalValue? : AwsHostNetworkInterfaceMetadata[] | cdktf.IResolvable

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
  public get(index: number): AwsHostNetworkInterfaceMetadataOutputReference {
    return new AwsHostNetworkInterfaceMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsHostNetworkInterface {
  /**
  * Whether or not to associate a public IP with the newly created ENI.  Cannot be specified if `network_interface_id` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#associate_public_ip AwsHost#associate_public_ip}
  */
  readonly associatePublicIp?: boolean | cdktf.IResolvable;
  /**
  * The device index to pass to AWS for attaching the ENI.  Starts at zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#device_index AwsHost#device_index}
  */
  readonly deviceIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#groups AwsHost#groups}
  */
  readonly groups?: string[];
  /**
  * The ID of an ENI to attach to this host.  Cannot be specified if `subnet_id` or `associate_public_ip` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#network_interface_id AwsHost#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * The ID of a subnet in which to create a new ENI.  Cannot be specified if `network_interface_id` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#subnet_id AwsHost#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#metadata AwsHost#metadata}
  */
  readonly metadata?: AwsHostNetworkInterfaceMetadata[] | cdktf.IResolvable;
}

export function awsHostNetworkInterfaceToTerraform(struct?: AwsHostNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associate_public_ip: cdktf.booleanToTerraform(struct!.associatePublicIp),
    device_index: cdktf.numberToTerraform(struct!.deviceIndex),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    network_interface_id: cdktf.stringToTerraform(struct!.networkInterfaceId),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
    metadata: cdktf.listMapper(awsHostNetworkInterfaceMetadataToTerraform, true)(struct!.metadata),
  }
}


export function awsHostNetworkInterfaceToHclTerraform(struct?: AwsHostNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associate_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.associatePublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_index: {
      value: cdktf.numberToHclTerraform(struct!.deviceIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    network_interface_id: {
      value: cdktf.stringToHclTerraform(struct!.networkInterfaceId),
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
    metadata: {
      value: cdktf.listMapperHcl(awsHostNetworkInterfaceMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "AwsHostNetworkInterfaceMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsHostNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsHostNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatePublicIp = this._associatePublicIp;
    }
    if (this._deviceIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceIndex = this._deviceIndex;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._networkInterfaceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkInterfaceId = this._networkInterfaceId;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsHostNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associatePublicIp = undefined;
      this._deviceIndex = undefined;
      this._groups = undefined;
      this._networkInterfaceId = undefined;
      this._subnetId = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associatePublicIp = value.associatePublicIp;
      this._deviceIndex = value.deviceIndex;
      this._groups = value.groups;
      this._networkInterfaceId = value.networkInterfaceId;
      this._subnetId = value.subnetId;
      this._metadata.internalValue = value.metadata;
    }
  }

  // associate_public_ip - computed: true, optional: true, required: false
  private _associatePublicIp?: boolean | cdktf.IResolvable; 
  public get associatePublicIp() {
    return this.getBooleanAttribute('associate_public_ip');
  }
  public set associatePublicIp(value: boolean | cdktf.IResolvable) {
    this._associatePublicIp = value;
  }
  public resetAssociatePublicIp() {
    this._associatePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatePublicIpInput() {
    return this._associatePublicIp;
  }

  // device_index - computed: true, optional: true, required: false
  private _deviceIndex?: number; 
  public get deviceIndex() {
    return this.getNumberAttribute('device_index');
  }
  public set deviceIndex(value: number) {
    this._deviceIndex = value;
  }
  public resetDeviceIndex() {
    this._deviceIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIndexInput() {
    return this._deviceIndex;
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // network_interface_id - computed: true, optional: true, required: false
  private _networkInterfaceId?: string; 
  public get networkInterfaceId() {
    return this.getStringAttribute('network_interface_id');
  }
  public set networkInterfaceId(value: string) {
    this._networkInterfaceId = value;
  }
  public resetNetworkInterfaceId() {
    this._networkInterfaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceIdInput() {
    return this._networkInterfaceId;
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AwsHostNetworkInterfaceMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AwsHostNetworkInterfaceMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}

export class AwsHostNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : AwsHostNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): AwsHostNetworkInterfaceOutputReference {
    return new AwsHostNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsHostTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#key AwsHost#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#value AwsHost#value}
  */
  readonly value: string;
}

export function awsHostTagsToTerraform(struct?: AwsHostTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function awsHostTagsToHclTerraform(struct?: AwsHostTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
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

export class AwsHostTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsHostTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsHostTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
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

export class AwsHostTagsList extends cdktf.ComplexList {
  public internalValue? : AwsHostTags[] | cdktf.IResolvable

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
  public get(index: number): AwsHostTagsOutputReference {
    return new AwsHostTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsHostTaints {
  /**
  * Update strategy of the node. Effect types <br>      - NoSchedule<br>     - PreferNoSchedule<br>     - NoExecute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#effect AwsHost#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#key AwsHost#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#value AwsHost#value}
  */
  readonly value?: string;
}

export function awsHostTaintsToTerraform(struct?: AwsHostTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function awsHostTaintsToHclTerraform(struct?: AwsHostTaints | cdktf.IResolvable): any {
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

export class AwsHostTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsHostTaints | cdktf.IResolvable | undefined {
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
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsHostTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
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
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: false, required: true
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
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

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class AwsHostTaintsList extends cdktf.ComplexList {
  public internalValue? : AwsHostTaints[] | cdktf.IResolvable

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
  public get(index: number): AwsHostTaintsOutputReference {
    return new AwsHostTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AwsHostTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#create AwsHost#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#delete AwsHost#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#update AwsHost#update}
  */
  readonly update?: string;
}

export function awsHostTimeoutsToTerraform(struct?: AwsHostTimeouts | cdktf.IResolvable): any {
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


export function awsHostTimeoutsToHclTerraform(struct?: AwsHostTimeouts | cdktf.IResolvable): any {
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

export class AwsHostTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AwsHostTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AwsHostTimeouts | cdktf.IResolvable | undefined) {
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
export interface AwsHostVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#iops AwsHost#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#name AwsHost#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#size AwsHost#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#volume_id AwsHost#volume_id}
  */
  readonly volumeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#volume_type AwsHost#volume_type}
  */
  readonly volumeType?: string;
}

export function awsHostVolumeToTerraform(struct?: AwsHostVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    name: cdktf.stringToTerraform(struct!.name),
    size: cdktf.numberToTerraform(struct!.size),
    volume_id: cdktf.stringToTerraform(struct!.volumeId),
    volume_type: cdktf.stringToTerraform(struct!.volumeType),
  }
}


export function awsHostVolumeToHclTerraform(struct?: AwsHostVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size: {
      value: cdktf.numberToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    volume_id: {
      value: cdktf.stringToHclTerraform(struct!.volumeId),
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

export class AwsHostVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AwsHostVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._volumeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeId = this._volumeId;
    }
    if (this._volumeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeType = this._volumeType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsHostVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._name = undefined;
      this._size = undefined;
      this._volumeId = undefined;
      this._volumeType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._name = value.name;
      this._size = value.size;
      this._volumeId = value.volumeId;
      this._volumeType = value.volumeType;
    }
  }

  // iops - computed: true, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // volume_id - computed: true, optional: true, required: false
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

  // volume_type - computed: true, optional: true, required: false
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

export class AwsHostVolumeList extends cdktf.ComplexList {
  public internalValue? : AwsHostVolume[] | cdktf.IResolvable

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
  public get(index: number): AwsHostVolumeOutputReference {
    return new AwsHostVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host duplocloud_aws_host}
*/
export class AwsHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_aws_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsHost to import
  * @param importFromId The id of the existing AwsHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_aws_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/resources/aws_host duplocloud_aws_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsHostConfig
  */
  public constructor(scope: Construct, id: string, config: AwsHostConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_aws_host',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.30',
        providerVersionConstraint: '0.11.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentPlatform = config.agentPlatform;
    this._allocatedPublicIp = config.allocatedPublicIp;
    this._base64UserData = config.base64UserData;
    this._capacity = config.capacity;
    this._cloud = config.cloud;
    this._customNodeLabels = config.customNodeLabels;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._imageId = config.imageId;
    this._isEbsOptimized = config.isEbsOptimized;
    this._isMinion = config.isMinion;
    this._keypairType = config.keypairType;
    this._prependUserData = config.prependUserData;
    this._tenantId = config.tenantId;
    this._userAccount = config.userAccount;
    this._waitUntilConnected = config.waitUntilConnected;
    this._zone = config.zone;
    this._metadata.internalValue = config.metadata;
    this._minionTags.internalValue = config.minionTags;
    this._networkInterface.internalValue = config.networkInterface;
    this._tags.internalValue = config.tags;
    this._taints.internalValue = config.taints;
    this._timeouts.internalValue = config.timeouts;
    this._volume.internalValue = config.volume;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_platform - computed: false, optional: true, required: false
  private _agentPlatform?: number; 
  public get agentPlatform() {
    return this.getNumberAttribute('agent_platform');
  }
  public set agentPlatform(value: number) {
    this._agentPlatform = value;
  }
  public resetAgentPlatform() {
    this._agentPlatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentPlatformInput() {
    return this._agentPlatform;
  }

  // allocated_public_ip - computed: false, optional: true, required: false
  private _allocatedPublicIp?: boolean | cdktf.IResolvable; 
  public get allocatedPublicIp() {
    return this.getBooleanAttribute('allocated_public_ip');
  }
  public set allocatedPublicIp(value: boolean | cdktf.IResolvable) {
    this._allocatedPublicIp = value;
  }
  public resetAllocatedPublicIp() {
    this._allocatedPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocatedPublicIpInput() {
    return this._allocatedPublicIp;
  }

  // base64_user_data - computed: true, optional: true, required: false
  private _base64UserData?: string; 
  public get base64UserData() {
    return this.getStringAttribute('base64_user_data');
  }
  public set base64UserData(value: string) {
    this._base64UserData = value;
  }
  public resetBase64UserData() {
    this._base64UserData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64UserDataInput() {
    return this._base64UserData;
  }

  // capacity - computed: false, optional: false, required: true
  private _capacity?: string; 
  public get capacity() {
    return this.getStringAttribute('capacity');
  }
  public set capacity(value: string) {
    this._capacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get capacityInput() {
    return this._capacity;
  }

  // cloud - computed: false, optional: true, required: false
  private _cloud?: number; 
  public get cloud() {
    return this.getNumberAttribute('cloud');
  }
  public set cloud(value: number) {
    this._cloud = value;
  }
  public resetCloud() {
    this._cloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // custom_node_labels - computed: false, optional: true, required: false
  private _customNodeLabels?: { [key: string]: string }; 
  public get customNodeLabels() {
    return this.getStringMapAttribute('custom_node_labels');
  }
  public set customNodeLabels(value: { [key: string]: string }) {
    this._customNodeLabels = value;
  }
  public resetCustomNodeLabels() {
    this._customNodeLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNodeLabelsInput() {
    return this._customNodeLabels;
  }

  // friendly_name - computed: false, optional: false, required: true
  private _friendlyName?: string; 
  public get friendlyName() {
    return this.getStringAttribute('friendly_name');
  }
  public set friendlyName(value: string) {
    this._friendlyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get friendlyNameInput() {
    return this._friendlyName;
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

  // identity_role - computed: true, optional: false, required: false
  public get identityRole() {
    return this.getStringAttribute('identity_role');
  }

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // initial_base64_user_data - computed: true, optional: false, required: false
  public get initialBase64UserData() {
    return this.getStringAttribute('initial_base64_user_data');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // is_ebs_optimized - computed: false, optional: true, required: false
  private _isEbsOptimized?: boolean | cdktf.IResolvable; 
  public get isEbsOptimized() {
    return this.getBooleanAttribute('is_ebs_optimized');
  }
  public set isEbsOptimized(value: boolean | cdktf.IResolvable) {
    this._isEbsOptimized = value;
  }
  public resetIsEbsOptimized() {
    this._isEbsOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEbsOptimizedInput() {
    return this._isEbsOptimized;
  }

  // is_minion - computed: false, optional: true, required: false
  private _isMinion?: boolean | cdktf.IResolvable; 
  public get isMinion() {
    return this.getBooleanAttribute('is_minion');
  }
  public set isMinion(value: boolean | cdktf.IResolvable) {
    this._isMinion = value;
  }
  public resetIsMinion() {
    this._isMinion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isMinionInput() {
    return this._isMinion;
  }

  // keypair_type - computed: true, optional: true, required: false
  private _keypairType?: number; 
  public get keypairType() {
    return this.getNumberAttribute('keypair_type');
  }
  public set keypairType(value: number) {
    this._keypairType = value;
  }
  public resetKeypairType() {
    this._keypairType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keypairTypeInput() {
    return this._keypairType;
  }

  // prepend_user_data - computed: false, optional: true, required: false
  private _prependUserData?: boolean | cdktf.IResolvable; 
  public get prependUserData() {
    return this.getBooleanAttribute('prepend_user_data');
  }
  public set prependUserData(value: boolean | cdktf.IResolvable) {
    this._prependUserData = value;
  }
  public resetPrependUserData() {
    this._prependUserData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependUserDataInput() {
    return this._prependUserData;
  }

  // private_ip_address - computed: true, optional: false, required: false
  public get privateIpAddress() {
    return this.getStringAttribute('private_ip_address');
  }

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // user_account - computed: true, optional: true, required: false
  private _userAccount?: string; 
  public get userAccount() {
    return this.getStringAttribute('user_account');
  }
  public set userAccount(value: string) {
    this._userAccount = value;
  }
  public resetUserAccount() {
    this._userAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAccountInput() {
    return this._userAccount;
  }

  // wait_until_connected - computed: false, optional: true, required: false
  private _waitUntilConnected?: boolean | cdktf.IResolvable; 
  public get waitUntilConnected() {
    return this.getBooleanAttribute('wait_until_connected');
  }
  public set waitUntilConnected(value: boolean | cdktf.IResolvable) {
    this._waitUntilConnected = value;
  }
  public resetWaitUntilConnected() {
    this._waitUntilConnected = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitUntilConnectedInput() {
    return this._waitUntilConnected;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: number; 
  public get zone() {
    return this.getNumberAttribute('zone');
  }
  public set zone(value: number) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AwsHostMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AwsHostMetadata[] | cdktf.IResolvable) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // minion_tags - computed: false, optional: true, required: false
  private _minionTags = new AwsHostMinionTagsList(this, "minion_tags", false);
  public get minionTags() {
    return this._minionTags;
  }
  public putMinionTags(value: AwsHostMinionTags[] | cdktf.IResolvable) {
    this._minionTags.internalValue = value;
  }
  public resetMinionTags() {
    this._minionTags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minionTagsInput() {
    return this._minionTags.internalValue;
  }

  // network_interface - computed: false, optional: true, required: false
  private _networkInterface = new AwsHostNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: AwsHostNetworkInterface[] | cdktf.IResolvable) {
    this._networkInterface.internalValue = value;
  }
  public resetNetworkInterface() {
    this._networkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInterfaceInput() {
    return this._networkInterface.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new AwsHostTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AwsHostTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // taints - computed: false, optional: true, required: false
  private _taints = new AwsHostTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: AwsHostTaints[] | cdktf.IResolvable) {
    this._taints.internalValue = value;
  }
  public resetTaints() {
    this._taints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taintsInput() {
    return this._taints.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new AwsHostTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AwsHostTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // volume - computed: false, optional: true, required: false
  private _volume = new AwsHostVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: AwsHostVolume[] | cdktf.IResolvable) {
    this._volume.internalValue = value;
  }
  public resetVolume() {
    this._volume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_platform: cdktf.numberToTerraform(this._agentPlatform),
      allocated_public_ip: cdktf.booleanToTerraform(this._allocatedPublicIp),
      base64_user_data: cdktf.stringToTerraform(this._base64UserData),
      capacity: cdktf.stringToTerraform(this._capacity),
      cloud: cdktf.numberToTerraform(this._cloud),
      custom_node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._customNodeLabels),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      is_ebs_optimized: cdktf.booleanToTerraform(this._isEbsOptimized),
      is_minion: cdktf.booleanToTerraform(this._isMinion),
      keypair_type: cdktf.numberToTerraform(this._keypairType),
      prepend_user_data: cdktf.booleanToTerraform(this._prependUserData),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      user_account: cdktf.stringToTerraform(this._userAccount),
      wait_until_connected: cdktf.booleanToTerraform(this._waitUntilConnected),
      zone: cdktf.numberToTerraform(this._zone),
      metadata: cdktf.listMapper(awsHostMetadataToTerraform, true)(this._metadata.internalValue),
      minion_tags: cdktf.listMapper(awsHostMinionTagsToTerraform, true)(this._minionTags.internalValue),
      network_interface: cdktf.listMapper(awsHostNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      tags: cdktf.listMapper(awsHostTagsToTerraform, true)(this._tags.internalValue),
      taints: cdktf.listMapper(awsHostTaintsToTerraform, true)(this._taints.internalValue),
      timeouts: awsHostTimeoutsToTerraform(this._timeouts.internalValue),
      volume: cdktf.listMapper(awsHostVolumeToTerraform, true)(this._volume.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_platform: {
        value: cdktf.numberToHclTerraform(this._agentPlatform),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allocated_public_ip: {
        value: cdktf.booleanToHclTerraform(this._allocatedPublicIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      base64_user_data: {
        value: cdktf.stringToHclTerraform(this._base64UserData),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      capacity: {
        value: cdktf.stringToHclTerraform(this._capacity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud: {
        value: cdktf.numberToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_node_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customNodeLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      friendly_name: {
        value: cdktf.stringToHclTerraform(this._friendlyName),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_ebs_optimized: {
        value: cdktf.booleanToHclTerraform(this._isEbsOptimized),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_minion: {
        value: cdktf.booleanToHclTerraform(this._isMinion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      keypair_type: {
        value: cdktf.numberToHclTerraform(this._keypairType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prepend_user_data: {
        value: cdktf.booleanToHclTerraform(this._prependUserData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_account: {
        value: cdktf.stringToHclTerraform(this._userAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_until_connected: {
        value: cdktf.booleanToHclTerraform(this._waitUntilConnected),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone: {
        value: cdktf.numberToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metadata: {
        value: cdktf.listMapperHcl(awsHostMetadataToHclTerraform, true)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHostMetadataList",
      },
      minion_tags: {
        value: cdktf.listMapperHcl(awsHostMinionTagsToHclTerraform, true)(this._minionTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHostMinionTagsList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(awsHostNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHostNetworkInterfaceList",
      },
      tags: {
        value: cdktf.listMapperHcl(awsHostTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHostTagsList",
      },
      taints: {
        value: cdktf.listMapperHcl(awsHostTaintsToHclTerraform, true)(this._taints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHostTaintsList",
      },
      timeouts: {
        value: awsHostTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AwsHostTimeouts",
      },
      volume: {
        value: cdktf.listMapperHcl(awsHostVolumeToHclTerraform, true)(this._volume.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsHostVolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
