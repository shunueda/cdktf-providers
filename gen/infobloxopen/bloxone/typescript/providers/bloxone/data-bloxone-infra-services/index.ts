// https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBloxoneInfraServicesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter are used to return a more specific list of results. Filters can be used to match resources by specific attributes, e.g. name. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#filters DataBloxoneInfraServices#filters}
  */
  readonly filters?: { [key: string]: string };
  /**
  * Tag Filters are used to return a more specific list of results filtered by tags. If you specify multiple filters, the results returned will have only resources that match all the specified filters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#tag_filters DataBloxoneInfraServices#tag_filters}
  */
  readonly tagFilters?: { [key: string]: string };
}
export interface DataBloxoneInfraServicesResultsConfigs {
  /**
  * The current version of the Service deployed on the Host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#current_version DataBloxoneInfraServices#current_version}
  */
  readonly currentVersion?: string;
  /**
  * The field to carry any extra data specific to this configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#extra_data DataBloxoneInfraServices#extra_data}
  */
  readonly extraData?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#host_id DataBloxoneInfraServices#host_id}
  */
  readonly hostId?: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#service_id DataBloxoneInfraServices#service_id}
  */
  readonly serviceId?: string;
  /**
  * The type of the Service deployed on the Host (`dns`, `cdc`, etc.). The following is a list of the different Services and their string types (the string types are to be used with the APIs for the `service_type` field):
  * 
  *   | Service name | Service type | 
  *   | ------ | ------ | 
  *   | Access Authentication | authn | 
  *   | Anycast | anycast | 
  *   | Data Connector | cdc | 
  *   | DHCP | dhcp | 
  *   | DNS | dns | 
  *   | DNS Forwarding Proxy | dfp | 
  *   | NIOS Grid Connector | orpheus | 
  *   | MS AD Sync | msad | 
  *   | NTP | ntp | 
  *   | BGP | bgp | 
  *   | RIP | rip | 
  *   | OSPF | ospf | 
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#service_type DataBloxoneInfraServices#service_type}
  */
  readonly serviceType?: string;
  /**
  * The timestamp of the latest upgrade of the Host-specific Service configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#upgraded_at DataBloxoneInfraServices#upgraded_at}
  */
  readonly upgradedAt?: string;
}

export function dataBloxoneInfraServicesResultsConfigsToTerraform(struct?: DataBloxoneInfraServicesResultsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_version: cdktf.stringToTerraform(struct!.currentVersion),
    extra_data: cdktf.stringToTerraform(struct!.extraData),
    host_id: cdktf.stringToTerraform(struct!.hostId),
    service_id: cdktf.stringToTerraform(struct!.serviceId),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    upgraded_at: cdktf.stringToTerraform(struct!.upgradedAt),
  }
}


