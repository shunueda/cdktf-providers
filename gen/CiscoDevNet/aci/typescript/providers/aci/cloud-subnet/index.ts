// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudSubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet#annotation CloudSubnet#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet#cloud_cidr_pool_dn CloudSubnet#cloud_cidr_pool_dn}
  */
  readonly cloudCidrPoolDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet#description CloudSubnet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet#id CloudSubnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet#ip CloudSubnet#ip}
  */
  readonly ip: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet#name CloudSubnet#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet#name_alias CloudSubnet#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet#relation_cloud_rs_subnet_to_ctx CloudSubnet#relation_cloud_rs_subnet_to_ctx}
  */
  readonly relationCloudRsSubnetToCtx?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet#relation_cloud_rs_subnet_to_flow_log CloudSubnet#relation_cloud_rs_subnet_to_flow_log}
  */
  readonly relationCloudRsSubnetToFlowLog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet#scope CloudSubnet#scope}
  */
  readonly scope?: string[];
  /**
  * Only applicable to the GCP vendor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet#subnet_group_label CloudSubnet#subnet_group_label}
  */
  readonly subnetGroupLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet#usage CloudSubnet#usage}
  */
  readonly usage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet#zone CloudSubnet#zone}
  */
  readonly zone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet aci_cloud_subnet}
*/
export class CloudSubnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_cloud_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudSubnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudSubnet to import
  * @param importFromId The id of the existing CloudSubnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudSubnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_cloud_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/cloud_subnet aci_cloud_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudSubnetConfig
  */
  public constructor(scope: Construct, id: string, config: CloudSubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_cloud_subnet',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._cloudCidrPoolDn = config.cloudCidrPoolDn;
    this._description = config.description;
    this._id = config.id;
    this._ip = config.ip;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationCloudRsSubnetToCtx = config.relationCloudRsSubnetToCtx;
    this._relationCloudRsSubnetToFlowLog = config.relationCloudRsSubnetToFlowLog;
    this._scope = config.scope;
    this._subnetGroupLabel = config.subnetGroupLabel;
    this._usage = config.usage;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // cloud_cidr_pool_dn - computed: false, optional: false, required: true
  private _cloudCidrPoolDn?: string; 
  public get cloudCidrPoolDn() {
    return this.getStringAttribute('cloud_cidr_pool_dn');
  }
  public set cloudCidrPoolDn(value: string) {
    this._cloudCidrPoolDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudCidrPoolDnInput() {
    return this._cloudCidrPoolDn;
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

  // ip - computed: false, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // relation_cloud_rs_subnet_to_ctx - computed: true, optional: true, required: false
  private _relationCloudRsSubnetToCtx?: string; 
  public get relationCloudRsSubnetToCtx() {
    return this.getStringAttribute('relation_cloud_rs_subnet_to_ctx');
  }
  public set relationCloudRsSubnetToCtx(value: string) {
    this._relationCloudRsSubnetToCtx = value;
  }
  public resetRelationCloudRsSubnetToCtx() {
    this._relationCloudRsSubnetToCtx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationCloudRsSubnetToCtxInput() {
    return this._relationCloudRsSubnetToCtx;
  }

  // relation_cloud_rs_subnet_to_flow_log - computed: true, optional: true, required: false
  private _relationCloudRsSubnetToFlowLog?: string; 
  public get relationCloudRsSubnetToFlowLog() {
    return this.getStringAttribute('relation_cloud_rs_subnet_to_flow_log');
  }
  public set relationCloudRsSubnetToFlowLog(value: string) {
    this._relationCloudRsSubnetToFlowLog = value;
  }
  public resetRelationCloudRsSubnetToFlowLog() {
    this._relationCloudRsSubnetToFlowLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationCloudRsSubnetToFlowLogInput() {
    return this._relationCloudRsSubnetToFlowLog;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string[]; 
  public get scope() {
    return this.getListAttribute('scope');
  }
  public set scope(value: string[]) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // subnet_group_label - computed: false, optional: true, required: false
  private _subnetGroupLabel?: string; 
  public get subnetGroupLabel() {
    return this.getStringAttribute('subnet_group_label');
  }
  public set subnetGroupLabel(value: string) {
    this._subnetGroupLabel = value;
  }
  public resetSubnetGroupLabel() {
    this._subnetGroupLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetGroupLabelInput() {
    return this._subnetGroupLabel;
  }

  // usage - computed: true, optional: true, required: false
  private _usage?: string; 
  public get usage() {
    return this.getStringAttribute('usage');
  }
  public set usage(value: string) {
    this._usage = value;
  }
  public resetUsage() {
    this._usage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usageInput() {
    return this._usage;
  }

  // zone - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      cloud_cidr_pool_dn: cdktf.stringToTerraform(this._cloudCidrPoolDn),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_cloud_rs_subnet_to_ctx: cdktf.stringToTerraform(this._relationCloudRsSubnetToCtx),
      relation_cloud_rs_subnet_to_flow_log: cdktf.stringToTerraform(this._relationCloudRsSubnetToFlowLog),
      scope: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scope),
      subnet_group_label: cdktf.stringToTerraform(this._subnetGroupLabel),
      usage: cdktf.stringToTerraform(this._usage),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_cidr_pool_dn: {
        value: cdktf.stringToHclTerraform(this._cloudCidrPoolDn),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
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
      relation_cloud_rs_subnet_to_ctx: {
        value: cdktf.stringToHclTerraform(this._relationCloudRsSubnetToCtx),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_cloud_rs_subnet_to_flow_log: {
        value: cdktf.stringToHclTerraform(this._relationCloudRsSubnetToFlowLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scope),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subnet_group_label: {
        value: cdktf.stringToHclTerraform(this._subnetGroupLabel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usage: {
        value: cdktf.stringToHclTerraform(this._usage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
