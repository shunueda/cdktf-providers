// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dcdn_domain_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcdnDomainConfigAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dcdn_domain_config#domain_name DcdnDomainConfigA#domain_name}
  */
  readonly domainName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dcdn_domain_config#function_name DcdnDomainConfigA#function_name}
  */
  readonly functionName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dcdn_domain_config#id DcdnDomainConfigA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dcdn_domain_config#parent_id DcdnDomainConfigA#parent_id}
  */
  readonly parentId?: string;
  /**
  * function_args block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dcdn_domain_config#function_args DcdnDomainConfigA#function_args}
  */
  readonly functionArgs: DcdnDomainConfigFunctionArgs[] | cdktf.IResolvable;
}
export interface DcdnDomainConfigFunctionArgs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dcdn_domain_config#arg_name DcdnDomainConfigA#arg_name}
  */
  readonly argName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dcdn_domain_config#arg_value DcdnDomainConfigA#arg_value}
  */
  readonly argValue: string;
}

export function dcdnDomainConfigFunctionArgsToTerraform(struct?: DcdnDomainConfigFunctionArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    arg_name: cdktf.stringToTerraform(struct!.argName),
    arg_value: cdktf.stringToTerraform(struct!.argValue),
  }
}


export function dcdnDomainConfigFunctionArgsToHclTerraform(struct?: DcdnDomainConfigFunctionArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    arg_name: {
      value: cdktf.stringToHclTerraform(struct!.argName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    arg_value: {
      value: cdktf.stringToHclTerraform(struct!.argValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DcdnDomainConfigFunctionArgsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DcdnDomainConfigFunctionArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._argName !== undefined) {
      hasAnyValues = true;
      internalValueResult.argName = this._argName;
    }
    if (this._argValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.argValue = this._argValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DcdnDomainConfigFunctionArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._argName = undefined;
      this._argValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._argName = value.argName;
      this._argValue = value.argValue;
    }
  }

  // arg_name - computed: false, optional: false, required: true
  private _argName?: string; 
  public get argName() {
    return this.getStringAttribute('arg_name');
  }
  public set argName(value: string) {
    this._argName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argNameInput() {
    return this._argName;
  }

  // arg_value - computed: false, optional: false, required: true
  private _argValue?: string; 
  public get argValue() {
    return this.getStringAttribute('arg_value');
  }
  public set argValue(value: string) {
    this._argValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argValueInput() {
    return this._argValue;
  }
}

export class DcdnDomainConfigFunctionArgsList extends cdktf.ComplexList {
  public internalValue? : DcdnDomainConfigFunctionArgs[] | cdktf.IResolvable

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
  public get(index: number): DcdnDomainConfigFunctionArgsOutputReference {
    return new DcdnDomainConfigFunctionArgsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dcdn_domain_config alicloud_dcdn_domain_config}
*/
export class DcdnDomainConfigA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dcdn_domain_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcdnDomainConfigA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcdnDomainConfigA to import
  * @param importFromId The id of the existing DcdnDomainConfigA that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dcdn_domain_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcdnDomainConfigA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dcdn_domain_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/dcdn_domain_config alicloud_dcdn_domain_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcdnDomainConfigAConfig
  */
  public constructor(scope: Construct, id: string, config: DcdnDomainConfigAConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dcdn_domain_config',
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
    this._domainName = config.domainName;
    this._functionName = config.functionName;
    this._id = config.id;
    this._parentId = config.parentId;
    this._functionArgs.internalValue = config.functionArgs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config_id - computed: true, optional: false, required: false
  public get configId() {
    return this.getStringAttribute('config_id');
  }

  // domain_name - computed: false, optional: false, required: true
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // function_name - computed: false, optional: false, required: true
  private _functionName?: string; 
  public get functionName() {
    return this.getStringAttribute('function_name');
  }
  public set functionName(value: string) {
    this._functionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionNameInput() {
    return this._functionName;
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

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // function_args - computed: false, optional: false, required: true
  private _functionArgs = new DcdnDomainConfigFunctionArgsList(this, "function_args", true);
  public get functionArgs() {
    return this._functionArgs;
  }
  public putFunctionArgs(value: DcdnDomainConfigFunctionArgs[] | cdktf.IResolvable) {
    this._functionArgs.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get functionArgsInput() {
    return this._functionArgs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_name: cdktf.stringToTerraform(this._domainName),
      function_name: cdktf.stringToTerraform(this._functionName),
      id: cdktf.stringToTerraform(this._id),
      parent_id: cdktf.stringToTerraform(this._parentId),
      function_args: cdktf.listMapper(dcdnDomainConfigFunctionArgsToTerraform, true)(this._functionArgs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_name: {
        value: cdktf.stringToHclTerraform(this._functionName),
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
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      function_args: {
        value: cdktf.listMapperHcl(dcdnDomainConfigFunctionArgsToHclTerraform, true)(this._functionArgs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DcdnDomainConfigFunctionArgsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
