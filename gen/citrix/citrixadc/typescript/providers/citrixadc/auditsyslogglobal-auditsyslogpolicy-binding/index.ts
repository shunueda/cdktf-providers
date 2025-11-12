// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogglobal_auditsyslogpolicy_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuditsyslogglobalAuditsyslogpolicyBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogglobal_auditsyslogpolicy_binding#builtin AuditsyslogglobalAuditsyslogpolicyBinding#builtin}
  */
  readonly builtin?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogglobal_auditsyslogpolicy_binding#feature AuditsyslogglobalAuditsyslogpolicyBinding#feature}
  */
  readonly feature?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogglobal_auditsyslogpolicy_binding#globalbindtype AuditsyslogglobalAuditsyslogpolicyBinding#globalbindtype}
  */
  readonly globalbindtype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogglobal_auditsyslogpolicy_binding#id AuditsyslogglobalAuditsyslogpolicyBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogglobal_auditsyslogpolicy_binding#policyname AuditsyslogglobalAuditsyslogpolicyBinding#policyname}
  */
  readonly policyname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogglobal_auditsyslogpolicy_binding#priority AuditsyslogglobalAuditsyslogpolicyBinding#priority}
  */
  readonly priority: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogglobal_auditsyslogpolicy_binding citrixadc_auditsyslogglobal_auditsyslogpolicy_binding}
*/
export class AuditsyslogglobalAuditsyslogpolicyBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_auditsyslogglobal_auditsyslogpolicy_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AuditsyslogglobalAuditsyslogpolicyBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AuditsyslogglobalAuditsyslogpolicyBinding to import
  * @param importFromId The id of the existing AuditsyslogglobalAuditsyslogpolicyBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogglobal_auditsyslogpolicy_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AuditsyslogglobalAuditsyslogpolicyBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_auditsyslogglobal_auditsyslogpolicy_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/auditsyslogglobal_auditsyslogpolicy_binding citrixadc_auditsyslogglobal_auditsyslogpolicy_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuditsyslogglobalAuditsyslogpolicyBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AuditsyslogglobalAuditsyslogpolicyBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_auditsyslogglobal_auditsyslogpolicy_binding',
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
    this._builtin = config.builtin;
    this._feature = config.feature;
    this._globalbindtype = config.globalbindtype;
    this._id = config.id;
    this._policyname = config.policyname;
    this._priority = config.priority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // builtin - computed: true, optional: true, required: false
  private _builtin?: string[]; 
  public get builtin() {
    return this.getListAttribute('builtin');
  }
  public set builtin(value: string[]) {
    this._builtin = value;
  }
  public resetBuiltin() {
    this._builtin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get builtinInput() {
    return this._builtin;
  }

  // feature - computed: true, optional: true, required: false
  private _feature?: string; 
  public get feature() {
    return this.getStringAttribute('feature');
  }
  public set feature(value: string) {
    this._feature = value;
  }
  public resetFeature() {
    this._feature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureInput() {
    return this._feature;
  }

  // globalbindtype - computed: true, optional: true, required: false
  private _globalbindtype?: string; 
  public get globalbindtype() {
    return this.getStringAttribute('globalbindtype');
  }
  public set globalbindtype(value: string) {
    this._globalbindtype = value;
  }
  public resetGlobalbindtype() {
    this._globalbindtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalbindtypeInput() {
    return this._globalbindtype;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      builtin: cdktf.listMapper(cdktf.stringToTerraform, false)(this._builtin),
      feature: cdktf.stringToTerraform(this._feature),
      globalbindtype: cdktf.stringToTerraform(this._globalbindtype),
      id: cdktf.stringToTerraform(this._id),
      policyname: cdktf.stringToTerraform(this._policyname),
      priority: cdktf.numberToTerraform(this._priority),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      builtin: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._builtin),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      feature: {
        value: cdktf.stringToHclTerraform(this._feature),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      globalbindtype: {
        value: cdktf.stringToHclTerraform(this._globalbindtype),
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
      policyname: {
        value: cdktf.stringToHclTerraform(this._policyname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
