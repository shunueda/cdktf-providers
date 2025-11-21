// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_remediation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigRemediationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_remediation#config_rule_id ConfigRemediation#config_rule_id}
  */
  readonly configRuleId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_remediation#id ConfigRemediation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_remediation#invoke_type ConfigRemediation#invoke_type}
  */
  readonly invokeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_remediation#params ConfigRemediation#params}
  */
  readonly params: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_remediation#remediation_source_type ConfigRemediation#remediation_source_type}
  */
  readonly remediationSourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_remediation#remediation_template_id ConfigRemediation#remediation_template_id}
  */
  readonly remediationTemplateId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_remediation#remediation_type ConfigRemediation#remediation_type}
  */
  readonly remediationType: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_remediation#timeouts ConfigRemediation#timeouts}
  */
  readonly timeouts?: ConfigRemediationTimeouts;
}
export interface ConfigRemediationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_remediation#create ConfigRemediation#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_remediation#delete ConfigRemediation#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_remediation#update ConfigRemediation#update}
  */
  readonly update?: string;
}

export function configRemediationTimeoutsToTerraform(struct?: ConfigRemediationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function configRemediationTimeoutsToHclTerraform(struct?: ConfigRemediationTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigRemediationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigRemediationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigRemediationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
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

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_remediation alicloud_config_remediation}
*/
export class ConfigRemediation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_config_remediation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigRemediation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigRemediation to import
  * @param importFromId The id of the existing ConfigRemediation that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_remediation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigRemediation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_config_remediation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/config_remediation alicloud_config_remediation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigRemediationConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigRemediationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_config_remediation',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configRuleId = config.configRuleId;
    this._id = config.id;
    this._invokeType = config.invokeType;
    this._params = config.params;
    this._remediationSourceType = config.remediationSourceType;
    this._remediationTemplateId = config.remediationTemplateId;
    this._remediationType = config.remediationType;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_rule_id - computed: false, optional: false, required: true
  private _configRuleId?: string; 
  public get configRuleId() {
    return this.getStringAttribute('config_rule_id');
  }
  public set configRuleId(value: string) {
    this._configRuleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configRuleIdInput() {
    return this._configRuleId;
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

  // invoke_type - computed: false, optional: false, required: true
  private _invokeType?: string; 
  public get invokeType() {
    return this.getStringAttribute('invoke_type');
  }
  public set invokeType(value: string) {
    this._invokeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get invokeTypeInput() {
    return this._invokeType;
  }

  // params - computed: false, optional: false, required: true
  private _params?: string; 
  public get params() {
    return this.getStringAttribute('params');
  }
  public set params(value: string) {
    this._params = value;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params;
  }

  // remediation_id - computed: true, optional: false, required: false
  public get remediationId() {
    return this.getStringAttribute('remediation_id');
  }

  // remediation_source_type - computed: true, optional: true, required: false
  private _remediationSourceType?: string; 
  public get remediationSourceType() {
    return this.getStringAttribute('remediation_source_type');
  }
  public set remediationSourceType(value: string) {
    this._remediationSourceType = value;
  }
  public resetRemediationSourceType() {
    this._remediationSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationSourceTypeInput() {
    return this._remediationSourceType;
  }

  // remediation_template_id - computed: false, optional: false, required: true
  private _remediationTemplateId?: string; 
  public get remediationTemplateId() {
    return this.getStringAttribute('remediation_template_id');
  }
  public set remediationTemplateId(value: string) {
    this._remediationTemplateId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationTemplateIdInput() {
    return this._remediationTemplateId;
  }

  // remediation_type - computed: false, optional: false, required: true
  private _remediationType?: string; 
  public get remediationType() {
    return this.getStringAttribute('remediation_type');
  }
  public set remediationType(value: string) {
    this._remediationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationTypeInput() {
    return this._remediationType;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConfigRemediationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConfigRemediationTimeouts) {
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
      config_rule_id: cdktf.stringToTerraform(this._configRuleId),
      id: cdktf.stringToTerraform(this._id),
      invoke_type: cdktf.stringToTerraform(this._invokeType),
      params: cdktf.stringToTerraform(this._params),
      remediation_source_type: cdktf.stringToTerraform(this._remediationSourceType),
      remediation_template_id: cdktf.stringToTerraform(this._remediationTemplateId),
      remediation_type: cdktf.stringToTerraform(this._remediationType),
      timeouts: configRemediationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config_rule_id: {
        value: cdktf.stringToHclTerraform(this._configRuleId),
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
      invoke_type: {
        value: cdktf.stringToHclTerraform(this._invokeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      params: {
        value: cdktf.stringToHclTerraform(this._params),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remediation_source_type: {
        value: cdktf.stringToHclTerraform(this._remediationSourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remediation_template_id: {
        value: cdktf.stringToHclTerraform(this._remediationTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remediation_type: {
        value: cdktf.stringToHclTerraform(this._remediationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: configRemediationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigRemediationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
