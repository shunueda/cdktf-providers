// https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/loadbalancerv2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGcoreLoadbalancerv2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/loadbalancerv2#id DataGcoreLoadbalancerv2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metadata string of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/loadbalancerv2#metadata_k DataGcoreLoadbalancerv2#metadata_k}
  */
  readonly metadataK?: string;
  /**
  * Metadata map of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/loadbalancerv2#metadata_kv DataGcoreLoadbalancerv2#metadata_kv}
  */
  readonly metadataKv?: { [key: string]: string };
  /**
  * Name of the load balancer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/loadbalancerv2#name DataGcoreLoadbalancerv2#name}
  */
  readonly name: string;
  /**
  * ID of the project in which load balancer was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/loadbalancerv2#project_id DataGcoreLoadbalancerv2#project_id}
  */
  readonly projectId?: number;
  /**
  * Name of the project in which load balancer was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/loadbalancerv2#project_name DataGcoreLoadbalancerv2#project_name}
  */
  readonly projectName?: string;
  /**
  * ID of the region in which load balancer was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/loadbalancerv2#region_id DataGcoreLoadbalancerv2#region_id}
  */
  readonly regionId?: number;
  /**
  * Name of the region in which load balancer was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/loadbalancerv2#region_name DataGcoreLoadbalancerv2#region_name}
  */
  readonly regionName?: string;
  /**
  * Available values are 'ipv4', 'ipv6', 'dual'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/loadbalancerv2#vip_ip_family DataGcoreLoadbalancerv2#vip_ip_family}
  */
  readonly vipIpFamily?: string;
}
export interface DataGcoreLoadbalancerv2AdditionalVips {
}

export function dataGcoreLoadbalancerv2AdditionalVipsToTerraform(struct?: DataGcoreLoadbalancerv2AdditionalVips): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGcoreLoadbalancerv2AdditionalVipsToHclTerraform(struct?: DataGcoreLoadbalancerv2AdditionalVips): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGcoreLoadbalancerv2AdditionalVipsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGcoreLoadbalancerv2AdditionalVips | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGcoreLoadbalancerv2AdditionalVips | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataGcoreLoadbalancerv2AdditionalVipsList extends cdktf.ComplexList {

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
  public get(index: number): DataGcoreLoadbalancerv2AdditionalVipsOutputReference {
    return new DataGcoreLoadbalancerv2AdditionalVipsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGcoreLoadbalancerv2MetadataReadOnly {
}

export function dataGcoreLoadbalancerv2MetadataReadOnlyToTerraform(struct?: DataGcoreLoadbalancerv2MetadataReadOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGcoreLoadbalancerv2MetadataReadOnlyToHclTerraform(struct?: DataGcoreLoadbalancerv2MetadataReadOnly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGcoreLoadbalancerv2MetadataReadOnlyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGcoreLoadbalancerv2MetadataReadOnly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGcoreLoadbalancerv2MetadataReadOnly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // read_only - computed: true, optional: false, required: false
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataGcoreLoadbalancerv2MetadataReadOnlyList extends cdktf.ComplexList {

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
  public get(index: number): DataGcoreLoadbalancerv2MetadataReadOnlyOutputReference {
    return new DataGcoreLoadbalancerv2MetadataReadOnlyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataGcoreLoadbalancerv2VrrpIps {
}

export function dataGcoreLoadbalancerv2VrrpIpsToTerraform(struct?: DataGcoreLoadbalancerv2VrrpIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataGcoreLoadbalancerv2VrrpIpsToHclTerraform(struct?: DataGcoreLoadbalancerv2VrrpIps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataGcoreLoadbalancerv2VrrpIpsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGcoreLoadbalancerv2VrrpIps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataGcoreLoadbalancerv2VrrpIps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataGcoreLoadbalancerv2VrrpIpsList extends cdktf.ComplexList {

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
  public get(index: number): DataGcoreLoadbalancerv2VrrpIpsOutputReference {
    return new DataGcoreLoadbalancerv2VrrpIpsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/loadbalancerv2 gcore_loadbalancerv2}
*/
export class DataGcoreLoadbalancerv2 extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_loadbalancerv2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGcoreLoadbalancerv2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGcoreLoadbalancerv2 to import
  * @param importFromId The id of the existing DataGcoreLoadbalancerv2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/loadbalancerv2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGcoreLoadbalancerv2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_loadbalancerv2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.31.4/docs/data-sources/loadbalancerv2 gcore_loadbalancerv2} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGcoreLoadbalancerv2Config
  */
  public constructor(scope: Construct, id: string, config: DataGcoreLoadbalancerv2Config) {
    super(scope, id, {
      terraformResourceType: 'gcore_loadbalancerv2',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.31.4',
        providerVersionConstraint: '0.31.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._metadataK = config.metadataK;
    this._metadataKv = config.metadataKv;
    this._name = config.name;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._vipIpFamily = config.vipIpFamily;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_vips - computed: true, optional: false, required: false
  private _additionalVips = new DataGcoreLoadbalancerv2AdditionalVipsList(this, "additional_vips", false);
  public get additionalVips() {
    return this._additionalVips;
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

  // metadata_k - computed: false, optional: true, required: false
  private _metadataK?: string; 
  public get metadataK() {
    return this.getStringAttribute('metadata_k');
  }
  public set metadataK(value: string) {
    this._metadataK = value;
  }
  public resetMetadataK() {
    this._metadataK = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKInput() {
    return this._metadataK;
  }

  // metadata_kv - computed: false, optional: true, required: false
  private _metadataKv?: { [key: string]: string }; 
  public get metadataKv() {
    return this.getStringMapAttribute('metadata_kv');
  }
  public set metadataKv(value: { [key: string]: string }) {
    this._metadataKv = value;
  }
  public resetMetadataKv() {
    this._metadataKv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataKvInput() {
    return this._metadataKv;
  }

  // metadata_read_only - computed: true, optional: false, required: false
  private _metadataReadOnly = new DataGcoreLoadbalancerv2MetadataReadOnlyList(this, "metadata_read_only", false);
  public get metadataReadOnly() {
    return this._metadataReadOnly;
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

  // preferred_connectivity - computed: true, optional: false, required: false
  public get preferredConnectivity() {
    return this.getStringAttribute('preferred_connectivity');
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // vip_address - computed: true, optional: false, required: false
  public get vipAddress() {
    return this.getStringAttribute('vip_address');
  }

  // vip_ip_family - computed: true, optional: true, required: false
  private _vipIpFamily?: string; 
  public get vipIpFamily() {
    return this.getStringAttribute('vip_ip_family');
  }
  public set vipIpFamily(value: string) {
    this._vipIpFamily = value;
  }
  public resetVipIpFamily() {
    this._vipIpFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipIpFamilyInput() {
    return this._vipIpFamily;
  }

  // vip_port_id - computed: true, optional: false, required: false
  public get vipPortId() {
    return this.getStringAttribute('vip_port_id');
  }

  // vrrp_ips - computed: true, optional: false, required: false
  private _vrrpIps = new DataGcoreLoadbalancerv2VrrpIpsList(this, "vrrp_ips", false);
  public get vrrpIps() {
    return this._vrrpIps;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metadata_k: cdktf.stringToTerraform(this._metadataK),
      metadata_kv: cdktf.hashMapper(cdktf.stringToTerraform)(this._metadataKv),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      vip_ip_family: cdktf.stringToTerraform(this._vipIpFamily),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_k: {
        value: cdktf.stringToHclTerraform(this._metadataK),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata_kv: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._metadataKv),
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
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vip_ip_family: {
        value: cdktf.stringToHclTerraform(this._vipIpFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
