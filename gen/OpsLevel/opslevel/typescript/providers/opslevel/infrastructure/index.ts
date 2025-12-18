// https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/infrastructure
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InfrastructureConfig extends cdktf.TerraformMetaArguments {
  /**
  * The aliases for the infrastructure resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/infrastructure#aliases Infrastructure#aliases}
  */
  readonly aliases?: string[];
  /**
  * The data of the infrastructure resource in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/infrastructure#data Infrastructure#data}
  */
  readonly data: string;
  /**
  * The id of the team that owns the infrastructure resource. Does not support aliases!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/infrastructure#owner Infrastructure#owner}
  */
  readonly owner: string;
  /**
  * The provider specific data for the infrastructure resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/infrastructure#provider_data Infrastructure#provider_data}
  */
  readonly providerData?: InfrastructureProviderData;
  /**
  * The schema of the infrastructure resource that determines its data specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/infrastructure#schema Infrastructure#schema}
  */
  readonly schema: string;
}
export interface InfrastructureProviderData {
  /**
  * The canonical account name for the provider of the infrastructure resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/infrastructure#account Infrastructure#account}
  */
  readonly account: string;
  /**
  * The name of the provider of the infrastructure resource. (eg. AWS, GCP, Azure)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/infrastructure#name Infrastructure#name}
  */
  readonly name?: string;
  /**
  * The type of the infrastructure resource as defined by its provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/infrastructure#type Infrastructure#type}
  */
  readonly type?: string;
  /**
  * The url for the provider of the infrastructure resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/infrastructure#url Infrastructure#url}
  */
  readonly url?: string;
}

export function infrastructureProviderDataToTerraform(struct?: InfrastructureProviderData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.stringToTerraform(struct!.account),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function infrastructureProviderDataToHclTerraform(struct?: InfrastructureProviderData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.stringToHclTerraform(struct!.account),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfrastructureProviderDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InfrastructureProviderData | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfrastructureProviderData | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account = undefined;
      this._name = undefined;
      this._type = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account = value.account;
      this._name = value.name;
      this._type = value.type;
      this._url = value.url;
    }
  }

  // account - computed: false, optional: false, required: true
  private _account?: string; 
  public get account() {
    return this.getStringAttribute('account');
  }
  public set account(value: string) {
    this._account = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/infrastructure opslevel_infrastructure}
*/
export class Infrastructure extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_infrastructure";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Infrastructure resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Infrastructure to import
  * @param importFromId The id of the existing Infrastructure that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/infrastructure#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Infrastructure to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_infrastructure", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/infrastructure opslevel_infrastructure} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InfrastructureConfig
  */
  public constructor(scope: Construct, id: string, config: InfrastructureConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_infrastructure',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.8.1',
        providerVersionConstraint: '1.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliases = config.aliases;
    this._data = config.data;
    this._owner = config.owner;
    this._providerData.internalValue = config.providerData;
    this._schema = config.schema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return cdktf.Fn.tolist(this.getListAttribute('aliases'));
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // owner - computed: false, optional: false, required: true
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // provider_data - computed: false, optional: true, required: false
  private _providerData = new InfrastructureProviderDataOutputReference(this, "provider_data");
  public get providerData() {
    return this._providerData;
  }
  public putProviderData(value: InfrastructureProviderData) {
    this._providerData.internalValue = value;
  }
  public resetProviderData() {
    this._providerData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerDataInput() {
    return this._providerData.internalValue;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aliases),
      data: cdktf.stringToTerraform(this._data),
      owner: cdktf.stringToTerraform(this._owner),
      provider_data: infrastructureProviderDataToTerraform(this._providerData.internalValue),
      schema: cdktf.stringToTerraform(this._schema),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aliases),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      data: {
        value: cdktf.stringToHclTerraform(this._data),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_data: {
        value: infrastructureProviderDataToHclTerraform(this._providerData.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InfrastructureProviderData",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
