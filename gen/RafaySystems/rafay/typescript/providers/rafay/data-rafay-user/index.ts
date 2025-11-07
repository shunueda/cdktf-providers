// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRafayUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user#api_secret DataRafayUser#api_secret}
  */
  readonly apiSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user#apikey DataRafayUser#apikey}
  */
  readonly apikey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user#console_access DataRafayUser#console_access}
  */
  readonly consoleAccess?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user#first_name DataRafayUser#first_name}
  */
  readonly firstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user#generate_apikey DataRafayUser#generate_apikey}
  */
  readonly generateApikey?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user#groups DataRafayUser#groups}
  */
  readonly groups?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user#id DataRafayUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user#last_name DataRafayUser#last_name}
  */
  readonly lastName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user#phone DataRafayUser#phone}
  */
  readonly phone?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user#user_name DataRafayUser#user_name}
  */
  readonly userName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user#timeouts DataRafayUser#timeouts}
  */
  readonly timeouts?: DataRafayUserTimeouts;
}
export interface DataRafayUserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user#read DataRafayUser#read}
  */
  readonly read?: string;
}

export function dataRafayUserTimeoutsToTerraform(struct?: DataRafayUserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read: cdktf.stringToTerraform(struct!.read),
  }
}


export function dataRafayUserTimeoutsToHclTerraform(struct?: DataRafayUserTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataRafayUserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRafayUserTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRafayUserTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._read = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._read = value.read;
    }
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user rafay_user}
*/
export class DataRafayUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRafayUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRafayUser to import
  * @param importFromId The id of the existing DataRafayUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRafayUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.52/docs/data-sources/user rafay_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRafayUserConfig
  */
  public constructor(scope: Construct, id: string, config: DataRafayUserConfig) {
    super(scope, id, {
      terraformResourceType: 'rafay_user',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiSecret = config.apiSecret;
    this._apikey = config.apikey;
    this._consoleAccess = config.consoleAccess;
    this._firstName = config.firstName;
    this._generateApikey = config.generateApikey;
    this._groups = config.groups;
    this._id = config.id;
    this._lastName = config.lastName;
    this._phone = config.phone;
    this._userName = config.userName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_secret - computed: true, optional: true, required: false
  private _apiSecret?: string; 
  public get apiSecret() {
    return this.getStringAttribute('api_secret');
  }
  public set apiSecret(value: string) {
    this._apiSecret = value;
  }
  public resetApiSecret() {
    this._apiSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiSecretInput() {
    return this._apiSecret;
  }

  // apikey - computed: true, optional: true, required: false
  private _apikey?: string; 
  public get apikey() {
    return this.getStringAttribute('apikey');
  }
  public set apikey(value: string) {
    this._apikey = value;
  }
  public resetApikey() {
    this._apikey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apikeyInput() {
    return this._apikey;
  }

  // console_access - computed: false, optional: true, required: false
  private _consoleAccess?: boolean | cdktf.IResolvable; 
  public get consoleAccess() {
    return this.getBooleanAttribute('console_access');
  }
  public set consoleAccess(value: boolean | cdktf.IResolvable) {
    this._consoleAccess = value;
  }
  public resetConsoleAccess() {
    this._consoleAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleAccessInput() {
    return this._consoleAccess;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
  }

  // generate_apikey - computed: false, optional: true, required: false
  private _generateApikey?: boolean | cdktf.IResolvable; 
  public get generateApikey() {
    return this.getBooleanAttribute('generate_apikey');
  }
  public set generateApikey(value: boolean | cdktf.IResolvable) {
    this._generateApikey = value;
  }
  public resetGenerateApikey() {
    this._generateApikey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateApikeyInput() {
    return this._generateApikey;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
  }

  // phone - computed: false, optional: true, required: false
  private _phone?: string; 
  public get phone() {
    return this.getStringAttribute('phone');
  }
  public set phone(value: string) {
    this._phone = value;
  }
  public resetPhone() {
    this._phone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneInput() {
    return this._phone;
  }

  // user_name - computed: false, optional: false, required: true
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataRafayUserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataRafayUserTimeouts) {
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
      api_secret: cdktf.stringToTerraform(this._apiSecret),
      apikey: cdktf.stringToTerraform(this._apikey),
      console_access: cdktf.booleanToTerraform(this._consoleAccess),
      first_name: cdktf.stringToTerraform(this._firstName),
      generate_apikey: cdktf.booleanToTerraform(this._generateApikey),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      id: cdktf.stringToTerraform(this._id),
      last_name: cdktf.stringToTerraform(this._lastName),
      phone: cdktf.stringToTerraform(this._phone),
      user_name: cdktf.stringToTerraform(this._userName),
      timeouts: dataRafayUserTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_secret: {
        value: cdktf.stringToHclTerraform(this._apiSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      apikey: {
        value: cdktf.stringToHclTerraform(this._apikey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      console_access: {
        value: cdktf.booleanToHclTerraform(this._consoleAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_apikey: {
        value: cdktf.booleanToHclTerraform(this._generateApikey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phone: {
        value: cdktf.stringToHclTerraform(this._phone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_name: {
        value: cdktf.stringToHclTerraform(this._userName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dataRafayUserTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataRafayUserTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
