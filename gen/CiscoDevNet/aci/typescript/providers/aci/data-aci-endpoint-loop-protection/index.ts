// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_loop_protection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAciEndpointLoopProtectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_loop_protection#action DataAciEndpointLoopProtection#action}
  */
  readonly action?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_loop_protection#admin_st DataAciEndpointLoopProtection#admin_st}
  */
  readonly adminSt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_loop_protection#annotation DataAciEndpointLoopProtection#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_loop_protection#description DataAciEndpointLoopProtection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_loop_protection#id DataAciEndpointLoopProtection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_loop_protection#loop_detect_intvl DataAciEndpointLoopProtection#loop_detect_intvl}
  */
  readonly loopDetectIntvl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_loop_protection#loop_detect_mult DataAciEndpointLoopProtection#loop_detect_mult}
  */
  readonly loopDetectMult?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_loop_protection#name_alias DataAciEndpointLoopProtection#name_alias}
  */
  readonly nameAlias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_loop_protection aci_endpoint_loop_protection}
*/
export class DataAciEndpointLoopProtection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_endpoint_loop_protection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAciEndpointLoopProtection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAciEndpointLoopProtection to import
  * @param importFromId The id of the existing DataAciEndpointLoopProtection that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_loop_protection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAciEndpointLoopProtection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_endpoint_loop_protection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/data-sources/endpoint_loop_protection aci_endpoint_loop_protection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAciEndpointLoopProtectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAciEndpointLoopProtectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aci_endpoint_loop_protection',
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
    this._action = config.action;
    this._adminSt = config.adminSt;
    this._annotation = config.annotation;
    this._description = config.description;
    this._id = config.id;
    this._loopDetectIntvl = config.loopDetectIntvl;
    this._loopDetectMult = config.loopDetectMult;
    this._nameAlias = config.nameAlias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string[]; 
  public get action() {
    return this.getListAttribute('action');
  }
  public set action(value: string[]) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // admin_st - computed: true, optional: true, required: false
  private _adminSt?: string; 
  public get adminSt() {
    return this.getStringAttribute('admin_st');
  }
  public set adminSt(value: string) {
    this._adminSt = value;
  }
  public resetAdminSt() {
    this._adminSt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminStInput() {
    return this._adminSt;
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

  // loop_detect_intvl - computed: true, optional: true, required: false
  private _loopDetectIntvl?: string; 
  public get loopDetectIntvl() {
    return this.getStringAttribute('loop_detect_intvl');
  }
  public set loopDetectIntvl(value: string) {
    this._loopDetectIntvl = value;
  }
  public resetLoopDetectIntvl() {
    this._loopDetectIntvl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopDetectIntvlInput() {
    return this._loopDetectIntvl;
  }

  // loop_detect_mult - computed: true, optional: true, required: false
  private _loopDetectMult?: string; 
  public get loopDetectMult() {
    return this.getStringAttribute('loop_detect_mult');
  }
  public set loopDetectMult(value: string) {
    this._loopDetectMult = value;
  }
  public resetLoopDetectMult() {
    this._loopDetectMult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopDetectMultInput() {
    return this._loopDetectMult;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.listMapper(cdktf.stringToTerraform, false)(this._action),
      admin_st: cdktf.stringToTerraform(this._adminSt),
      annotation: cdktf.stringToTerraform(this._annotation),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      loop_detect_intvl: cdktf.stringToTerraform(this._loopDetectIntvl),
      loop_detect_mult: cdktf.stringToTerraform(this._loopDetectMult),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._action),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      admin_st: {
        value: cdktf.stringToHclTerraform(this._adminSt),
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
      loop_detect_intvl: {
        value: cdktf.stringToHclTerraform(this._loopDetectIntvl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      loop_detect_mult: {
        value: cdktf.stringToHclTerraform(this._loopDetectMult),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
