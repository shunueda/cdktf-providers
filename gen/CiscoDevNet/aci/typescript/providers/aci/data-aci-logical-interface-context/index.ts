// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_context
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciLogicalInterfaceContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_context#annotation DataAciLogicalInterfaceContext#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_context#conn_name_or_lbl DataAciLogicalInterfaceContext#conn_name_or_lbl}
  */
  readonly connNameOrLbl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_context#description DataAciLogicalInterfaceContext#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_context#id DataAciLogicalInterfaceContext#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_context#l3_dest DataAciLogicalInterfaceContext#l3_dest}
  */
  readonly l3Dest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_context#logical_device_context_dn DataAciLogicalInterfaceContext#logical_device_context_dn}
  */
  readonly logicalDeviceContextDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_context#name_alias DataAciLogicalInterfaceContext#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_context#permit_log DataAciLogicalInterfaceContext#permit_log}
  */
  readonly permitLog?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_context aci_logical_interface_context}
*/
export class DataAciLogicalInterfaceContext extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_logical_interface_context";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciLogicalInterfaceContext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciLogicalInterfaceContext to import
  * @param importFromId The id of the existing DataAciLogicalInterfaceContext that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_context#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciLogicalInterfaceContext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_logical_interface_context", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/logical_interface_context aci_logical_interface_context} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciLogicalInterfaceContextConfig
  */
  public constructor(scope: Construct, id: string, config: DataAciLogicalInterfaceContextConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_logical_interface_context',
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
    this._connNameOrLbl = config.connNameOrLbl;
    this._description = config.description;
    this._id = config.id;
    this._l3Dest = config.l3Dest;
    this._logicalDeviceContextDn = config.logicalDeviceContextDn;
    this._nameAlias = config.nameAlias;
    this._permitLog = config.permitLog;
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

  // conn_name_or_lbl - computed: false, optional: false, required: true
  private _connNameOrLbl?: string; 
  public get connNameOrLbl() {
    return this.getStringAttribute('conn_name_or_lbl');
  }
  public set connNameOrLbl(value: string) {
    this._connNameOrLbl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connNameOrLblInput() {
    return this._connNameOrLbl;
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

  // l3_dest - computed: true, optional: true, required: false
  private _l3Dest?: string; 
  public get l3Dest() {
    return this.getStringAttribute('l3_dest');
  }
  public set l3Dest(value: string) {
    this._l3Dest = value;
  }
  public resetL3Dest() {
    this._l3Dest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l3DestInput() {
    return this._l3Dest;
  }

  // logical_device_context_dn - computed: false, optional: false, required: true
  private _logicalDeviceContextDn?: string; 
  public get logicalDeviceContextDn() {
    return this.getStringAttribute('logical_device_context_dn');
  }
  public set logicalDeviceContextDn(value: string) {
    this._logicalDeviceContextDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalDeviceContextDnInput() {
    return this._logicalDeviceContextDn;
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

  // permit_log - computed: true, optional: true, required: false
  private _permitLog?: string; 
  public get permitLog() {
    return this.getStringAttribute('permit_log');
  }
  public set permitLog(value: string) {
    this._permitLog = value;
  }
  public resetPermitLog() {
    this._permitLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permitLogInput() {
    return this._permitLog;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      conn_name_or_lbl: cdktf.stringToTerraform(this._connNameOrLbl),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      l3_dest: cdktf.stringToTerraform(this._l3Dest),
      logical_device_context_dn: cdktf.stringToTerraform(this._logicalDeviceContextDn),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      permit_log: cdktf.stringToTerraform(this._permitLog),
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
      conn_name_or_lbl: {
        value: cdktf.stringToHclTerraform(this._connNameOrLbl),
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
      l3_dest: {
        value: cdktf.stringToHclTerraform(this._l3Dest),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_device_context_dn: {
        value: cdktf.stringToHclTerraform(this._logicalDeviceContextDn),
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
      permit_log: {
        value: cdktf.stringToHclTerraform(this._permitLog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
