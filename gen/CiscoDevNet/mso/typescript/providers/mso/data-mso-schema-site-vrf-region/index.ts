// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_region
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataMsoSchemaSiteVrfRegionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_region#id DataMsoSchemaSiteVrfRegion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_region#region_name DataMsoSchemaSiteVrfRegion#region_name}
  */
  readonly regionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_region#schema_id DataMsoSchemaSiteVrfRegion#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_region#site_id DataMsoSchemaSiteVrfRegion#site_id}
  */
  readonly siteId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_region#template_name DataMsoSchemaSiteVrfRegion#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_region#vrf_name DataMsoSchemaSiteVrfRegion#vrf_name}
  */
  readonly vrfName: string;
}
export interface DataMsoSchemaSiteVrfRegionCidrSubnet {
}

export function dataMsoSchemaSiteVrfRegionCidrSubnetToTerraform(struct?: DataMsoSchemaSiteVrfRegionCidrSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMsoSchemaSiteVrfRegionCidrSubnetToHclTerraform(struct?: DataMsoSchemaSiteVrfRegionCidrSubnet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMsoSchemaSiteVrfRegionCidrSubnetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMsoSchemaSiteVrfRegionCidrSubnet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsoSchemaSiteVrfRegionCidrSubnet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // subnet_group - computed: true, optional: false, required: false
  public get subnetGroup() {
    return this.getStringAttribute('subnet_group');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }

  // zone - computed: true, optional: false, required: false
  public get zone() {
    return this.getStringAttribute('zone');
  }
}

export class DataMsoSchemaSiteVrfRegionCidrSubnetList extends cdktf.ComplexList {

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
  public get(index: number): DataMsoSchemaSiteVrfRegionCidrSubnetOutputReference {
    return new DataMsoSchemaSiteVrfRegionCidrSubnetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataMsoSchemaSiteVrfRegionCidr {
}

export function dataMsoSchemaSiteVrfRegionCidrToTerraform(struct?: DataMsoSchemaSiteVrfRegionCidr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataMsoSchemaSiteVrfRegionCidrToHclTerraform(struct?: DataMsoSchemaSiteVrfRegionCidr): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataMsoSchemaSiteVrfRegionCidrOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataMsoSchemaSiteVrfRegionCidr | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataMsoSchemaSiteVrfRegionCidr | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cidr_ip - computed: true, optional: false, required: false
  public get cidrIp() {
    return this.getStringAttribute('cidr_ip');
  }

  // primary - computed: true, optional: false, required: false
  public get primary() {
    return this.getBooleanAttribute('primary');
  }

  // subnet - computed: true, optional: false, required: false
  private _subnet = new DataMsoSchemaSiteVrfRegionCidrSubnetList(this, "subnet", false);
  public get subnet() {
    return this._subnet;
  }
}

export class DataMsoSchemaSiteVrfRegionCidrList extends cdktf.ComplexList {

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
  public get(index: number): DataMsoSchemaSiteVrfRegionCidrOutputReference {
    return new DataMsoSchemaSiteVrfRegionCidrOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_region mso_schema_site_vrf_region}
*/
export class DataMsoSchemaSiteVrfRegion extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_site_vrf_region";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataMsoSchemaSiteVrfRegion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataMsoSchemaSiteVrfRegion to import
  * @param importFromId The id of the existing DataMsoSchemaSiteVrfRegion that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_region#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataMsoSchemaSiteVrfRegion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_site_vrf_region", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/data-sources/schema_site_vrf_region mso_schema_site_vrf_region} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataMsoSchemaSiteVrfRegionConfig
  */
  public constructor(scope: Construct, id: string, config: DataMsoSchemaSiteVrfRegionConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_site_vrf_region',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
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
    this._regionName = config.regionName;
    this._schemaId = config.schemaId;
    this._siteId = config.siteId;
    this._templateName = config.templateName;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cidr - computed: true, optional: false, required: false
  private _cidr = new DataMsoSchemaSiteVrfRegionCidrList(this, "cidr", false);
  public get cidr() {
    return this._cidr;
  }

  // hub_network - computed: true, optional: false, required: false
  private _hubNetwork = new cdktf.StringMap(this, "hub_network");
  public get hubNetwork() {
    return this._hubNetwork;
  }

  // hub_network_enable - computed: true, optional: false, required: false
  public get hubNetworkEnable() {
    return this.getBooleanAttribute('hub_network_enable');
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

  // region_name - computed: false, optional: false, required: true
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // vpn_gateway - computed: true, optional: false, required: false
  public get vpnGateway() {
    return this.getBooleanAttribute('vpn_gateway');
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      region_name: cdktf.stringToTerraform(this._regionName),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      site_id: cdktf.stringToTerraform(this._siteId),
      template_name: cdktf.stringToTerraform(this._templateName),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
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
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
