// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_fabric_authorization_template_platforms
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFmgFabricAuthorizationTemplatePlatformsAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_fabric_authorization_template_platforms#adom ObjectFmgFabricAuthorizationTemplatePlatformsA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_fabric_authorization_template_platforms#extension_type ObjectFmgFabricAuthorizationTemplatePlatformsA#extension_type}
  */
  readonly extensionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_fabric_authorization_template_platforms#fmgcount ObjectFmgFabricAuthorizationTemplatePlatformsA#fmgcount}
  */
  readonly fmgcount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_fabric_authorization_template_platforms#fortilink ObjectFmgFabricAuthorizationTemplatePlatformsA#fortilink}
  */
  readonly fortilink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_fabric_authorization_template_platforms#id ObjectFmgFabricAuthorizationTemplatePlatformsA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_fabric_authorization_template_platforms#prefix ObjectFmgFabricAuthorizationTemplatePlatformsA#prefix}
  */
  readonly prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_fabric_authorization_template_platforms#scopetype ObjectFmgFabricAuthorizationTemplatePlatformsA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_fabric_authorization_template_platforms#template ObjectFmgFabricAuthorizationTemplatePlatformsA#template}
  */
  readonly template: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_fabric_authorization_template_platforms#type ObjectFmgFabricAuthorizationTemplatePlatformsA#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_fabric_authorization_template_platforms fortimanager_object_fmg_fabric_authorization_template_platforms}
*/
export class ObjectFmgFabricAuthorizationTemplatePlatformsA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_fmg_fabric_authorization_template_platforms";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFmgFabricAuthorizationTemplatePlatformsA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFmgFabricAuthorizationTemplatePlatformsA to import
  * @param importFromId The id of the existing ObjectFmgFabricAuthorizationTemplatePlatformsA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_fabric_authorization_template_platforms#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFmgFabricAuthorizationTemplatePlatformsA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_fmg_fabric_authorization_template_platforms", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_fabric_authorization_template_platforms fortimanager_object_fmg_fabric_authorization_template_platforms} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFmgFabricAuthorizationTemplatePlatformsAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFmgFabricAuthorizationTemplatePlatformsAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_fmg_fabric_authorization_template_platforms',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._extensionType = config.extensionType;
    this._fmgcount = config.fmgcount;
    this._fortilink = config.fortilink;
    this._id = config.id;
    this._prefix = config.prefix;
    this._scopetype = config.scopetype;
    this._template = config.template;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // extension_type - computed: true, optional: true, required: false
  private _extensionType?: string; 
  public get extensionType() {
    return this.getStringAttribute('extension_type');
  }
  public set extensionType(value: string) {
    this._extensionType = value;
  }
  public resetExtensionType() {
    this._extensionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionTypeInput() {
    return this._extensionType;
  }

  // fmgcount - computed: false, optional: true, required: false
  private _fmgcount?: number; 
  public get fmgcount() {
    return this.getNumberAttribute('fmgcount');
  }
  public set fmgcount(value: number) {
    this._fmgcount = value;
  }
  public resetFmgcount() {
    this._fmgcount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgcountInput() {
    return this._fmgcount;
  }

  // fortilink - computed: false, optional: true, required: false
  private _fortilink?: string; 
  public get fortilink() {
    return this.getStringAttribute('fortilink');
  }
  public set fortilink(value: string) {
    this._fortilink = value;
  }
  public resetFortilink() {
    this._fortilink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortilinkInput() {
    return this._fortilink;
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // template - computed: false, optional: false, required: true
  private _template?: string; 
  public get template() {
    return this.getStringAttribute('template');
  }
  public set template(value: string) {
    this._template = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // type - computed: false, optional: true, required: false
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
      adom: cdktf.stringToTerraform(this._adom),
      extension_type: cdktf.stringToTerraform(this._extensionType),
      fmgcount: cdktf.numberToTerraform(this._fmgcount),
      fortilink: cdktf.stringToTerraform(this._fortilink),
      id: cdktf.stringToTerraform(this._id),
      prefix: cdktf.stringToTerraform(this._prefix),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      template: cdktf.stringToTerraform(this._template),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension_type: {
        value: cdktf.stringToHclTerraform(this._extensionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmgcount: {
        value: cdktf.numberToHclTerraform(this._fmgcount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      fortilink: {
        value: cdktf.stringToHclTerraform(this._fortilink),
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
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template: {
        value: cdktf.stringToHclTerraform(this._template),
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
