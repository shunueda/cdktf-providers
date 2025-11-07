// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AsgProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The numeric ID of the container agent pool that this host is added to.
  *  - 0: Linux Docker/Native
  * - 	4: None
  * - 5: Docker Windows
  * - 7: EKS Linux
  * - 8: ECS Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#agent_platform AsgProfile#agent_platform}
  */
  readonly agentPlatform?: number;
  /**
  * Whether or not to allocate a public IP. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#allocated_public_ip AsgProfile#allocated_public_ip}
  */
  readonly allocatedPublicIp?: boolean | cdktf.IResolvable;
  /**
  * Base64 encoded EC2 user data to associated with the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#base64_user_data AsgProfile#base64_user_data}
  */
  readonly base64UserData?: string;
  /**
  * Whether or not ASG should leverage duplocloud's scale from 0 feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#can_scale_from_zero AsgProfile#can_scale_from_zero}
  */
  readonly canScaleFromZero?: boolean | cdktf.IResolvable;
  /**
  * The AWS EC2 instance type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#capacity AsgProfile#capacity}
  */
  readonly capacity: string;
  /**
  * The numeric ID of the cloud provider to launch the host in. Defaults to `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#cloud AsgProfile#cloud}
  */
  readonly cloud?: number;
  /**
  * Specify the labels to attach to the nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#custom_node_labels AsgProfile#custom_node_labels}
  */
  readonly customNodeLabels?: { [key: string]: string };
  /**
  * List of metrics to collect for the ASG Specify one or more of the following metrics.`GroupMinSize`,`GroupMaxSize`,`GroupDesiredCapacity`,`GroupInServiceInstances`,`GroupPendingInstances`,`GroupStandbyInstances`,`GroupTerminatingInstances`,`GroupTotalInstances`,`GroupInServiceCapacity`,`GroupPendingCapacity`,`GroupStandbyCapacity`,`GroupTerminatingCapacity`,`GroupTotalCapacity`,`WarmPoolDesiredCapacity`,`WarmPoolWarmedCapacity`,`WarmPoolPendingCapacity`,`WarmPoolTerminatingCapacity`,`WarmPoolTotalCapacity`,`GroupAndWarmPoolDesiredCapacity`,`GroupAndWarmPoolTotalCapacity`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#enabled_metrics AsgProfile#enabled_metrics}
  */
  readonly enabledMetrics?: string[];
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#encrypt_disk AsgProfile#encrypt_disk}
  */
  readonly encryptDisk?: boolean | cdktf.IResolvable;
  /**
  * The short name of the host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#friendly_name AsgProfile#friendly_name}
  */
  readonly friendlyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#id AsgProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The AMI ID to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#image_id AsgProfile#image_id}
  */
  readonly imageId: string;
  /**
  * The number of instances that should be running in the group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#instance_count AsgProfile#instance_count}
  */
  readonly instanceCount?: number;
  /**
  * Whether or not to enable cluster autoscaler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#is_cluster_autoscaled AsgProfile#is_cluster_autoscaled}
  */
  readonly isClusterAutoscaled?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#is_ebs_optimized AsgProfile#is_ebs_optimized}
  */
  readonly isEbsOptimized?: boolean | cdktf.IResolvable;
  /**
  * Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#is_minion AsgProfile#is_minion}
  */
  readonly isMinion?: boolean | cdktf.IResolvable;
  /**
  * The numeric ID of the keypair type being used.Should be one of:
  * 
  *    - `0` : Default
  *    - `1` : RSA (deprecated - some operating systems no longer support it)
  *    - `2` : ED25519
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#keypair_type AsgProfile#keypair_type}
  */
  readonly keypairType?: number;
  /**
  * The maximum size of the Auto Scaling Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#max_instance_count AsgProfile#max_instance_count}
  */
  readonly maxInstanceCount?: number;
  /**
  * Maximum price to pay for a spot instance in dollars per unit hour.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#max_spot_price AsgProfile#max_spot_price}
  */
  readonly maxSpotPrice?: string;
  /**
  * The minimum size of the Auto Scaling Group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#min_instance_count AsgProfile#min_instance_count}
  */
  readonly minInstanceCount?: number;
  /**
  * Bootstrap an EKS host with Duplo's user data, prepending it to custom user data if also provided. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#prepend_user_data AsgProfile#prepend_user_data}
  */
  readonly prependUserData?: boolean | cdktf.IResolvable;
  /**
  * The GUID of the tenant that the host will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#tenant_id AsgProfile#tenant_id}
  */
  readonly tenantId: string;
  /**
  * Whether or not to use spot instances. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#use_spot_instances AsgProfile#use_spot_instances}
  */
  readonly useSpotInstances?: boolean | cdktf.IResolvable;
  /**
  * The name of the tenant that the host will be created in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#user_account AsgProfile#user_account}
  */
  readonly userAccount?: string;
  /**
  * Whether or not to wait until ASG instances to be healthy, after creation. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#wait_for_capacity AsgProfile#wait_for_capacity}
  */
  readonly waitForCapacity?: boolean | cdktf.IResolvable;
  /**
  * The availability zone to launch the host in is expressed as a numeric value ranging from 0 to 3.  Defaults to `0`. For environments on the July 2024 release or earlier, use zone. For environments on releases after July 2024, use zones, as zone has been deprecated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#zone AsgProfile#zone}
  */
  readonly zone?: string;
  /**
  * The multi availability zone to launch the asg in, expressed as a number and starting at 0 - Zone A to 3 - Zone D, based on the infra setup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#zones AsgProfile#zones}
  */
  readonly zones?: number[];
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#metadata AsgProfile#metadata}
  */
  readonly metadata?: AsgProfileMetadata[] | cdktf.IResolvable;
  /**
  * minion_tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#minion_tags AsgProfile#minion_tags}
  */
  readonly minionTags?: AsgProfileMinionTags[] | cdktf.IResolvable;
  /**
  * network_interface block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#network_interface AsgProfile#network_interface}
  */
  readonly networkInterface?: AsgProfileNetworkInterface[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#tags AsgProfile#tags}
  */
  readonly tags?: AsgProfileTags[] | cdktf.IResolvable;
  /**
  * taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#taints AsgProfile#taints}
  */
  readonly taints?: AsgProfileTaints[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#timeouts AsgProfile#timeouts}
  */
  readonly timeouts?: AsgProfileTimeouts;
  /**
  * volume block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#volume AsgProfile#volume}
  */
  readonly volume?: AsgProfileVolume[] | cdktf.IResolvable;
}
export interface AsgProfileMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#key AsgProfile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#value AsgProfile#value}
  */
  readonly value: string;
}

