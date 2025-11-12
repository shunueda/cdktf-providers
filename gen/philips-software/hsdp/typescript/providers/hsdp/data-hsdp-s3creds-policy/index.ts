// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/s3creds_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHsdpS3CredsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/s3creds_policy#id DataHsdpS3CredsPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/s3creds_policy#password DataHsdpS3CredsPolicy#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/s3creds_policy#product_key DataHsdpS3CredsPolicy#product_key}
  */
  readonly productKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/s3creds_policy#username DataHsdpS3CredsPolicy#username}
  */
  readonly username?: string;
  /**
  * filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/s3creds_policy#filter DataHsdpS3CredsPolicy#filter}
  */
  readonly filter?: DataHsdpS3CredsPolicyFilter;
}
export interface DataHsdpS3CredsPolicyFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/s3creds_policy#group_name DataHsdpS3CredsPolicy#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/s3creds_policy#id DataHsdpS3CredsPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/s3creds_policy#managing_org DataHsdpS3CredsPolicy#managing_org}
  */
  readonly managingOrg?: string;
}

export function dataHsdpS3CredsPolicyFilterToTerraform(struct?: DataHsdpS3CredsPolicyFilterOutputReference | DataHsdpS3CredsPolicyFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    id: cdktf.stringToTerraform(struct!.id),
    managing_org: cdktf.stringToTerraform(struct!.managingOrg),
  }
}


export function dataHsdpS3CredsPolicyFilterToHclTerraform(struct?: DataHsdpS3CredsPolicyFilterOutputReference | DataHsdpS3CredsPolicyFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managing_org: {
      value: cdktf.stringToHclTerraform(struct!.managingOrg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataHsdpS3CredsPolicyFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataHsdpS3CredsPolicyFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._managingOrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.managingOrg = this._managingOrg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataHsdpS3CredsPolicyFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._groupName = undefined;
      this._id = undefined;
      this._managingOrg = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._groupName = value.groupName;
      this._id = value.id;
      this._managingOrg = value.managingOrg;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // id - computed: false, optional: true, required: false
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

  // managing_org - computed: false, optional: true, required: false
  private _managingOrg?: string; 
  public get managingOrg() {
    return this.getStringAttribute('managing_org');
  }
  public set managingOrg(value: string) {
    this._managingOrg = value;
  }
  public resetManagingOrg() {
    this._managingOrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managingOrgInput() {
    return this._managingOrg;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/s3creds_policy hsdp_s3creds_policy}
*/
export class DataHsdpS3CredsPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_s3creds_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHsdpS3CredsPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHsdpS3CredsPolicy to import
  * @param importFromId The id of the existing DataHsdpS3CredsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/s3creds_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHsdpS3CredsPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_s3creds_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/s3creds_policy hsdp_s3creds_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHsdpS3CredsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataHsdpS3CredsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_s3creds_policy',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
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
    this._password = config.password;
    this._productKey = config.productKey;
    this._username = config.username;
    this._filter.internalValue = config.filter;
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

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // policies - computed: true, optional: false, required: false
  public get policies() {
    return this.getStringAttribute('policies');
  }

  // product_key - computed: false, optional: false, required: true
  private _productKey?: string; 
  public get productKey() {
    return this.getStringAttribute('product_key');
  }
  public set productKey(value: string) {
    this._productKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get productKeyInput() {
    return this._productKey;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new DataHsdpS3CredsPolicyFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: DataHsdpS3CredsPolicyFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      password: cdktf.stringToTerraform(this._password),
      product_key: cdktf.stringToTerraform(this._productKey),
      username: cdktf.stringToTerraform(this._username),
      filter: dataHsdpS3CredsPolicyFilterToTerraform(this._filter.internalValue),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product_key: {
        value: cdktf.stringToHclTerraform(this._productKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: dataHsdpS3CredsPolicyFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DataHsdpS3CredsPolicyFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
