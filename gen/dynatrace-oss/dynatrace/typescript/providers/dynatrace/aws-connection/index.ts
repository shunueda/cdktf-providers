// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/aws_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/aws_connection#id AwsConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/aws_connection#name AwsConnection#name}
  */
  readonly name: string;
  /**
  * role_based_auth block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/aws_connection#role_based_auth AwsConnection#role_based_auth}
  */
  readonly roleBasedAuth?: AwsConnectionRoleBasedAuth;
  /**
  * web_identity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/aws_connection#web_identity AwsConnection#web_identity}
  */
  readonly webIdentity?: AwsConnectionWebIdentity;
}
export interface AwsConnectionRoleBasedAuth {
  /**
  * Dynatrace integrations that can use this connection. Possible values: `DA` (Data Acquisition Deprecated)`, `SVC:com.dynatrace.da` (Data Acquisition), `APP:dynatrace.biz.carbon` (Cost & Carbon Optimization) and `NONE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/aws_connection#consumers AwsConnection#consumers}
  */
  readonly consumers?: string[];
}

export function awsConnectionRoleBasedAuthToTerraform(struct?: AwsConnectionRoleBasedAuthOutputReference | AwsConnectionRoleBasedAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consumers),
  }
}


export function awsConnectionRoleBasedAuthToHclTerraform(struct?: AwsConnectionRoleBasedAuthOutputReference | AwsConnectionRoleBasedAuth): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.consumers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsConnectionRoleBasedAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsConnectionRoleBasedAuth | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumers !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumers = this._consumers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsConnectionRoleBasedAuth | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumers = value.consumers;
    }
  }

  // consumers - computed: false, optional: true, required: false
  private _consumers?: string[]; 
  public get consumers() {
    return cdktf.Fn.tolist(this.getListAttribute('consumers'));
  }
  public set consumers(value: string[]) {
    this._consumers = value;
  }
  public resetConsumers() {
    this._consumers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumersInput() {
    return this._consumers;
  }
}
export interface AwsConnectionWebIdentity {
  /**
  * Dynatrace integrations that can use this connection. Possible values: `APP:dynatrace.aws.connector` (AWS Connector) and `APP:dynatrace.biz.carbon` (Cost & Carbon Optimization)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/aws_connection#consumers AwsConnection#consumers}
  */
  readonly consumers: string[];
}

export function awsConnectionWebIdentityToTerraform(struct?: AwsConnectionWebIdentityOutputReference | AwsConnectionWebIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    consumers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.consumers),
  }
}


export function awsConnectionWebIdentityToHclTerraform(struct?: AwsConnectionWebIdentityOutputReference | AwsConnectionWebIdentity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    consumers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.consumers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsConnectionWebIdentityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsConnectionWebIdentity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._consumers !== undefined) {
      hasAnyValues = true;
      internalValueResult.consumers = this._consumers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsConnectionWebIdentity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._consumers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._consumers = value.consumers;
    }
  }

  // consumers - computed: false, optional: false, required: true
  private _consumers?: string[]; 
  public get consumers() {
    return cdktf.Fn.tolist(this.getListAttribute('consumers'));
  }
  public set consumers(value: string[]) {
    this._consumers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumersInput() {
    return this._consumers;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/aws_connection dynatrace_aws_connection}
*/
export class AwsConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_aws_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsConnection to import
  * @param importFromId The id of the existing AwsConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/aws_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_aws_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/aws_connection dynatrace_aws_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: AwsConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_aws_connection',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
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
    this._roleBasedAuth.internalValue = config.roleBasedAuth;
    this._webIdentity.internalValue = config.webIdentity;
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

  // role_based_auth - computed: false, optional: true, required: false
  private _roleBasedAuth = new AwsConnectionRoleBasedAuthOutputReference(this, "role_based_auth");
  public get roleBasedAuth() {
    return this._roleBasedAuth;
  }
  public putRoleBasedAuth(value: AwsConnectionRoleBasedAuth) {
    this._roleBasedAuth.internalValue = value;
  }
  public resetRoleBasedAuth() {
    this._roleBasedAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleBasedAuthInput() {
    return this._roleBasedAuth.internalValue;
  }

  // web_identity - computed: false, optional: true, required: false
  private _webIdentity = new AwsConnectionWebIdentityOutputReference(this, "web_identity");
  public get webIdentity() {
    return this._webIdentity;
  }
  public putWebIdentity(value: AwsConnectionWebIdentity) {
    this._webIdentity.internalValue = value;
  }
  public resetWebIdentity() {
    this._webIdentity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webIdentityInput() {
    return this._webIdentity.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      role_based_auth: awsConnectionRoleBasedAuthToTerraform(this._roleBasedAuth.internalValue),
      web_identity: awsConnectionWebIdentityToTerraform(this._webIdentity.internalValue),
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
      role_based_auth: {
        value: awsConnectionRoleBasedAuthToHclTerraform(this._roleBasedAuth.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsConnectionRoleBasedAuthList",
      },
      web_identity: {
        value: awsConnectionWebIdentityToHclTerraform(this._webIdentity.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AwsConnectionWebIdentityList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
