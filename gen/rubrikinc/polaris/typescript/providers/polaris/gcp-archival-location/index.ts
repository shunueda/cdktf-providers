// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/gcp_archival_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcpArchivalLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * GCP bucket labels. Each label will be added to the GCP bucket created by RSC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/gcp_archival_location#bucket_labels GcpArchivalLocation#bucket_labels}
  */
  readonly bucketLabels?: { [key: string]: string };
  /**
  * GCP bucket prefix. The prefix cannot be longer than 19 characters. Note that `rubrik-` will always be prepended to the prefix. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/gcp_archival_location#bucket_prefix GcpArchivalLocation#bucket_prefix}
  */
  readonly bucketPrefix: string;
  /**
  * RSC cloud account ID (UUID). Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/gcp_archival_location#cloud_account_id GcpArchivalLocation#cloud_account_id}
  */
  readonly cloudAccountId: string;
  /**
  * Name of the cloud native archival location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/gcp_archival_location#name GcpArchivalLocation#name}
  */
  readonly name: string;
  /**
  * GCP region to store the snapshots in (`SPECIFIC_REGION`). If not specified, the snapshots will be stored in the same region as the workload (`SOURCE_REGION`). Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/gcp_archival_location#region GcpArchivalLocation#region}
  */
  readonly region?: string;
  /**
  * AWS bucket storage class. Possible values are `ARCHIVE`, `COLDLINE`, `NEARLINE`, `STANDARD` and `DURABLE_REDUCED_AVAILABILITY`. Default value is `STANDARD`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/gcp_archival_location#storage_class GcpArchivalLocation#storage_class}
  */
  readonly storageClass?: string;
  /**
  * customer_managed_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/gcp_archival_location#customer_managed_key GcpArchivalLocation#customer_managed_key}
  */
  readonly customerManagedKey?: GcpArchivalLocationCustomerManagedKey[] | cdktf.IResolvable;
}
export interface GcpArchivalLocationCustomerManagedKey {
  /**
  * Key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/gcp_archival_location#name GcpArchivalLocation#name}
  */
  readonly name: string;
  /**
  * The region in which the key will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/gcp_archival_location#region GcpArchivalLocation#region}
  */
  readonly region: string;
  /**
  * Key ring name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/gcp_archival_location#ring_name GcpArchivalLocation#ring_name}
  */
  readonly ringName: string;
}

export function gcpArchivalLocationCustomerManagedKeyToTerraform(struct?: GcpArchivalLocationCustomerManagedKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    region: cdktf.stringToTerraform(struct!.region),
    ring_name: cdktf.stringToTerraform(struct!.ringName),
  }
}


export function gcpArchivalLocationCustomerManagedKeyToHclTerraform(struct?: GcpArchivalLocationCustomerManagedKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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
    ring_name: {
      value: cdktf.stringToHclTerraform(struct!.ringName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GcpArchivalLocationCustomerManagedKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GcpArchivalLocationCustomerManagedKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._ringName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ringName = this._ringName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GcpArchivalLocationCustomerManagedKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._region = undefined;
      this._ringName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._region = value.region;
      this._ringName = value.ringName;
    }
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

  // ring_name - computed: false, optional: false, required: true
  private _ringName?: string; 
  public get ringName() {
    return this.getStringAttribute('ring_name');
  }
  public set ringName(value: string) {
    this._ringName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ringNameInput() {
    return this._ringName;
  }
}

export class GcpArchivalLocationCustomerManagedKeyList extends cdktf.ComplexList {
  public internalValue? : GcpArchivalLocationCustomerManagedKey[] | cdktf.IResolvable

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
  public get(index: number): GcpArchivalLocationCustomerManagedKeyOutputReference {
    return new GcpArchivalLocationCustomerManagedKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/gcp_archival_location polaris_gcp_archival_location}
*/
export class GcpArchivalLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_gcp_archival_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcpArchivalLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcpArchivalLocation to import
  * @param importFromId The id of the existing GcpArchivalLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/gcp_archival_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcpArchivalLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_gcp_archival_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/gcp_archival_location polaris_gcp_archival_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcpArchivalLocationConfig
  */
  public constructor(scope: Construct, id: string, config: GcpArchivalLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_gcp_archival_location',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketLabels = config.bucketLabels;
    this._bucketPrefix = config.bucketPrefix;
    this._cloudAccountId = config.cloudAccountId;
    this._name = config.name;
    this._region = config.region;
    this._storageClass = config.storageClass;
    this._customerManagedKey.internalValue = config.customerManagedKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_labels - computed: false, optional: true, required: false
  private _bucketLabels?: { [key: string]: string }; 
  public get bucketLabels() {
    return this.getStringMapAttribute('bucket_labels');
  }
  public set bucketLabels(value: { [key: string]: string }) {
    this._bucketLabels = value;
  }
  public resetBucketLabels() {
    this._bucketLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketLabelsInput() {
    return this._bucketLabels;
  }

  // bucket_prefix - computed: false, optional: false, required: true
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // cloud_account_id - computed: false, optional: false, required: true
  private _cloudAccountId?: string; 
  public get cloudAccountId() {
    return this.getStringAttribute('cloud_account_id');
  }
  public set cloudAccountId(value: string) {
    this._cloudAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountIdInput() {
    return this._cloudAccountId;
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location_template - computed: true, optional: false, required: false
  public get locationTemplate() {
    return this.getStringAttribute('location_template');
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

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // customer_managed_key - computed: false, optional: true, required: false
  private _customerManagedKey = new GcpArchivalLocationCustomerManagedKeyList(this, "customer_managed_key", true);
  public get customerManagedKey() {
    return this._customerManagedKey;
  }
  public putCustomerManagedKey(value: GcpArchivalLocationCustomerManagedKey[] | cdktf.IResolvable) {
    this._customerManagedKey.internalValue = value;
  }
  public resetCustomerManagedKey() {
    this._customerManagedKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerManagedKeyInput() {
    return this._customerManagedKey.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._bucketLabels),
      bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
      cloud_account_id: cdktf.stringToTerraform(this._cloudAccountId),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      storage_class: cdktf.stringToTerraform(this._storageClass),
      customer_managed_key: cdktf.listMapper(gcpArchivalLocationCustomerManagedKeyToTerraform, true)(this._customerManagedKey.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._bucketLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      bucket_prefix: {
        value: cdktf.stringToHclTerraform(this._bucketPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_account_id: {
        value: cdktf.stringToHclTerraform(this._cloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_class: {
        value: cdktf.stringToHclTerraform(this._storageClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customer_managed_key: {
        value: cdktf.listMapperHcl(gcpArchivalLocationCustomerManagedKeyToHclTerraform, true)(this._customerManagedKey.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "GcpArchivalLocationCustomerManagedKeyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
