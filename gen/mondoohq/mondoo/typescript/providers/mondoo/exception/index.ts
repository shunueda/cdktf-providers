// https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/exception
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ExceptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action to perform. Default is `RISK_ACCEPTED`. Other valid values are `WORKAROUND`, `FALSE_POSITIVE`, `ENABLE`, `DISABLE`, `OUT_OF_SCOPE` and `SNOOZE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/exception#action Exception#action}
  */
  readonly action?: string;
  /**
  * List of check MRNs to set exceptions for. If set, `vulnerability_mrns` must not be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/exception#check_mrns Exception#check_mrns}
  */
  readonly checkMrns?: string[];
  /**
  * The ID of the exception
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/exception#exception_id Exception#exception_id}
  */
  readonly exceptionId?: string;
  /**
  * Description why the exception is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/exception#justification Exception#justification}
  */
  readonly justification?: string;
  /**
  * The MRN of the scope (either asset mrn or space mrn).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/exception#scope_mrn Exception#scope_mrn}
  */
  readonly scopeMrn?: string;
  /**
  * The date when the exception is no longer valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/exception#valid_until Exception#valid_until}
  */
  readonly validUntil?: string;
  /**
  * List of vulnerability MRNs to set exceptions for. If set, `check_mrns` must not be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/exception#vulnerability_mrns Exception#vulnerability_mrns}
  */
  readonly vulnerabilityMrns?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/exception mondoo_exception}
*/
export class Exception extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_exception";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Exception resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Exception to import
  * @param importFromId The id of the existing Exception that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/exception#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Exception to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_exception", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.34.0/docs/resources/exception mondoo_exception} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ExceptionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ExceptionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'mondoo_exception',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.34.0'
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
    this._checkMrns = config.checkMrns;
    this._exceptionId = config.exceptionId;
    this._justification = config.justification;
    this._scopeMrn = config.scopeMrn;
    this._validUntil = config.validUntil;
    this._vulnerabilityMrns = config.vulnerabilityMrns;
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

  // check_mrns - computed: false, optional: true, required: false
  private _checkMrns?: string[]; 
  public get checkMrns() {
    return this.getListAttribute('check_mrns');
  }
  public set checkMrns(value: string[]) {
    this._checkMrns = value;
  }
  public resetCheckMrns() {
    this._checkMrns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkMrnsInput() {
    return this._checkMrns;
  }

  // exception_id - computed: true, optional: true, required: false
  private _exceptionId?: string; 
  public get exceptionId() {
    return this.getStringAttribute('exception_id');
  }
  public set exceptionId(value: string) {
    this._exceptionId = value;
  }
  public resetExceptionId() {
    this._exceptionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionIdInput() {
    return this._exceptionId;
  }

  // justification - computed: false, optional: true, required: false
  private _justification?: string; 
  public get justification() {
    return this.getStringAttribute('justification');
  }
  public set justification(value: string) {
    this._justification = value;
  }
  public resetJustification() {
    this._justification = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get justificationInput() {
    return this._justification;
  }

  // scope_mrn - computed: true, optional: true, required: false
  private _scopeMrn?: string; 
  public get scopeMrn() {
    return this.getStringAttribute('scope_mrn');
  }
  public set scopeMrn(value: string) {
    this._scopeMrn = value;
  }
  public resetScopeMrn() {
    this._scopeMrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeMrnInput() {
    return this._scopeMrn;
  }

  // valid_until - computed: false, optional: true, required: false
  private _validUntil?: string; 
  public get validUntil() {
    return this.getStringAttribute('valid_until');
  }
  public set validUntil(value: string) {
    this._validUntil = value;
  }
  public resetValidUntil() {
    this._validUntil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validUntilInput() {
    return this._validUntil;
  }

  // vulnerability_mrns - computed: false, optional: true, required: false
  private _vulnerabilityMrns?: string[]; 
  public get vulnerabilityMrns() {
    return this.getListAttribute('vulnerability_mrns');
  }
  public set vulnerabilityMrns(value: string[]) {
    this._vulnerabilityMrns = value;
  }
  public resetVulnerabilityMrns() {
    this._vulnerabilityMrns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityMrnsInput() {
    return this._vulnerabilityMrns;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      check_mrns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._checkMrns),
      exception_id: cdktf.stringToTerraform(this._exceptionId),
      justification: cdktf.stringToTerraform(this._justification),
      scope_mrn: cdktf.stringToTerraform(this._scopeMrn),
      valid_until: cdktf.stringToTerraform(this._validUntil),
      vulnerability_mrns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vulnerabilityMrns),
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
      check_mrns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._checkMrns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      exception_id: {
        value: cdktf.stringToHclTerraform(this._exceptionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      justification: {
        value: cdktf.stringToHclTerraform(this._justification),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope_mrn: {
        value: cdktf.stringToHclTerraform(this._scopeMrn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      valid_until: {
        value: cdktf.stringToHclTerraform(this._validUntil),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vulnerability_mrns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vulnerabilityMrns),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
