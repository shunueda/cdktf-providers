// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_dv_validation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CpsDvValidationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to acknowledge all post-verification warnings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_dv_validation#acknowledge_post_verification_warnings CpsDvValidation#acknowledge_post_verification_warnings}
  */
  readonly acknowledgePostVerificationWarnings?: boolean | cdktf.IResolvable;
  /**
  * The unique identifier of enrollment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_dv_validation#enrollment_id CpsDvValidation#enrollment_id}
  */
  readonly enrollmentId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_dv_validation#id CpsDvValidation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * List of SANs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_dv_validation#sans CpsDvValidation#sans}
  */
  readonly sans?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_dv_validation#timeouts CpsDvValidation#timeouts}
  */
  readonly timeouts?: CpsDvValidationTimeouts;
}
export interface CpsDvValidationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_dv_validation#default CpsDvValidation#default}
  */
  readonly default?: string;
}

export function cpsDvValidationTimeoutsToTerraform(struct?: CpsDvValidationTimeoutsOutputReference | CpsDvValidationTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function cpsDvValidationTimeoutsToHclTerraform(struct?: CpsDvValidationTimeoutsOutputReference | CpsDvValidationTimeouts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CpsDvValidationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CpsDvValidationTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CpsDvValidationTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._default = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_dv_validation akamai_cps_dv_validation}
*/
export class CpsDvValidation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_cps_dv_validation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CpsDvValidation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CpsDvValidation to import
  * @param importFromId The id of the existing CpsDvValidation that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_dv_validation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CpsDvValidation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_cps_dv_validation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/cps_dv_validation akamai_cps_dv_validation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CpsDvValidationConfig
  */
  public constructor(scope: Construct, id: string, config: CpsDvValidationConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_cps_dv_validation',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0',
        providerVersionConstraint: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._acknowledgePostVerificationWarnings = config.acknowledgePostVerificationWarnings;
    this._enrollmentId = config.enrollmentId;
    this._id = config.id;
    this._sans = config.sans;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acknowledge_post_verification_warnings - computed: false, optional: true, required: false
  private _acknowledgePostVerificationWarnings?: boolean | cdktf.IResolvable; 
  public get acknowledgePostVerificationWarnings() {
    return this.getBooleanAttribute('acknowledge_post_verification_warnings');
  }
  public set acknowledgePostVerificationWarnings(value: boolean | cdktf.IResolvable) {
    this._acknowledgePostVerificationWarnings = value;
  }
  public resetAcknowledgePostVerificationWarnings() {
    this._acknowledgePostVerificationWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acknowledgePostVerificationWarningsInput() {
    return this._acknowledgePostVerificationWarnings;
  }

  // enrollment_id - computed: false, optional: false, required: true
  private _enrollmentId?: number; 
  public get enrollmentId() {
    return this.getNumberAttribute('enrollment_id');
  }
  public set enrollmentId(value: number) {
    this._enrollmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enrollmentIdInput() {
    return this._enrollmentId;
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

  // sans - computed: false, optional: true, required: false
  private _sans?: string[]; 
  public get sans() {
    return cdktf.Fn.tolist(this.getListAttribute('sans'));
  }
  public set sans(value: string[]) {
    this._sans = value;
  }
  public resetSans() {
    this._sans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sansInput() {
    return this._sans;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CpsDvValidationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CpsDvValidationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acknowledge_post_verification_warnings: cdktf.booleanToTerraform(this._acknowledgePostVerificationWarnings),
      enrollment_id: cdktf.numberToTerraform(this._enrollmentId),
      id: cdktf.stringToTerraform(this._id),
      sans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sans),
      timeouts: cpsDvValidationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acknowledge_post_verification_warnings: {
        value: cdktf.booleanToHclTerraform(this._acknowledgePostVerificationWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enrollment_id: {
        value: cdktf.numberToHclTerraform(this._enrollmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: cpsDvValidationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CpsDvValidationTimeoutsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
