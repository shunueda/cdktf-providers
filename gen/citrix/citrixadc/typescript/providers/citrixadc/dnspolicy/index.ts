// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnspolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnspolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnspolicy#actionname Dnspolicy#actionname}
  */
  readonly actionname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnspolicy#cachebypass Dnspolicy#cachebypass}
  */
  readonly cachebypass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnspolicy#drop Dnspolicy#drop}
  */
  readonly drop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnspolicy#id Dnspolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnspolicy#logaction Dnspolicy#logaction}
  */
  readonly logaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnspolicy#name Dnspolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnspolicy#preferredlocation Dnspolicy#preferredlocation}
  */
  readonly preferredlocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnspolicy#preferredloclist Dnspolicy#preferredloclist}
  */
  readonly preferredloclist?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnspolicy#rule Dnspolicy#rule}
  */
  readonly rule: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnspolicy#viewname Dnspolicy#viewname}
  */
  readonly viewname?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnspolicy citrixadc_dnspolicy}
*/
export class Dnspolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_dnspolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dnspolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dnspolicy to import
  * @param importFromId The id of the existing Dnspolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnspolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dnspolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_dnspolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnspolicy citrixadc_dnspolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnspolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DnspolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_dnspolicy',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionname = config.actionname;
    this._cachebypass = config.cachebypass;
    this._drop = config.drop;
    this._id = config.id;
    this._logaction = config.logaction;
    this._name = config.name;
    this._preferredlocation = config.preferredlocation;
    this._preferredloclist = config.preferredloclist;
    this._rule = config.rule;
    this._viewname = config.viewname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actionname - computed: true, optional: true, required: false
  private _actionname?: string; 
  public get actionname() {
    return this.getStringAttribute('actionname');
  }
  public set actionname(value: string) {
    this._actionname = value;
  }
  public resetActionname() {
    this._actionname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionnameInput() {
    return this._actionname;
  }

  // cachebypass - computed: true, optional: true, required: false
  private _cachebypass?: string; 
  public get cachebypass() {
    return this.getStringAttribute('cachebypass');
  }
  public set cachebypass(value: string) {
    this._cachebypass = value;
  }
  public resetCachebypass() {
    this._cachebypass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachebypassInput() {
    return this._cachebypass;
  }

  // drop - computed: true, optional: true, required: false
  private _drop?: string; 
  public get drop() {
    return this.getStringAttribute('drop');
  }
  public set drop(value: string) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
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

  // logaction - computed: true, optional: true, required: false
  private _logaction?: string; 
  public get logaction() {
    return this.getStringAttribute('logaction');
  }
  public set logaction(value: string) {
    this._logaction = value;
  }
  public resetLogaction() {
    this._logaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logactionInput() {
    return this._logaction;
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

  // preferredlocation - computed: true, optional: true, required: false
  private _preferredlocation?: string; 
  public get preferredlocation() {
    return this.getStringAttribute('preferredlocation');
  }
  public set preferredlocation(value: string) {
    this._preferredlocation = value;
  }
  public resetPreferredlocation() {
    this._preferredlocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredlocationInput() {
    return this._preferredlocation;
  }

  // preferredloclist - computed: true, optional: true, required: false
  private _preferredloclist?: string[]; 
  public get preferredloclist() {
    return this.getListAttribute('preferredloclist');
  }
  public set preferredloclist(value: string[]) {
    this._preferredloclist = value;
  }
  public resetPreferredloclist() {
    this._preferredloclist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredloclistInput() {
    return this._preferredloclist;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // viewname - computed: true, optional: true, required: false
  private _viewname?: string; 
  public get viewname() {
    return this.getStringAttribute('viewname');
  }
  public set viewname(value: string) {
    this._viewname = value;
  }
  public resetViewname() {
    this._viewname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewnameInput() {
    return this._viewname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actionname: cdktf.stringToTerraform(this._actionname),
      cachebypass: cdktf.stringToTerraform(this._cachebypass),
      drop: cdktf.stringToTerraform(this._drop),
      id: cdktf.stringToTerraform(this._id),
      logaction: cdktf.stringToTerraform(this._logaction),
      name: cdktf.stringToTerraform(this._name),
      preferredlocation: cdktf.stringToTerraform(this._preferredlocation),
      preferredloclist: cdktf.listMapper(cdktf.stringToTerraform, false)(this._preferredloclist),
      rule: cdktf.stringToTerraform(this._rule),
      viewname: cdktf.stringToTerraform(this._viewname),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actionname: {
        value: cdktf.stringToHclTerraform(this._actionname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cachebypass: {
        value: cdktf.stringToHclTerraform(this._cachebypass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drop: {
        value: cdktf.stringToHclTerraform(this._drop),
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
      logaction: {
        value: cdktf.stringToHclTerraform(this._logaction),
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
      preferredlocation: {
        value: cdktf.stringToHclTerraform(this._preferredlocation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferredloclist: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._preferredloclist),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      viewname: {
        value: cdktf.stringToHclTerraform(this._viewname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
