// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/controlcenter_account_factory_baseline_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControlcenterAccountFactoryBaselineConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/controlcenter_account_factory_baseline_config#id ControlcenterAccountFactoryBaselineConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Baseline name, which must be unique. Supports only English letters, numbers, Chinese characters, and symbols @, &, _, [], -. Combination of 1-25 Chinese or English characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/controlcenter_account_factory_baseline_config#name ControlcenterAccountFactoryBaselineConfig#name}
  */
  readonly name: string;
  /**
  * baseline_config_items block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/controlcenter_account_factory_baseline_config#baseline_config_items ControlcenterAccountFactoryBaselineConfig#baseline_config_items}
  */
  readonly baselineConfigItems?: ControlcenterAccountFactoryBaselineConfigBaselineConfigItems[] | cdktf.IResolvable;
}
export interface ControlcenterAccountFactoryBaselineConfigBaselineConfigItems {
  /**
  * Account factory baseline item configuration, different baseline items have different configuration parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/controlcenter_account_factory_baseline_config#configuration ControlcenterAccountFactoryBaselineConfig#configuration}
  */
  readonly configuration?: string;
  /**
  * Specifies the unique identifier for account factory baseline item, can only contain `english letters`, `digits`, and `@,._[]-:()()[]+=.`, with a length of 2-128 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/controlcenter_account_factory_baseline_config#identifier ControlcenterAccountFactoryBaselineConfig#identifier}
  */
  readonly identifier?: string;
}

export function controlcenterAccountFactoryBaselineConfigBaselineConfigItemsToTerraform(struct?: ControlcenterAccountFactoryBaselineConfigBaselineConfigItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    identifier: cdktf.stringToTerraform(struct!.identifier),
  }
}


export function controlcenterAccountFactoryBaselineConfigBaselineConfigItemsToHclTerraform(struct?: ControlcenterAccountFactoryBaselineConfigBaselineConfigItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    identifier: {
      value: cdktf.stringToHclTerraform(struct!.identifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ControlcenterAccountFactoryBaselineConfigBaselineConfigItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ControlcenterAccountFactoryBaselineConfigBaselineConfigItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._identifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifier = this._identifier;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ControlcenterAccountFactoryBaselineConfigBaselineConfigItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configuration = undefined;
      this._identifier = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configuration = value.configuration;
      this._identifier = value.identifier;
    }
  }

  // apply_count - computed: true, optional: false, required: false
  public get applyCount() {
    return this.getNumberAttribute('apply_count');
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // identifier - computed: false, optional: true, required: false
  private _identifier?: string; 
  public get identifier() {
    return this.getStringAttribute('identifier');
  }
  public set identifier(value: string) {
    this._identifier = value;
  }
  public resetIdentifier() {
    this._identifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierInput() {
    return this._identifier;
  }
}

export class ControlcenterAccountFactoryBaselineConfigBaselineConfigItemsList extends cdktf.ComplexList {
  public internalValue? : ControlcenterAccountFactoryBaselineConfigBaselineConfigItems[] | cdktf.IResolvable

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
  public get(index: number): ControlcenterAccountFactoryBaselineConfigBaselineConfigItemsOutputReference {
    return new ControlcenterAccountFactoryBaselineConfigBaselineConfigItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/controlcenter_account_factory_baseline_config tencentcloud_controlcenter_account_factory_baseline_config}
*/
export class ControlcenterAccountFactoryBaselineConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_controlcenter_account_factory_baseline_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ControlcenterAccountFactoryBaselineConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ControlcenterAccountFactoryBaselineConfig to import
  * @param importFromId The id of the existing ControlcenterAccountFactoryBaselineConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/controlcenter_account_factory_baseline_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ControlcenterAccountFactoryBaselineConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_controlcenter_account_factory_baseline_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.45/docs/resources/controlcenter_account_factory_baseline_config tencentcloud_controlcenter_account_factory_baseline_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControlcenterAccountFactoryBaselineConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ControlcenterAccountFactoryBaselineConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_controlcenter_account_factory_baseline_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.45',
        providerVersionConstraint: '1.82.45'
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
    this._name = config.name;
    this._baselineConfigItems.internalValue = config.baselineConfigItems;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // baseline_config_items - computed: false, optional: true, required: false
  private _baselineConfigItems = new ControlcenterAccountFactoryBaselineConfigBaselineConfigItemsList(this, "baseline_config_items", true);
  public get baselineConfigItems() {
    return this._baselineConfigItems;
  }
  public putBaselineConfigItems(value: ControlcenterAccountFactoryBaselineConfigBaselineConfigItems[] | cdktf.IResolvable) {
    this._baselineConfigItems.internalValue = value;
  }
  public resetBaselineConfigItems() {
    this._baselineConfigItems.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baselineConfigItemsInput() {
    return this._baselineConfigItems.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      baseline_config_items: cdktf.listMapper(controlcenterAccountFactoryBaselineConfigBaselineConfigItemsToTerraform, true)(this._baselineConfigItems.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      baseline_config_items: {
        value: cdktf.listMapperHcl(controlcenterAccountFactoryBaselineConfigBaselineConfigItemsToHclTerraform, true)(this._baselineConfigItems.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ControlcenterAccountFactoryBaselineConfigBaselineConfigItemsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
