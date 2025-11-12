// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciCloudContextProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud context access policy type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#access_policy_type DataAciCloudContextProfile#access_policy_type}
  */
  readonly accessPolicyType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#annotation DataAciCloudContextProfile#annotation}
  */
  readonly annotation?: string;
  /**
  * Import Brownfield Virtual Network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#cloud_brownfield DataAciCloudContextProfile#cloud_brownfield}
  */
  readonly cloudBrownfield?: string;
  /**
  * Name of the vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#cloud_vendor DataAciCloudContextProfile#cloud_vendor}
  */
  readonly cloudVendor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#description DataAciCloudContextProfile#description}
  */
  readonly description?: string;
  /**
  * hub network to enable transit gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#hub_network DataAciCloudContextProfile#hub_network}
  */
  readonly hubNetwork?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#id DataAciCloudContextProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#name DataAciCloudContextProfile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#name_alias DataAciCloudContextProfile#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Primary CIDR block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#primary_cidr DataAciCloudContextProfile#primary_cidr}
  */
  readonly primaryCidr?: string;
  /**
  * region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#region DataAciCloudContextProfile#region}
  */
  readonly region?: string;
  /**
  * Create relation to cloudAwsFlowLogPol
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#relation_cloud_rs_ctx_to_flow_log DataAciCloudContextProfile#relation_cloud_rs_ctx_to_flow_log}
  */
  readonly relationCloudRsCtxToFlowLog?: string;
  /**
  * Create relation to fvCtx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#relation_cloud_rs_to_ctx DataAciCloudContextProfile#relation_cloud_rs_to_ctx}
  */
  readonly relationCloudRsToCtx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#tenant_dn DataAciCloudContextProfile#tenant_dn}
  */
  readonly tenantDn: string;
  /**
  * component type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#type DataAciCloudContextProfile#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile aci_cloud_context_profile}
*/
export class DataAciCloudContextProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_cloud_context_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciCloudContextProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciCloudContextProfile to import
  * @param importFromId The id of the existing DataAciCloudContextProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciCloudContextProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_cloud_context_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/cloud_context_profile aci_cloud_context_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciCloudContextProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciCloudContextProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_cloud_context_profile',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessPolicyType = config.accessPolicyType;
    this._annotation = config.annotation;
    this._cloudBrownfield = config.cloudBrownfield;
    this._cloudVendor = config.cloudVendor;
    this._description = config.description;
    this._hubNetwork = config.hubNetwork;
    this._id = config.id;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._primaryCidr = config.primaryCidr;
    this._region = config.region;
    this._relationCloudRsCtxToFlowLog = config.relationCloudRsCtxToFlowLog;
    this._relationCloudRsToCtx = config.relationCloudRsToCtx;
    this._tenantDn = config.tenantDn;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_policy_type - computed: false, optional: true, required: false
  private _accessPolicyType?: string; 
  public get accessPolicyType() {
    return this.getStringAttribute('access_policy_type');
  }
  public set accessPolicyType(value: string) {
    this._accessPolicyType = value;
  }
  public resetAccessPolicyType() {
    this._accessPolicyType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPolicyTypeInput() {
    return this._accessPolicyType;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // cloud_brownfield - computed: false, optional: true, required: false
  private _cloudBrownfield?: string; 
  public get cloudBrownfield() {
    return this.getStringAttribute('cloud_brownfield');
  }
  public set cloudBrownfield(value: string) {
    this._cloudBrownfield = value;
  }
  public resetCloudBrownfield() {
    this._cloudBrownfield = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudBrownfieldInput() {
    return this._cloudBrownfield;
  }

  // cloud_vendor - computed: false, optional: true, required: false
  private _cloudVendor?: string; 
  public get cloudVendor() {
    return this.getStringAttribute('cloud_vendor');
  }
  public set cloudVendor(value: string) {
    this._cloudVendor = value;
  }
  public resetCloudVendor() {
    this._cloudVendor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudVendorInput() {
    return this._cloudVendor;
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

  // hub_network - computed: false, optional: true, required: false
  private _hubNetwork?: string; 
  public get hubNetwork() {
    return this.getStringAttribute('hub_network');
  }
  public set hubNetwork(value: string) {
    this._hubNetwork = value;
  }
  public resetHubNetwork() {
    this._hubNetwork = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hubNetworkInput() {
    return this._hubNetwork;
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

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // primary_cidr - computed: false, optional: true, required: false
  private _primaryCidr?: string; 
  public get primaryCidr() {
    return this.getStringAttribute('primary_cidr');
  }
  public set primaryCidr(value: string) {
    this._primaryCidr = value;
  }
  public resetPrimaryCidr() {
    this._primaryCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryCidrInput() {
    return this._primaryCidr;
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

  // relation_cloud_rs_ctx_to_flow_log - computed: false, optional: true, required: false
  private _relationCloudRsCtxToFlowLog?: string; 
  public get relationCloudRsCtxToFlowLog() {
    return this.getStringAttribute('relation_cloud_rs_ctx_to_flow_log');
  }
  public set relationCloudRsCtxToFlowLog(value: string) {
    this._relationCloudRsCtxToFlowLog = value;
  }
  public resetRelationCloudRsCtxToFlowLog() {
    this._relationCloudRsCtxToFlowLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationCloudRsCtxToFlowLogInput() {
    return this._relationCloudRsCtxToFlowLog;
  }

  // relation_cloud_rs_to_ctx - computed: false, optional: true, required: false
  private _relationCloudRsToCtx?: string; 
  public get relationCloudRsToCtx() {
    return this.getStringAttribute('relation_cloud_rs_to_ctx');
  }
  public set relationCloudRsToCtx(value: string) {
    this._relationCloudRsToCtx = value;
  }
  public resetRelationCloudRsToCtx() {
    this._relationCloudRsToCtx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationCloudRsToCtxInput() {
    return this._relationCloudRsToCtx;
  }

  // tenant_dn - computed: false, optional: false, required: true
  private _tenantDn?: string; 
  public get tenantDn() {
    return this.getStringAttribute('tenant_dn');
  }
  public set tenantDn(value: string) {
    this._tenantDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantDnInput() {
    return this._tenantDn;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_policy_type: cdktf.stringToTerraform(this._accessPolicyType),
      annotation: cdktf.stringToTerraform(this._annotation),
      cloud_brownfield: cdktf.stringToTerraform(this._cloudBrownfield),
      cloud_vendor: cdktf.stringToTerraform(this._cloudVendor),
      description: cdktf.stringToTerraform(this._description),
      hub_network: cdktf.stringToTerraform(this._hubNetwork),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      primary_cidr: cdktf.stringToTerraform(this._primaryCidr),
      region: cdktf.stringToTerraform(this._region),
      relation_cloud_rs_ctx_to_flow_log: cdktf.stringToTerraform(this._relationCloudRsCtxToFlowLog),
      relation_cloud_rs_to_ctx: cdktf.stringToTerraform(this._relationCloudRsToCtx),
      tenant_dn: cdktf.stringToTerraform(this._tenantDn),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_policy_type: {
        value: cdktf.stringToHclTerraform(this._accessPolicyType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_brownfield: {
        value: cdktf.stringToHclTerraform(this._cloudBrownfield),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_vendor: {
        value: cdktf.stringToHclTerraform(this._cloudVendor),
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
      hub_network: {
        value: cdktf.stringToHclTerraform(this._hubNetwork),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_cidr: {
        value: cdktf.stringToHclTerraform(this._primaryCidr),
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
      relation_cloud_rs_ctx_to_flow_log: {
        value: cdktf.stringToHclTerraform(this._relationCloudRsCtxToFlowLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_cloud_rs_to_ctx: {
        value: cdktf.stringToHclTerraform(this._relationCloudRsToCtx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_dn: {
        value: cdktf.stringToHclTerraform(this._tenantDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