export function dataBloxoneInfraServicesResultsConfigsToHclTerraform(struct?: DataBloxoneInfraServicesResultsConfigs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_version: {
      value: cdktf.stringToHclTerraform(struct!.currentVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_data: {
      value: cdktf.stringToHclTerraform(struct!.extraData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host_id: {
      value: cdktf.stringToHclTerraform(struct!.hostId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_id: {
      value: cdktf.stringToHclTerraform(struct!.serviceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgraded_at: {
      value: cdktf.stringToHclTerraform(struct!.upgradedAt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneInfraServicesResultsConfigsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBloxoneInfraServicesResultsConfigs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentVersion = this._currentVersion;
    }
    if (this._extraData !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraData = this._extraData;
    }
    if (this._hostId !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostId = this._hostId;
    }
    if (this._serviceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceId = this._serviceId;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._upgradedAt !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradedAt = this._upgradedAt;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneInfraServicesResultsConfigs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currentVersion = undefined;
      this._extraData = undefined;
      this._hostId = undefined;
      this._serviceId = undefined;
      this._serviceType = undefined;
      this._upgradedAt = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currentVersion = value.currentVersion;
      this._extraData = value.extraData;
      this._hostId = value.hostId;
      this._serviceId = value.serviceId;
      this._serviceType = value.serviceType;
      this._upgradedAt = value.upgradedAt;
    }
  }

  // current_version - computed: true, optional: true, required: false
  private _currentVersion?: string; 
  public get currentVersion() {
    return this.getStringAttribute('current_version');
  }
  public set currentVersion(value: string) {
    this._currentVersion = value;
  }
  public resetCurrentVersion() {
    this._currentVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentVersionInput() {
    return this._currentVersion;
  }

  // extra_data - computed: true, optional: true, required: false
  private _extraData?: string; 
  public get extraData() {
    return this.getStringAttribute('extra_data');
  }
  public set extraData(value: string) {
    this._extraData = value;
  }
  public resetExtraData() {
    this._extraData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraDataInput() {
    return this._extraData;
  }

  // host_id - computed: true, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_id - computed: true, optional: true, required: false
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // service_type - computed: true, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // upgraded_at - computed: true, optional: true, required: false
  private _upgradedAt?: string; 
  public get upgradedAt() {
    return this.getStringAttribute('upgraded_at');
  }
  public set upgradedAt(value: string) {
    this._upgradedAt = value;
  }
  public resetUpgradedAt() {
    this._upgradedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradedAtInput() {
    return this._upgradedAt;
  }
}

export class DataBloxoneInfraServicesResultsConfigsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneInfraServicesResultsConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneInfraServicesResultsConfigsOutputReference {
    return new DataBloxoneInfraServicesResultsConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataBloxoneInfraServicesResults {
  /**
  * The description of the Service (optional).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#description DataBloxoneInfraServices#description}
  */
  readonly description?: string;
  /**
  * The desired state of the Service. Should either be `"start"` or `"stop"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#desired_state DataBloxoneInfraServices#desired_state}
  */
  readonly desiredState?: string;
  /**
  * The desired version of the Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#desired_version DataBloxoneInfraServices#desired_version}
  */
  readonly desiredVersion?: string;
  /**
  * List of interfaces on which this Service can operate. Note: The list can contain custom interface labels (Example: `["WAN","LAN","label1","label2"]`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#interface_labels DataBloxoneInfraServices#interface_labels}
  */
  readonly interfaceLabels?: string[];
  /**
  * The name of the Service (unique).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#name DataBloxoneInfraServices#name}
  */
  readonly name: string;
  /**
  * The resource identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#pool_id DataBloxoneInfraServices#pool_id}
  */
  readonly poolId: string;
  /**
  * The type of the Service deployed on the Host (`dns`, `cdc`, etc.). The following is a list of the different Services and their string types (the string types are to be used with the APIs for the `service_type` field):
  * 
  *   | Service name          | Service type | 
  *   | --------------------- | ------------ | 
  *   | Access Authentication | authn        | 
  *   | Anycast               | anycast      | 
  *   | Data Connector        | cdc          | 
  *   | DHCP                  | dhcp         | 
  *   | DNS                   | dns          | 
  *   | DNS Forwarding Proxy  | dfp          | 
  *   | NIOS Grid Connector   | orpheus      | 
  *   | MS AD Sync            | msad         | 
  *   | NTP                   | ntp          | 
  *   | BGP                   | bgp          | 
  *   | RIP                   | rip          | 
  *   | OSPF                  | ospf         | 
  *   <br>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#service_type DataBloxoneInfraServices#service_type}
  */
  readonly serviceType: string;
  /**
  * Tags associated with this Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#tags DataBloxoneInfraServices#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataBloxoneInfraServicesResultsToTerraform(struct?: DataBloxoneInfraServicesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    desired_state: cdktf.stringToTerraform(struct!.desiredState),
    desired_version: cdktf.stringToTerraform(struct!.desiredVersion),
    interface_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.interfaceLabels),
    name: cdktf.stringToTerraform(struct!.name),
    pool_id: cdktf.stringToTerraform(struct!.poolId),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataBloxoneInfraServicesResultsToHclTerraform(struct?: DataBloxoneInfraServicesResults): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desired_state: {
      value: cdktf.stringToHclTerraform(struct!.desiredState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desired_version: {
      value: cdktf.stringToHclTerraform(struct!.desiredVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.interfaceLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pool_id: {
      value: cdktf.stringToHclTerraform(struct!.poolId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataBloxoneInfraServicesResultsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataBloxoneInfraServicesResults | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._desiredState !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredState = this._desiredState;
    }
    if (this._desiredVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredVersion = this._desiredVersion;
    }
    if (this._interfaceLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceLabels = this._interfaceLabels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._poolId !== undefined) {
      hasAnyValues = true;
      internalValueResult.poolId = this._poolId;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataBloxoneInfraServicesResults | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._description = undefined;
      this._desiredState = undefined;
      this._desiredVersion = undefined;
      this._interfaceLabels = undefined;
      this._name = undefined;
      this._poolId = undefined;
      this._serviceType = undefined;
      this._tags = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._description = value.description;
      this._desiredState = value.desiredState;
      this._desiredVersion = value.desiredVersion;
      this._interfaceLabels = value.interfaceLabels;
      this._name = value.name;
      this._poolId = value.poolId;
      this._serviceType = value.serviceType;
      this._tags = value.tags;
    }
  }

  // configs - computed: true, optional: false, required: false
  private _configs = new DataBloxoneInfraServicesResultsConfigsList(this, "configs", false);
  public get configs() {
    return this._configs;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: true, required: false
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

  // desired_state - computed: true, optional: true, required: false
  private _desiredState?: string; 
  public get desiredState() {
    return this.getStringAttribute('desired_state');
  }
  public set desiredState(value: string) {
    this._desiredState = value;
  }
  public resetDesiredState() {
    this._desiredState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredStateInput() {
    return this._desiredState;
  }

  // desired_version - computed: true, optional: true, required: false
  private _desiredVersion?: string; 
  public get desiredVersion() {
    return this.getStringAttribute('desired_version');
  }
  public set desiredVersion(value: string) {
    this._desiredVersion = value;
  }
  public resetDesiredVersion() {
    this._desiredVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredVersionInput() {
    return this._desiredVersion;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_labels - computed: true, optional: true, required: false
  private _interfaceLabels?: string[]; 
  public get interfaceLabels() {
    return this.getListAttribute('interface_labels');
  }
  public set interfaceLabels(value: string[]) {
    this._interfaceLabels = value;
  }
  public resetInterfaceLabels() {
    this._interfaceLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceLabelsInput() {
    return this._interfaceLabels;
  }

  // name - computed: true, optional: false, required: true
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

  // pool_id - computed: true, optional: false, required: true
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // service_type - computed: true, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tags_all - computed: true, optional: false, required: false
  private _tagsAll = new cdktf.StringMap(this, "tags_all");
  public get tagsAll() {
    return this._tagsAll;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
}

export class DataBloxoneInfraServicesResultsList extends cdktf.ComplexList {
  public internalValue? : DataBloxoneInfraServicesResults[] | cdktf.IResolvable

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
  public get(index: number): DataBloxoneInfraServicesResultsOutputReference {
    return new DataBloxoneInfraServicesResultsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services bloxone_infra_services}
*/
export class DataBloxoneInfraServices extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bloxone_infra_services";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBloxoneInfraServices resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBloxoneInfraServices to import
  * @param importFromId The id of the existing DataBloxoneInfraServices that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBloxoneInfraServices to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bloxone_infra_services", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/bloxone/1.5.3/docs/data-sources/infra_services bloxone_infra_services} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBloxoneInfraServicesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBloxoneInfraServicesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bloxone_infra_services',
      terraformGeneratorMetadata: {
        providerName: 'bloxone',
        providerVersion: '1.5.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filters = config.filters;
    this._tagFilters = config.tagFilters;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filters - computed: false, optional: true, required: false
  private _filters?: { [key: string]: string }; 
  public get filters() {
    return this.getStringMapAttribute('filters');
  }
  public set filters(value: { [key: string]: string }) {
    this._filters = value;
  }
  public resetFilters() {
    this._filters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filtersInput() {
    return this._filters;
  }

  // results - computed: true, optional: false, required: false
  private _results = new DataBloxoneInfraServicesResultsList(this, "results", false);
  public get results() {
    return this._results;
  }

  // tag_filters - computed: false, optional: true, required: false
  private _tagFilters?: { [key: string]: string }; 
  public get tagFilters() {
    return this.getStringMapAttribute('tag_filters');
  }
  public set tagFilters(value: { [key: string]: string }) {
    this._tagFilters = value;
  }
  public resetTagFilters() {
    this._tagFilters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagFiltersInput() {
    return this._tagFilters;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._filters),
      tag_filters: cdktf.hashMapper(cdktf.stringToTerraform)(this._tagFilters),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      tag_filters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tagFilters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
