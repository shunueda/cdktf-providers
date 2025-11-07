// https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/kms_key_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KmsKeyV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/kms_key_v1#id KmsKeyV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/kms_key_v1#is_enabled KmsKeyV1#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/kms_key_v1#key_alias KmsKeyV1#key_alias}
  */
  readonly keyAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/kms_key_v1#key_description KmsKeyV1#key_description}
  */
  readonly keyDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/kms_key_v1#pending_days KmsKeyV1#pending_days}
  */
  readonly pendingDays?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/kms_key_v1#realm KmsKeyV1#realm}
  */
  readonly realm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/kms_key_v1#rotation_enabled KmsKeyV1#rotation_enabled}
  */
  readonly rotationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/kms_key_v1#rotation_interval KmsKeyV1#rotation_interval}
  */
  readonly rotationInterval?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/kms_key_v1#timeouts KmsKeyV1#timeouts}
  */
  readonly timeouts?: KmsKeyV1Timeouts;
}
export interface KmsKeyV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/kms_key_v1#create KmsKeyV1#create}
  */
  readonly create?: string;
}

export function kmsKeyV1TimeoutsToTerraform(struct?: KmsKeyV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function kmsKeyV1TimeoutsToHclTerraform(struct?: KmsKeyV1Timeouts | cdktf.IResolvable): any {
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

export class KmsKeyV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): KmsKeyV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: KmsKeyV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/kms_key_v1 flexibleengine_kms_key_v1}
*/
export class KmsKeyV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flexibleengine_kms_key_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KmsKeyV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KmsKeyV1 to import
  * @param importFromId The id of the existing KmsKeyV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/kms_key_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KmsKeyV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flexibleengine_kms_key_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flexibleenginecloud/flexibleengine/1.46.0/docs/resources/kms_key_v1 flexibleengine_kms_key_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KmsKeyV1Config
  */
  public constructor(scope: Construct, id: string, config: KmsKeyV1Config) {
    super(scope, id, {
      terraformResourceType: 'flexibleengine_kms_key_v1',
      terraformGeneratorMetadata: {
        providerName: 'flexibleengine',
        providerVersion: '1.46.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._isEnabled = config.isEnabled;
    this._keyAlias = config.keyAlias;
    this._keyDescription = config.keyDescription;
    this._pendingDays = config.pendingDays;
    this._realm = config.realm;
    this._rotationEnabled = config.rotationEnabled;
    this._rotationInterval = config.rotationInterval;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // default_key_flag - computed: true, optional: false, required: false
  public get defaultKeyFlag() {
    return this.getStringAttribute('default_key_flag');
  }

  // domain_id - computed: true, optional: false, required: false
  public get domainId() {
    return this.getStringAttribute('domain_id');
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

  // is_enabled - computed: false, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
  }

  // key_alias - computed: false, optional: false, required: true
  private _keyAlias?: string; 
  public get keyAlias() {
    return this.getStringAttribute('key_alias');
  }
  public set keyAlias(value: string) {
    this._keyAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyAliasInput() {
    return this._keyAlias;
  }

  // key_description - computed: false, optional: true, required: false
  private _keyDescription?: string; 
  public get keyDescription() {
    return this.getStringAttribute('key_description');
  }
  public set keyDescription(value: string) {
    this._keyDescription = value;
  }
  public resetKeyDescription() {
    this._keyDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyDescriptionInput() {
    return this._keyDescription;
  }

  // origin - computed: true, optional: false, required: false
  public get origin() {
    return this.getStringAttribute('origin');
  }

  // pending_days - computed: false, optional: true, required: false
  private _pendingDays?: string; 
  public get pendingDays() {
    return this.getStringAttribute('pending_days');
  }
  public set pendingDays(value: string) {
    this._pendingDays = value;
  }
  public resetPendingDays() {
    this._pendingDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingDaysInput() {
    return this._pendingDays;
  }

  // realm - computed: true, optional: true, required: false
  private _realm?: string; 
  public get realm() {
    return this.getStringAttribute('realm');
  }
  public set realm(value: string) {
    this._realm = value;
  }
  public resetRealm() {
    this._realm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realmInput() {
    return this._realm;
  }

  // rotation_enabled - computed: false, optional: true, required: false
  private _rotationEnabled?: boolean | cdktf.IResolvable; 
  public get rotationEnabled() {
    return this.getBooleanAttribute('rotation_enabled');
  }
  public set rotationEnabled(value: boolean | cdktf.IResolvable) {
    this._rotationEnabled = value;
  }
  public resetRotationEnabled() {
    this._rotationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationEnabledInput() {
    return this._rotationEnabled;
  }

  // rotation_interval - computed: true, optional: true, required: false
  private _rotationInterval?: number; 
  public get rotationInterval() {
    return this.getNumberAttribute('rotation_interval');
  }
  public set rotationInterval(value: number) {
    this._rotationInterval = value;
  }
  public resetRotationInterval() {
    this._rotationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rotationIntervalInput() {
    return this._rotationInterval;
  }

  // rotation_number - computed: true, optional: false, required: false
  public get rotationNumber() {
    return this.getNumberAttribute('rotation_number');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new KmsKeyV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: KmsKeyV1Timeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      key_alias: cdktf.stringToTerraform(this._keyAlias),
      key_description: cdktf.stringToTerraform(this._keyDescription),
      pending_days: cdktf.stringToTerraform(this._pendingDays),
      realm: cdktf.stringToTerraform(this._realm),
      rotation_enabled: cdktf.booleanToTerraform(this._rotationEnabled),
      rotation_interval: cdktf.numberToTerraform(this._rotationInterval),
      timeouts: kmsKeyV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      key_alias: {
        value: cdktf.stringToHclTerraform(this._keyAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_description: {
        value: cdktf.stringToHclTerraform(this._keyDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pending_days: {
        value: cdktf.stringToHclTerraform(this._pendingDays),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm: {
        value: cdktf.stringToHclTerraform(this._realm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rotation_enabled: {
        value: cdktf.booleanToHclTerraform(this._rotationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rotation_interval: {
        value: cdktf.numberToHclTerraform(this._rotationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: kmsKeyV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "KmsKeyV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
