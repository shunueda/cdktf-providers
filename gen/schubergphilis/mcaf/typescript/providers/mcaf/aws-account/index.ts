// https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_account#email AwsAccount#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_account#id AwsAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_account#name AwsAccount#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_account#organizational_unit AwsAccount#organizational_unit}
  */
  readonly organizationalUnit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_account#organizational_unit_path AwsAccount#organizational_unit_path}
  */
  readonly organizationalUnitPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_account#provisioned_product_name AwsAccount#provisioned_product_name}
  */
  readonly provisionedProductName?: string;
  /**
  * sso block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_account#sso AwsAccount#sso}
  */
  readonly sso: AwsAccountSso;
}
export interface AwsAccountSso {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_account#email AwsAccount#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_account#firstname AwsAccount#firstname}
  */
  readonly firstname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_account#lastname AwsAccount#lastname}
  */
  readonly lastname: string;
}

export function awsAccountSsoToTerraform(struct?: AwsAccountSsoOutputReference | AwsAccountSso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
    firstname: cdktf.stringToTerraform(struct!.firstname),
    lastname: cdktf.stringToTerraform(struct!.lastname),
  }
}


export function awsAccountSsoToHclTerraform(struct?: AwsAccountSsoOutputReference | AwsAccountSso): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firstname: {
      value: cdktf.stringToHclTerraform(struct!.firstname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lastname: {
      value: cdktf.stringToHclTerraform(struct!.lastname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAccountSsoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAccountSso | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._firstname !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstname = this._firstname;
    }
    if (this._lastname !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastname = this._lastname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAccountSso | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._email = undefined;
      this._firstname = undefined;
      this._lastname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._email = value.email;
      this._firstname = value.firstname;
      this._lastname = value.lastname;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // firstname - computed: false, optional: false, required: true
  private _firstname?: string; 
  public get firstname() {
    return this.getStringAttribute('firstname');
  }
  public set firstname(value: string) {
    this._firstname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get firstnameInput() {
    return this._firstname;
  }

  // lastname - computed: false, optional: false, required: true
  private _lastname?: string; 
  public get lastname() {
    return this.getStringAttribute('lastname');
  }
  public set lastname(value: string) {
    this._lastname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lastnameInput() {
    return this._lastname;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_account mcaf_aws_account}
*/
export class AwsAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mcaf_aws_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAccount to import
  * @param importFromId The id of the existing AwsAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mcaf_aws_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schubergphilis/mcaf/0.4.3/docs/resources/aws_account mcaf_aws_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAccountConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'mcaf_aws_account',
      terraformGeneratorMetadata: {
        providerName: 'mcaf',
        providerVersion: '0.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._email = config.email;
    this._id = config.id;
    this._name = config.name;
    this._organizationalUnit = config.organizationalUnit;
    this._organizationalUnitPath = config.organizationalUnitPath;
    this._provisionedProductName = config.provisionedProductName;
    this._sso.internalValue = config.sso;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: true, optional: false, required: false
  public get accountId() {
    return this.getStringAttribute('account_id');
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // organizational_unit - computed: false, optional: true, required: false
  private _organizationalUnit?: string; 
  public get organizationalUnit() {
    return this.getStringAttribute('organizational_unit');
  }
  public set organizationalUnit(value: string) {
    this._organizationalUnit = value;
  }
  public resetOrganizationalUnit() {
    this._organizationalUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitInput() {
    return this._organizationalUnit;
  }

  // organizational_unit_path - computed: false, optional: true, required: false
  private _organizationalUnitPath?: string; 
  public get organizationalUnitPath() {
    return this.getStringAttribute('organizational_unit_path');
  }
  public set organizationalUnitPath(value: string) {
    this._organizationalUnitPath = value;
  }
  public resetOrganizationalUnitPath() {
    this._organizationalUnitPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationalUnitPathInput() {
    return this._organizationalUnitPath;
  }

  // provisioned_product_name - computed: true, optional: true, required: false
  private _provisionedProductName?: string; 
  public get provisionedProductName() {
    return this.getStringAttribute('provisioned_product_name');
  }
  public set provisionedProductName(value: string) {
    this._provisionedProductName = value;
  }
  public resetProvisionedProductName() {
    this._provisionedProductName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionedProductNameInput() {
    return this._provisionedProductName;
  }

  // sso - computed: false, optional: false, required: true
  private _sso = new AwsAccountSsoOutputReference(this, "sso");
  public get sso() {
    return this._sso;
  }
  public putSso(value: AwsAccountSso) {
    this._sso.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoInput() {
    return this._sso.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organizational_unit: cdktf.stringToTerraform(this._organizationalUnit),
      organizational_unit_path: cdktf.stringToTerraform(this._organizationalUnitPath),
      provisioned_product_name: cdktf.stringToTerraform(this._provisionedProductName),
      sso: awsAccountSsoToTerraform(this._sso.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_unit: {
        value: cdktf.stringToHclTerraform(this._organizationalUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      organizational_unit_path: {
        value: cdktf.stringToHclTerraform(this._organizationalUnitPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provisioned_product_name: {
        value: cdktf.stringToHclTerraform(this._provisionedProductName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sso: {
        value: awsAccountSsoToHclTerraform(this._sso.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsAccountSsoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
