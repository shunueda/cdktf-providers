// https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/api_token
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktaApiTokenConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the API token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/api_token#id DataOktaApiToken#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/api_token#network DataOktaApiToken#network}
  */
  readonly network?: DataOktaApiTokenNetwork;
}
export interface DataOktaApiTokenNetwork {
  /**
  * The IP address the excluded zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/api_token#exclude DataOktaApiToken#exclude}
  */
  readonly exclude?: string[];
  /**
  * The IP address the included zone.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/api_token#include DataOktaApiToken#include}
  */
  readonly include?: string[];
}

export function dataOktaApiTokenNetworkToTerraform(struct?: DataOktaApiTokenNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function dataOktaApiTokenNetworkToHclTerraform(struct?: DataOktaApiTokenNetwork | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataOktaApiTokenNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOktaApiTokenNetwork | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOktaApiTokenNetwork | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // connection - computed: true, optional: false, required: false
  public get connection() {
    return this.getStringAttribute('connection');
  }

  // exclude - computed: true, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: true, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/api_token okta_api_token}
*/
export class DataOktaApiToken extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_api_token";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktaApiToken resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktaApiToken to import
  * @param importFromId The id of the existing DataOktaApiToken that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/api_token#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktaApiToken to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_api_token", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.5.1/docs/data-sources/api_token okta_api_token} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktaApiTokenConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktaApiTokenConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_api_token',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.5.1',
        providerVersionConstraint: '6.5.1'
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
    this._network.internalValue = config.network;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_name - computed: true, optional: false, required: false
  public get clientName() {
    return this.getStringAttribute('client_name');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // user_id - computed: true, optional: false, required: false
  public get userId() {
    return this.getStringAttribute('user_id');
  }

  // network - computed: false, optional: true, required: false
  private _network = new DataOktaApiTokenNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: DataOktaApiTokenNetwork) {
    this._network.internalValue = value;
  }
  public resetNetwork() {
    this._network.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      network: dataOktaApiTokenNetworkToTerraform(this._network.internalValue),
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
      network: {
        value: dataOktaApiTokenNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataOktaApiTokenNetwork",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
