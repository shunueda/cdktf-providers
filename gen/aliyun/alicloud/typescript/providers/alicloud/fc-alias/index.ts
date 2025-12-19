// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fc_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FcAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fc_alias#alias_name FcAlias#alias_name}
  */
  readonly aliasName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fc_alias#description FcAlias#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fc_alias#id FcAlias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fc_alias#service_name FcAlias#service_name}
  */
  readonly serviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fc_alias#service_version FcAlias#service_version}
  */
  readonly serviceVersion: string;
  /**
  * routing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fc_alias#routing_config FcAlias#routing_config}
  */
  readonly routingConfig?: FcAliasRoutingConfig;
}
export interface FcAliasRoutingConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fc_alias#additional_version_weights FcAlias#additional_version_weights}
  */
  readonly additionalVersionWeights?: { [key: string]: number };
}

export function fcAliasRoutingConfigToTerraform(struct?: FcAliasRoutingConfigOutputReference | FcAliasRoutingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_version_weights: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.additionalVersionWeights),
  }
}


export function fcAliasRoutingConfigToHclTerraform(struct?: FcAliasRoutingConfigOutputReference | FcAliasRoutingConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_version_weights: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.additionalVersionWeights),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FcAliasRoutingConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FcAliasRoutingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalVersionWeights !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVersionWeights = this._additionalVersionWeights;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FcAliasRoutingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalVersionWeights = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalVersionWeights = value.additionalVersionWeights;
    }
  }

  // additional_version_weights - computed: false, optional: true, required: false
  private _additionalVersionWeights?: { [key: string]: number }; 
  public get additionalVersionWeights() {
    return this.getNumberMapAttribute('additional_version_weights');
  }
  public set additionalVersionWeights(value: { [key: string]: number }) {
    this._additionalVersionWeights = value;
  }
  public resetAdditionalVersionWeights() {
    this._additionalVersionWeights = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVersionWeightsInput() {
    return this._additionalVersionWeights;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fc_alias alicloud_fc_alias}
*/
export class FcAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_fc_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FcAlias resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FcAlias to import
  * @param importFromId The id of the existing FcAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fc_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FcAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_fc_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/fc_alias alicloud_fc_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FcAliasConfig
  */
  public constructor(scope: Construct, id: string, config: FcAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_fc_alias',
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
    this._aliasName = config.aliasName;
    this._description = config.description;
    this._id = config.id;
    this._serviceName = config.serviceName;
    this._serviceVersion = config.serviceVersion;
    this._routingConfig.internalValue = config.routingConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alias_name - computed: false, optional: false, required: true
  private _aliasName?: string; 
  public get aliasName() {
    return this.getStringAttribute('alias_name');
  }
  public set aliasName(value: string) {
    this._aliasName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasNameInput() {
    return this._aliasName;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_version - computed: false, optional: false, required: true
  private _serviceVersion?: string; 
  public get serviceVersion() {
    return this.getStringAttribute('service_version');
  }
  public set serviceVersion(value: string) {
    this._serviceVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceVersionInput() {
    return this._serviceVersion;
  }

  // routing_config - computed: false, optional: true, required: false
  private _routingConfig = new FcAliasRoutingConfigOutputReference(this, "routing_config");
  public get routingConfig() {
    return this._routingConfig;
  }
  public putRoutingConfig(value: FcAliasRoutingConfig) {
    this._routingConfig.internalValue = value;
  }
  public resetRoutingConfig() {
    this._routingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routingConfigInput() {
    return this._routingConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alias_name: cdktf.stringToTerraform(this._aliasName),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      service_name: cdktf.stringToTerraform(this._serviceName),
      service_version: cdktf.stringToTerraform(this._serviceVersion),
      routing_config: fcAliasRoutingConfigToTerraform(this._routingConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alias_name: {
        value: cdktf.stringToHclTerraform(this._aliasName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_version: {
        value: cdktf.stringToHclTerraform(this._serviceVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routing_config: {
        value: fcAliasRoutingConfigToHclTerraform(this._routingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FcAliasRoutingConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
