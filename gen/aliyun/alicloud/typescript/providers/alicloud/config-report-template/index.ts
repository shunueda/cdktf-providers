// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConfigReportTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#id ConfigReportTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#report_file_formats ConfigReportTemplate#report_file_formats}
  */
  readonly reportFileFormats?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#report_granularity ConfigReportTemplate#report_granularity}
  */
  readonly reportGranularity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#report_language ConfigReportTemplate#report_language}
  */
  readonly reportLanguage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#report_template_description ConfigReportTemplate#report_template_description}
  */
  readonly reportTemplateDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#report_template_name ConfigReportTemplate#report_template_name}
  */
  readonly reportTemplateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#subscription_frequency ConfigReportTemplate#subscription_frequency}
  */
  readonly subscriptionFrequency?: string;
  /**
  * report_scope block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#report_scope ConfigReportTemplate#report_scope}
  */
  readonly reportScope?: ConfigReportTemplateReportScope[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#timeouts ConfigReportTemplate#timeouts}
  */
  readonly timeouts?: ConfigReportTemplateTimeouts;
}
export interface ConfigReportTemplateReportScope {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#key ConfigReportTemplate#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#match_type ConfigReportTemplate#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#value ConfigReportTemplate#value}
  */
  readonly value?: string;
}

export function configReportTemplateReportScopeToTerraform(struct?: ConfigReportTemplateReportScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function configReportTemplateReportScopeToHclTerraform(struct?: ConfigReportTemplateReportScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ConfigReportTemplateReportScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ConfigReportTemplateReportScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ConfigReportTemplateReportScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._matchType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._matchType = value.matchType;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ConfigReportTemplateReportScopeList extends cdktf.ComplexList {
  public internalValue? : ConfigReportTemplateReportScope[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ConfigReportTemplateReportScopeOutputReference {
    return new ConfigReportTemplateReportScopeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ConfigReportTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#create ConfigReportTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#delete ConfigReportTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#update ConfigReportTemplate#update}
  */
  readonly update?: string;
}

export function configReportTemplateTimeoutsToTerraform(struct?: ConfigReportTemplateTimeouts | cdktf.IResolvable): any {
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


export function configReportTemplateTimeoutsToHclTerraform(struct?: ConfigReportTemplateTimeouts | cdktf.IResolvable): any {
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

export class ConfigReportTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ConfigReportTemplateTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ConfigReportTemplateTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template alicloud_config_report_template}
*/
export class ConfigReportTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_config_report_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConfigReportTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConfigReportTemplate to import
  * @param importFromId The id of the existing ConfigReportTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConfigReportTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_config_report_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/config_report_template alicloud_config_report_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConfigReportTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: ConfigReportTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_config_report_template',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
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
    this._reportFileFormats = config.reportFileFormats;
    this._reportGranularity = config.reportGranularity;
    this._reportLanguage = config.reportLanguage;
    this._reportTemplateDescription = config.reportTemplateDescription;
    this._reportTemplateName = config.reportTemplateName;
    this._subscriptionFrequency = config.subscriptionFrequency;
    this._reportScope.internalValue = config.reportScope;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // report_file_formats - computed: false, optional: true, required: false
  private _reportFileFormats?: string; 
  public get reportFileFormats() {
    return this.getStringAttribute('report_file_formats');
  }
  public set reportFileFormats(value: string) {
    this._reportFileFormats = value;
  }
  public resetReportFileFormats() {
    this._reportFileFormats = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportFileFormatsInput() {
    return this._reportFileFormats;
  }

  // report_granularity - computed: false, optional: true, required: false
  private _reportGranularity?: string; 
  public get reportGranularity() {
    return this.getStringAttribute('report_granularity');
  }
  public set reportGranularity(value: string) {
    this._reportGranularity = value;
  }
  public resetReportGranularity() {
    this._reportGranularity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportGranularityInput() {
    return this._reportGranularity;
  }

  // report_language - computed: false, optional: true, required: false
  private _reportLanguage?: string; 
  public get reportLanguage() {
    return this.getStringAttribute('report_language');
  }
  public set reportLanguage(value: string) {
    this._reportLanguage = value;
  }
  public resetReportLanguage() {
    this._reportLanguage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportLanguageInput() {
    return this._reportLanguage;
  }

  // report_template_description - computed: false, optional: true, required: false
  private _reportTemplateDescription?: string; 
  public get reportTemplateDescription() {
    return this.getStringAttribute('report_template_description');
  }
  public set reportTemplateDescription(value: string) {
    this._reportTemplateDescription = value;
  }
  public resetReportTemplateDescription() {
    this._reportTemplateDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportTemplateDescriptionInput() {
    return this._reportTemplateDescription;
  }

  // report_template_name - computed: false, optional: false, required: true
  private _reportTemplateName?: string; 
  public get reportTemplateName() {
    return this.getStringAttribute('report_template_name');
  }
  public set reportTemplateName(value: string) {
    this._reportTemplateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get reportTemplateNameInput() {
    return this._reportTemplateName;
  }

  // subscription_frequency - computed: false, optional: true, required: false
  private _subscriptionFrequency?: string; 
  public get subscriptionFrequency() {
    return this.getStringAttribute('subscription_frequency');
  }
  public set subscriptionFrequency(value: string) {
    this._subscriptionFrequency = value;
  }
  public resetSubscriptionFrequency() {
    this._subscriptionFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionFrequencyInput() {
    return this._subscriptionFrequency;
  }

  // report_scope - computed: false, optional: true, required: false
  private _reportScope = new ConfigReportTemplateReportScopeList(this, "report_scope", false);
  public get reportScope() {
    return this._reportScope;
  }
  public putReportScope(value: ConfigReportTemplateReportScope[] | cdktf.IResolvable) {
    this._reportScope.internalValue = value;
  }
  public resetReportScope() {
    this._reportScope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportScopeInput() {
    return this._reportScope.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ConfigReportTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ConfigReportTemplateTimeouts) {
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
      report_file_formats: cdktf.stringToTerraform(this._reportFileFormats),
      report_granularity: cdktf.stringToTerraform(this._reportGranularity),
      report_language: cdktf.stringToTerraform(this._reportLanguage),
      report_template_description: cdktf.stringToTerraform(this._reportTemplateDescription),
      report_template_name: cdktf.stringToTerraform(this._reportTemplateName),
      subscription_frequency: cdktf.stringToTerraform(this._subscriptionFrequency),
      report_scope: cdktf.listMapper(configReportTemplateReportScopeToTerraform, true)(this._reportScope.internalValue),
      timeouts: configReportTemplateTimeoutsToTerraform(this._timeouts.internalValue),
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
      report_file_formats: {
        value: cdktf.stringToHclTerraform(this._reportFileFormats),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_granularity: {
        value: cdktf.stringToHclTerraform(this._reportGranularity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_language: {
        value: cdktf.stringToHclTerraform(this._reportLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_template_description: {
        value: cdktf.stringToHclTerraform(this._reportTemplateDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_template_name: {
        value: cdktf.stringToHclTerraform(this._reportTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscription_frequency: {
        value: cdktf.stringToHclTerraform(this._subscriptionFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      report_scope: {
        value: cdktf.listMapperHcl(configReportTemplateReportScopeToHclTerraform, true)(this._reportScope.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ConfigReportTemplateReportScopeList",
      },
      timeouts: {
        value: configReportTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ConfigReportTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