export function asgProfileMetadataToTerraform(struct?: AsgProfileMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function asgProfileMetadataToHclTerraform(struct?: AsgProfileMetadata | cdktf.IResolvable): any {
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

export class AsgProfileMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsgProfileMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AsgProfileMetadata | cdktf.IResolvable | undefined) {
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

export class AsgProfileMetadataList extends cdktf.ComplexList {
  public internalValue? : AsgProfileMetadata[] | cdktf.IResolvable

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
  public get(index: number): AsgProfileMetadataOutputReference {
    return new AsgProfileMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsgProfileMinionTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#key AsgProfile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#value AsgProfile#value}
  */
  readonly value: string;
}

export function asgProfileMinionTagsToTerraform(struct?: AsgProfileMinionTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function asgProfileMinionTagsToHclTerraform(struct?: AsgProfileMinionTags | cdktf.IResolvable): any {
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

export class AsgProfileMinionTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsgProfileMinionTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AsgProfileMinionTags | cdktf.IResolvable | undefined) {
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

export class AsgProfileMinionTagsList extends cdktf.ComplexList {
  public internalValue? : AsgProfileMinionTags[] | cdktf.IResolvable

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
  public get(index: number): AsgProfileMinionTagsOutputReference {
    return new AsgProfileMinionTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsgProfileNetworkInterfaceMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#key AsgProfile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#value AsgProfile#value}
  */
  readonly value: string;
}

export function asgProfileNetworkInterfaceMetadataToTerraform(struct?: AsgProfileNetworkInterfaceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function asgProfileNetworkInterfaceMetadataToHclTerraform(struct?: AsgProfileNetworkInterfaceMetadata | cdktf.IResolvable): any {
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

export class AsgProfileNetworkInterfaceMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsgProfileNetworkInterfaceMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AsgProfileNetworkInterfaceMetadata | cdktf.IResolvable | undefined) {
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

export class AsgProfileNetworkInterfaceMetadataList extends cdktf.ComplexList {
  public internalValue? : AsgProfileNetworkInterfaceMetadata[] | cdktf.IResolvable

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
  public get(index: number): AsgProfileNetworkInterfaceMetadataOutputReference {
    return new AsgProfileNetworkInterfaceMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsgProfileNetworkInterface {
  /**
  * Whether or not to associate a public IP with the newly created ENI.  Cannot be specified if `network_interface_id` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#associate_public_ip AsgProfile#associate_public_ip}
  */
  readonly associatePublicIp?: boolean | cdktf.IResolvable;
  /**
  * The device index to pass to AWS for attaching the ENI.  Starts at zero.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#device_index AsgProfile#device_index}
  */
  readonly deviceIndex?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#groups AsgProfile#groups}
  */
  readonly groups?: string[];
  /**
  * The ID of an ENI to attach to this host.  Cannot be specified if `subnet_id` or `associate_public_ip` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#network_interface_id AsgProfile#network_interface_id}
  */
  readonly networkInterfaceId?: string;
  /**
  * The ID of a subnet in which to create a new ENI.  Cannot be specified if `network_interface_id` is specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#subnet_id AsgProfile#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#metadata AsgProfile#metadata}
  */
  readonly metadata?: AsgProfileNetworkInterfaceMetadata[] | cdktf.IResolvable;
}

export function asgProfileNetworkInterfaceToTerraform(struct?: AsgProfileNetworkInterface | cdktf.IResolvable): any {
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
    metadata: cdktf.listMapper(asgProfileNetworkInterfaceMetadataToTerraform, true)(struct!.metadata),
  }
}


export function asgProfileNetworkInterfaceToHclTerraform(struct?: AsgProfileNetworkInterface | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(asgProfileNetworkInterfaceMetadataToHclTerraform, true)(struct!.metadata),
      isBlock: true,
      type: "list",
      storageClassType: "AsgProfileNetworkInterfaceMetadataList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AsgProfileNetworkInterfaceOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsgProfileNetworkInterface | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AsgProfileNetworkInterface | cdktf.IResolvable | undefined) {
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
  private _metadata = new AsgProfileNetworkInterfaceMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AsgProfileNetworkInterfaceMetadata[] | cdktf.IResolvable) {
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

export class AsgProfileNetworkInterfaceList extends cdktf.ComplexList {
  public internalValue? : AsgProfileNetworkInterface[] | cdktf.IResolvable

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
  public get(index: number): AsgProfileNetworkInterfaceOutputReference {
    return new AsgProfileNetworkInterfaceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsgProfileTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#key AsgProfile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#value AsgProfile#value}
  */
  readonly value: string;
}

export function asgProfileTagsToTerraform(struct?: AsgProfileTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function asgProfileTagsToHclTerraform(struct?: AsgProfileTags | cdktf.IResolvable): any {
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

export class AsgProfileTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsgProfileTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AsgProfileTags | cdktf.IResolvable | undefined) {
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

export class AsgProfileTagsList extends cdktf.ComplexList {
  public internalValue? : AsgProfileTags[] | cdktf.IResolvable

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
  public get(index: number): AsgProfileTagsOutputReference {
    return new AsgProfileTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsgProfileTaints {
  /**
  * Update strategy of the node. Effect types <br>      - NoSchedule<br>     - PreferNoSchedule<br>     - NoExecute
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#effect AsgProfile#effect}
  */
  readonly effect: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#key AsgProfile#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#value AsgProfile#value}
  */
  readonly value?: string;
}

export function asgProfileTaintsToTerraform(struct?: AsgProfileTaints | cdktf.IResolvable): any {
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


export function asgProfileTaintsToHclTerraform(struct?: AsgProfileTaints | cdktf.IResolvable): any {
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

export class AsgProfileTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsgProfileTaints | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AsgProfileTaints | cdktf.IResolvable | undefined) {
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

export class AsgProfileTaintsList extends cdktf.ComplexList {
  public internalValue? : AsgProfileTaints[] | cdktf.IResolvable

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
  public get(index: number): AsgProfileTaintsOutputReference {
    return new AsgProfileTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface AsgProfileTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#create AsgProfile#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#delete AsgProfile#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#update AsgProfile#update}
  */
  readonly update?: string;
}

export function asgProfileTimeoutsToTerraform(struct?: AsgProfileTimeouts | cdktf.IResolvable): any {
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


export function asgProfileTimeoutsToHclTerraform(struct?: AsgProfileTimeouts | cdktf.IResolvable): any {
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

export class AsgProfileTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AsgProfileTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AsgProfileTimeouts | cdktf.IResolvable | undefined) {
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
export interface AsgProfileVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#iops AsgProfile#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#name AsgProfile#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#size AsgProfile#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#volume_id AsgProfile#volume_id}
  */
  readonly volumeId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#volume_type AsgProfile#volume_type}
  */
  readonly volumeType?: string;
}

export function asgProfileVolumeToTerraform(struct?: AsgProfileVolume | cdktf.IResolvable): any {
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


export function asgProfileVolumeToHclTerraform(struct?: AsgProfileVolume | cdktf.IResolvable): any {
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

export class AsgProfileVolumeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AsgProfileVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: AsgProfileVolume | cdktf.IResolvable | undefined) {
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

export class AsgProfileVolumeList extends cdktf.ComplexList {
  public internalValue? : AsgProfileVolume[] | cdktf.IResolvable

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
  public get(index: number): AsgProfileVolumeOutputReference {
    return new AsgProfileVolumeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile duplocloud_asg_profile}
*/
export class AsgProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_asg_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AsgProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AsgProfile to import
  * @param importFromId The id of the existing AsgProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AsgProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_asg_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.28/docs/resources/asg_profile duplocloud_asg_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AsgProfileConfig
  */
  public constructor(scope: Construct, id: string, config: AsgProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_asg_profile',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.28'
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
    this._canScaleFromZero = config.canScaleFromZero;
    this._capacity = config.capacity;
    this._cloud = config.cloud;
    this._customNodeLabels = config.customNodeLabels;
    this._enabledMetrics = config.enabledMetrics;
    this._encryptDisk = config.encryptDisk;
    this._friendlyName = config.friendlyName;
    this._id = config.id;
    this._imageId = config.imageId;
    this._instanceCount = config.instanceCount;
    this._isClusterAutoscaled = config.isClusterAutoscaled;
    this._isEbsOptimized = config.isEbsOptimized;
    this._isMinion = config.isMinion;
    this._keypairType = config.keypairType;
    this._maxInstanceCount = config.maxInstanceCount;
    this._maxSpotPrice = config.maxSpotPrice;
    this._minInstanceCount = config.minInstanceCount;
    this._prependUserData = config.prependUserData;
    this._tenantId = config.tenantId;
    this._useSpotInstances = config.useSpotInstances;
    this._userAccount = config.userAccount;
    this._waitForCapacity = config.waitForCapacity;
    this._zone = config.zone;
    this._zones = config.zones;
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

  // arn - computed: true, optional: false, required: false
  public get arn() {
    return this.getStringAttribute('arn');
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

  // can_scale_from_zero - computed: true, optional: true, required: false
  private _canScaleFromZero?: boolean | cdktf.IResolvable; 
  public get canScaleFromZero() {
    return this.getBooleanAttribute('can_scale_from_zero');
  }
  public set canScaleFromZero(value: boolean | cdktf.IResolvable) {
    this._canScaleFromZero = value;
  }
  public resetCanScaleFromZero() {
    this._canScaleFromZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get canScaleFromZeroInput() {
    return this._canScaleFromZero;
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

  // enabled_metrics - computed: false, optional: true, required: false
  private _enabledMetrics?: string[]; 
  public get enabledMetrics() {
    return this.getListAttribute('enabled_metrics');
  }
  public set enabledMetrics(value: string[]) {
    this._enabledMetrics = value;
  }
  public resetEnabledMetrics() {
    this._enabledMetrics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledMetricsInput() {
    return this._enabledMetrics;
  }

  // encrypt_disk - computed: false, optional: true, required: false
  private _encryptDisk?: boolean | cdktf.IResolvable; 
  public get encryptDisk() {
    return this.getBooleanAttribute('encrypt_disk');
  }
  public set encryptDisk(value: boolean | cdktf.IResolvable) {
    this._encryptDisk = value;
  }
  public resetEncryptDisk() {
    this._encryptDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptDiskInput() {
    return this._encryptDisk;
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

  // fullname - computed: true, optional: false, required: false
  public get fullname() {
    return this.getStringAttribute('fullname');
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

  // instance_count - computed: true, optional: true, required: false
  private _instanceCount?: number; 
  public get instanceCount() {
    return this.getNumberAttribute('instance_count');
  }
  public set instanceCount(value: number) {
    this._instanceCount = value;
  }
  public resetInstanceCount() {
    this._instanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceCountInput() {
    return this._instanceCount;
  }

  // is_cluster_autoscaled - computed: true, optional: true, required: false
  private _isClusterAutoscaled?: boolean | cdktf.IResolvable; 
  public get isClusterAutoscaled() {
    return this.getBooleanAttribute('is_cluster_autoscaled');
  }
  public set isClusterAutoscaled(value: boolean | cdktf.IResolvable) {
    this._isClusterAutoscaled = value;
  }
  public resetIsClusterAutoscaled() {
    this._isClusterAutoscaled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isClusterAutoscaledInput() {
    return this._isClusterAutoscaled;
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

  // max_instance_count - computed: true, optional: true, required: false
  private _maxInstanceCount?: number; 
  public get maxInstanceCount() {
    return this.getNumberAttribute('max_instance_count');
  }
  public set maxInstanceCount(value: number) {
    this._maxInstanceCount = value;
  }
  public resetMaxInstanceCount() {
    this._maxInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxInstanceCountInput() {
    return this._maxInstanceCount;
  }

  // max_spot_price - computed: false, optional: true, required: false
  private _maxSpotPrice?: string; 
  public get maxSpotPrice() {
    return this.getStringAttribute('max_spot_price');
  }
  public set maxSpotPrice(value: string) {
    this._maxSpotPrice = value;
  }
  public resetMaxSpotPrice() {
    this._maxSpotPrice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSpotPriceInput() {
    return this._maxSpotPrice;
  }

  // min_instance_count - computed: true, optional: true, required: false
  private _minInstanceCount?: number; 
  public get minInstanceCount() {
    return this.getNumberAttribute('min_instance_count');
  }
  public set minInstanceCount(value: number) {
    this._minInstanceCount = value;
  }
  public resetMinInstanceCount() {
    this._minInstanceCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minInstanceCountInput() {
    return this._minInstanceCount;
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

  // public_ip_address - computed: true, optional: false, required: false
  public get publicIpAddress() {
    return this.getStringAttribute('public_ip_address');
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

  // use_spot_instances - computed: false, optional: true, required: false
  private _useSpotInstances?: boolean | cdktf.IResolvable; 
  public get useSpotInstances() {
    return this.getBooleanAttribute('use_spot_instances');
  }
  public set useSpotInstances(value: boolean | cdktf.IResolvable) {
    this._useSpotInstances = value;
  }
  public resetUseSpotInstances() {
    this._useSpotInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSpotInstancesInput() {
    return this._useSpotInstances;
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

  // wait_for_capacity - computed: false, optional: true, required: false
  private _waitForCapacity?: boolean | cdktf.IResolvable; 
  public get waitForCapacity() {
    return this.getBooleanAttribute('wait_for_capacity');
  }
  public set waitForCapacity(value: boolean | cdktf.IResolvable) {
    this._waitForCapacity = value;
  }
  public resetWaitForCapacity() {
    this._waitForCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCapacityInput() {
    return this._waitForCapacity;
  }

  // zone - computed: false, optional: true, required: false
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // zones - computed: true, optional: true, required: false
  private _zones?: number[]; 
  public get zones() {
    return this.getNumberListAttribute('zones');
  }
  public set zones(value: number[]) {
    this._zones = value;
  }
  public resetZones() {
    this._zones = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonesInput() {
    return this._zones;
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new AsgProfileMetadataList(this, "metadata", false);
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: AsgProfileMetadata[] | cdktf.IResolvable) {
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
  private _minionTags = new AsgProfileMinionTagsList(this, "minion_tags", false);
  public get minionTags() {
    return this._minionTags;
  }
  public putMinionTags(value: AsgProfileMinionTags[] | cdktf.IResolvable) {
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
  private _networkInterface = new AsgProfileNetworkInterfaceList(this, "network_interface", false);
  public get networkInterface() {
    return this._networkInterface;
  }
  public putNetworkInterface(value: AsgProfileNetworkInterface[] | cdktf.IResolvable) {
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
  private _tags = new AsgProfileTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: AsgProfileTags[] | cdktf.IResolvable) {
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
  private _taints = new AsgProfileTaintsList(this, "taints", false);
  public get taints() {
    return this._taints;
  }
  public putTaints(value: AsgProfileTaints[] | cdktf.IResolvable) {
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
  private _timeouts = new AsgProfileTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: AsgProfileTimeouts) {
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
  private _volume = new AsgProfileVolumeList(this, "volume", false);
  public get volume() {
    return this._volume;
  }
  public putVolume(value: AsgProfileVolume[] | cdktf.IResolvable) {
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
      can_scale_from_zero: cdktf.booleanToTerraform(this._canScaleFromZero),
      capacity: cdktf.stringToTerraform(this._capacity),
      cloud: cdktf.numberToTerraform(this._cloud),
      custom_node_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._customNodeLabels),
      enabled_metrics: cdktf.listMapper(cdktf.stringToTerraform, false)(this._enabledMetrics),
      encrypt_disk: cdktf.booleanToTerraform(this._encryptDisk),
      friendly_name: cdktf.stringToTerraform(this._friendlyName),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      instance_count: cdktf.numberToTerraform(this._instanceCount),
      is_cluster_autoscaled: cdktf.booleanToTerraform(this._isClusterAutoscaled),
      is_ebs_optimized: cdktf.booleanToTerraform(this._isEbsOptimized),
      is_minion: cdktf.booleanToTerraform(this._isMinion),
      keypair_type: cdktf.numberToTerraform(this._keypairType),
      max_instance_count: cdktf.numberToTerraform(this._maxInstanceCount),
      max_spot_price: cdktf.stringToTerraform(this._maxSpotPrice),
      min_instance_count: cdktf.numberToTerraform(this._minInstanceCount),
      prepend_user_data: cdktf.booleanToTerraform(this._prependUserData),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      use_spot_instances: cdktf.booleanToTerraform(this._useSpotInstances),
      user_account: cdktf.stringToTerraform(this._userAccount),
      wait_for_capacity: cdktf.booleanToTerraform(this._waitForCapacity),
      zone: cdktf.stringToTerraform(this._zone),
      zones: cdktf.listMapper(cdktf.numberToTerraform, false)(this._zones),
      metadata: cdktf.listMapper(asgProfileMetadataToTerraform, true)(this._metadata.internalValue),
      minion_tags: cdktf.listMapper(asgProfileMinionTagsToTerraform, true)(this._minionTags.internalValue),
      network_interface: cdktf.listMapper(asgProfileNetworkInterfaceToTerraform, true)(this._networkInterface.internalValue),
      tags: cdktf.listMapper(asgProfileTagsToTerraform, true)(this._tags.internalValue),
      taints: cdktf.listMapper(asgProfileTaintsToTerraform, true)(this._taints.internalValue),
      timeouts: asgProfileTimeoutsToTerraform(this._timeouts.internalValue),
      volume: cdktf.listMapper(asgProfileVolumeToTerraform, true)(this._volume.internalValue),
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
      can_scale_from_zero: {
        value: cdktf.booleanToHclTerraform(this._canScaleFromZero),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      enabled_metrics: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._enabledMetrics),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      encrypt_disk: {
        value: cdktf.booleanToHclTerraform(this._encryptDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      instance_count: {
        value: cdktf.numberToHclTerraform(this._instanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_cluster_autoscaled: {
        value: cdktf.booleanToHclTerraform(this._isClusterAutoscaled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      max_instance_count: {
        value: cdktf.numberToHclTerraform(this._maxInstanceCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_spot_price: {
        value: cdktf.stringToHclTerraform(this._maxSpotPrice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_instance_count: {
        value: cdktf.numberToHclTerraform(this._minInstanceCount),
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
      use_spot_instances: {
        value: cdktf.booleanToHclTerraform(this._useSpotInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_account: {
        value: cdktf.stringToHclTerraform(this._userAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_capacity: {
        value: cdktf.booleanToHclTerraform(this._waitForCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zones: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._zones),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      metadata: {
        value: cdktf.listMapperHcl(asgProfileMetadataToHclTerraform, true)(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsgProfileMetadataList",
      },
      minion_tags: {
        value: cdktf.listMapperHcl(asgProfileMinionTagsToHclTerraform, true)(this._minionTags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsgProfileMinionTagsList",
      },
      network_interface: {
        value: cdktf.listMapperHcl(asgProfileNetworkInterfaceToHclTerraform, true)(this._networkInterface.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsgProfileNetworkInterfaceList",
      },
      tags: {
        value: cdktf.listMapperHcl(asgProfileTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsgProfileTagsList",
      },
      taints: {
        value: cdktf.listMapperHcl(asgProfileTaintsToHclTerraform, true)(this._taints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsgProfileTaintsList",
      },
      timeouts: {
        value: asgProfileTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AsgProfileTimeouts",
      },
      volume: {
        value: cdktf.listMapperHcl(asgProfileVolumeToHclTerraform, true)(this._volume.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AsgProfileVolumeList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
