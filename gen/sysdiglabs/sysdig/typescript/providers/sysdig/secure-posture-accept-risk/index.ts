// https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/secure_posture_accept_risk
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurePostureAcceptRiskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/secure_posture_accept_risk#control_name SecurePostureAcceptRisk#control_name}
  */
  readonly controlName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/secure_posture_accept_risk#description SecurePostureAcceptRisk#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/secure_posture_accept_risk#end_time SecurePostureAcceptRisk#end_time}
  */
  readonly endTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/secure_posture_accept_risk#expires_in SecurePostureAcceptRisk#expires_in}
  */
  readonly expiresIn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/secure_posture_accept_risk#filter SecurePostureAcceptRisk#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/secure_posture_accept_risk#reason SecurePostureAcceptRisk#reason}
  */
  readonly reason: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/secure_posture_accept_risk#zone_name SecurePostureAcceptRisk#zone_name}
  */
  readonly zoneName?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/secure_posture_accept_risk#timeouts SecurePostureAcceptRisk#timeouts}
  */
  readonly timeouts?: SecurePostureAcceptRiskTimeouts;
}
export interface SecurePostureAcceptRiskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/secure_posture_accept_risk#create SecurePostureAcceptRisk#create}
  */
  readonly create?: string;
}

export function securePostureAcceptRiskTimeoutsToTerraform(struct?: SecurePostureAcceptRiskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function securePostureAcceptRiskTimeoutsToHclTerraform(struct?: SecurePostureAcceptRiskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurePostureAcceptRiskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SecurePostureAcceptRiskTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurePostureAcceptRiskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/secure_posture_accept_risk sysdig_secure_posture_accept_risk}
*/
export class SecurePostureAcceptRisk extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sysdig_secure_posture_accept_risk";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurePostureAcceptRisk resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurePostureAcceptRisk to import
  * @param importFromId The id of the existing SecurePostureAcceptRisk that should be imported. Refer to the {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/secure_posture_accept_risk#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurePostureAcceptRisk to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sysdig_secure_posture_accept_risk", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sysdiglabs/sysdig/3.2.0/docs/resources/secure_posture_accept_risk sysdig_secure_posture_accept_risk} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurePostureAcceptRiskConfig
  */
  public constructor(scope: Construct, id: string, config: SecurePostureAcceptRiskConfig) {
    super(scope, id, {
      terraformResourceType: 'sysdig_secure_posture_accept_risk',
      terraformGeneratorMetadata: {
        providerName: 'sysdig',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._controlName = config.controlName;
    this._description = config.description;
    this._endTime = config.endTime;
    this._expiresIn = config.expiresIn;
    this._filter = config.filter;
    this._reason = config.reason;
    this._zoneName = config.zoneName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_period - computed: true, optional: false, required: false
  public get acceptPeriod() {
    return this.getStringAttribute('accept_period');
  }

  // acceptance_date - computed: true, optional: false, required: false
  public get acceptanceDate() {
    return this.getNumberAttribute('acceptance_date');
  }

  // control_name - computed: false, optional: false, required: true
  private _controlName?: string; 
  public get controlName() {
    return this.getStringAttribute('control_name');
  }
  public set controlName(value: string) {
    this._controlName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get controlNameInput() {
    return this._controlName;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // end_time - computed: false, optional: true, required: false
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  public resetEndTime() {
    this._endTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
  }

  // expires_at - computed: true, optional: false, required: false
  public get expiresAt() {
    return this.getStringAttribute('expires_at');
  }

  // expires_in - computed: false, optional: false, required: true
  private _expiresIn?: string; 
  public get expiresIn() {
    return this.getStringAttribute('expires_in');
  }
  public set expiresIn(value: string) {
    this._expiresIn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expiresInInput() {
    return this._expiresIn;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_expired - computed: true, optional: false, required: false
  public get isExpired() {
    return this.getBooleanAttribute('is_expired');
  }

  // is_system - computed: true, optional: false, required: false
  public get isSystem() {
    return this.getBooleanAttribute('is_system');
  }

  // reason - computed: false, optional: false, required: true
  private _reason?: string; 
  public get reason() {
    return this.getStringAttribute('reason');
  }
  public set reason(value: string) {
    this._reason = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reasonInput() {
    return this._reason;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // zone_name - computed: false, optional: true, required: false
  private _zoneName?: string; 
  public get zoneName() {
    return this.getStringAttribute('zone_name');
  }
  public set zoneName(value: string) {
    this._zoneName = value;
  }
  public resetZoneName() {
    this._zoneName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneNameInput() {
    return this._zoneName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SecurePostureAcceptRiskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SecurePostureAcceptRiskTimeouts) {
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
      control_name: cdktf.stringToTerraform(this._controlName),
      description: cdktf.stringToTerraform(this._description),
      end_time: cdktf.stringToTerraform(this._endTime),
      expires_in: cdktf.stringToTerraform(this._expiresIn),
      filter: cdktf.stringToTerraform(this._filter),
      reason: cdktf.stringToTerraform(this._reason),
      zone_name: cdktf.stringToTerraform(this._zoneName),
      timeouts: securePostureAcceptRiskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      control_name: {
        value: cdktf.stringToHclTerraform(this._controlName),
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
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expires_in: {
        value: cdktf.stringToHclTerraform(this._expiresIn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reason: {
        value: cdktf.stringToHclTerraform(this._reason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_name: {
        value: cdktf.stringToHclTerraform(this._zoneName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: securePostureAcceptRiskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SecurePostureAcceptRiskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
