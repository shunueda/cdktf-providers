// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CachepolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicy#action Cachepolicy#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicy#id Cachepolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicy#invalgroups Cachepolicy#invalgroups}
  */
  readonly invalgroups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicy#invalobjects Cachepolicy#invalobjects}
  */
  readonly invalobjects?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicy#policyname Cachepolicy#policyname}
  */
  readonly policyname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicy#rule Cachepolicy#rule}
  */
  readonly rule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicy#storeingroup Cachepolicy#storeingroup}
  */
  readonly storeingroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicy#undefaction Cachepolicy#undefaction}
  */
  readonly undefaction?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicy citrixadc_cachepolicy}
*/
export class Cachepolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_cachepolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cachepolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cachepolicy to import
  * @param importFromId The id of the existing Cachepolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cachepolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_cachepolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/cachepolicy citrixadc_cachepolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CachepolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CachepolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_cachepolicy',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
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
    this._id = config.id;
    this._invalgroups = config.invalgroups;
    this._invalobjects = config.invalobjects;
    this._policyname = config.policyname;
    this._rule = config.rule;
    this._storeingroup = config.storeingroup;
    this._undefaction = config.undefaction;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
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

  // invalgroups - computed: true, optional: true, required: false
  private _invalgroups?: string[]; 
  public get invalgroups() {
    return this.getListAttribute('invalgroups');
  }
  public set invalgroups(value: string[]) {
    this._invalgroups = value;
  }
  public resetInvalgroups() {
    this._invalgroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalgroupsInput() {
    return this._invalgroups;
  }

  // invalobjects - computed: true, optional: true, required: false
  private _invalobjects?: string[]; 
  public get invalobjects() {
    return this.getListAttribute('invalobjects');
  }
  public set invalobjects(value: string[]) {
    this._invalobjects = value;
  }
  public resetInvalobjects() {
    this._invalobjects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invalobjectsInput() {
    return this._invalobjects;
  }

  // policyname - computed: false, optional: false, required: true
  private _policyname?: string; 
  public get policyname() {
    return this.getStringAttribute('policyname');
  }
  public set policyname(value: string) {
    this._policyname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policynameInput() {
    return this._policyname;
  }

  // rule - computed: true, optional: true, required: false
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  public resetRule() {
    this._rule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // storeingroup - computed: true, optional: true, required: false
  private _storeingroup?: string; 
  public get storeingroup() {
    return this.getStringAttribute('storeingroup');
  }
  public set storeingroup(value: string) {
    this._storeingroup = value;
  }
  public resetStoreingroup() {
    this._storeingroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storeingroupInput() {
    return this._storeingroup;
  }

  // undefaction - computed: true, optional: true, required: false
  private _undefaction?: string; 
  public get undefaction() {
    return this.getStringAttribute('undefaction');
  }
  public set undefaction(value: string) {
    this._undefaction = value;
  }
  public resetUndefaction() {
    this._undefaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get undefactionInput() {
    return this._undefaction;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      id: cdktf.stringToTerraform(this._id),
      invalgroups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._invalgroups),
      invalobjects: cdktf.listMapper(cdktf.stringToTerraform, false)(this._invalobjects),
      policyname: cdktf.stringToTerraform(this._policyname),
      rule: cdktf.stringToTerraform(this._rule),
      storeingroup: cdktf.stringToTerraform(this._storeingroup),
      undefaction: cdktf.stringToTerraform(this._undefaction),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
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
      invalgroups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._invalgroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      invalobjects: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._invalobjects),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      policyname: {
        value: cdktf.stringToHclTerraform(this._policyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.stringToHclTerraform(this._rule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storeingroup: {
        value: cdktf.stringToHclTerraform(this._storeingroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      undefaction: {
        value: cdktf.stringToHclTerraform(this._undefaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
