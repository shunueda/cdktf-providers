// https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/service_authentication
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceAuthenticationConfig extends cdktf.TerraformMetaArguments {
  /**
  * SAML2.0 attribute query service. Remove the JSON field to deactivate the attribute query service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/service_authentication#attribute_query ServiceAuthentication#attribute_query}
  */
  readonly attributeQuery?: ServiceAuthenticationAttributeQuery;
  /**
  * JMX application management and monitoring service. Remove the JSON field to deactivate the JMX service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/service_authentication#jmx ServiceAuthentication#jmx}
  */
  readonly jmx?: ServiceAuthenticationJmx;
}
export interface ServiceAuthenticationAttributeQuery {
  /**
  * Encrypted shared secret for the service. Either this attribute or `shared_secret` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/service_authentication#encrypted_shared_secret ServiceAuthentication#encrypted_shared_secret}
  */
  readonly encryptedSharedSecret?: string;
  /**
  * Id of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/service_authentication#id ServiceAuthentication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Shared secret for the service. Either this attribute or `encrypted_shared_secret` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/service_authentication#shared_secret ServiceAuthentication#shared_secret}
  */
  readonly sharedSecret?: string;
}

export function serviceAuthenticationAttributeQueryToTerraform(struct?: ServiceAuthenticationAttributeQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_shared_secret: cdktf.stringToTerraform(struct!.encryptedSharedSecret),
    id: cdktf.stringToTerraform(struct!.id),
    shared_secret: cdktf.stringToTerraform(struct!.sharedSecret),
  }
}


export function serviceAuthenticationAttributeQueryToHclTerraform(struct?: ServiceAuthenticationAttributeQuery | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_shared_secret: {
      value: cdktf.stringToHclTerraform(struct!.encryptedSharedSecret),
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
    shared_secret: {
      value: cdktf.stringToHclTerraform(struct!.sharedSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAuthenticationAttributeQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceAuthenticationAttributeQuery | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedSharedSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedSharedSecret = this._encryptedSharedSecret;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._sharedSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSecret = this._sharedSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAuthenticationAttributeQuery | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedSharedSecret = undefined;
      this._id = undefined;
      this._sharedSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptedSharedSecret = value.encryptedSharedSecret;
      this._id = value.id;
      this._sharedSecret = value.sharedSecret;
    }
  }

  // encrypted_shared_secret - computed: true, optional: true, required: false
  private _encryptedSharedSecret?: string; 
  public get encryptedSharedSecret() {
    return this.getStringAttribute('encrypted_shared_secret');
  }
  public set encryptedSharedSecret(value: string) {
    this._encryptedSharedSecret = value;
  }
  public resetEncryptedSharedSecret() {
    this._encryptedSharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedSharedSecretInput() {
    return this._encryptedSharedSecret;
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

  // shared_secret - computed: false, optional: true, required: false
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  public resetSharedSecret() {
    this._sharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }
}
export interface ServiceAuthenticationJmx {
  /**
  * Encrypted shared secret for the service. Either this attribute or `shared_secret` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/service_authentication#encrypted_shared_secret ServiceAuthentication#encrypted_shared_secret}
  */
  readonly encryptedSharedSecret?: string;
  /**
  * Id of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/service_authentication#id ServiceAuthentication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Shared secret for the service. Either this attribute or `encrypted_shared_secret` must be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/service_authentication#shared_secret ServiceAuthentication#shared_secret}
  */
  readonly sharedSecret?: string;
}

export function serviceAuthenticationJmxToTerraform(struct?: ServiceAuthenticationJmx | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_shared_secret: cdktf.stringToTerraform(struct!.encryptedSharedSecret),
    id: cdktf.stringToTerraform(struct!.id),
    shared_secret: cdktf.stringToTerraform(struct!.sharedSecret),
  }
}


export function serviceAuthenticationJmxToHclTerraform(struct?: ServiceAuthenticationJmx | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_shared_secret: {
      value: cdktf.stringToHclTerraform(struct!.encryptedSharedSecret),
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
    shared_secret: {
      value: cdktf.stringToHclTerraform(struct!.sharedSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAuthenticationJmxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceAuthenticationJmx | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedSharedSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedSharedSecret = this._encryptedSharedSecret;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._sharedSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedSecret = this._sharedSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAuthenticationJmx | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedSharedSecret = undefined;
      this._id = undefined;
      this._sharedSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptedSharedSecret = value.encryptedSharedSecret;
      this._id = value.id;
      this._sharedSecret = value.sharedSecret;
    }
  }

  // encrypted_shared_secret - computed: true, optional: true, required: false
  private _encryptedSharedSecret?: string; 
  public get encryptedSharedSecret() {
    return this.getStringAttribute('encrypted_shared_secret');
  }
  public set encryptedSharedSecret(value: string) {
    this._encryptedSharedSecret = value;
  }
  public resetEncryptedSharedSecret() {
    this._encryptedSharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedSharedSecretInput() {
    return this._encryptedSharedSecret;
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

  // shared_secret - computed: false, optional: true, required: false
  private _sharedSecret?: string; 
  public get sharedSecret() {
    return this.getStringAttribute('shared_secret');
  }
  public set sharedSecret(value: string) {
    this._sharedSecret = value;
  }
  public resetSharedSecret() {
    this._sharedSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedSecretInput() {
    return this._sharedSecret;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/service_authentication pingfederate_service_authentication}
*/
export class ServiceAuthentication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingfederate_service_authentication";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceAuthentication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceAuthentication to import
  * @param importFromId The id of the existing ServiceAuthentication that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/service_authentication#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceAuthentication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingfederate_service_authentication", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingfederate/1.6.2/docs/resources/service_authentication pingfederate_service_authentication} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceAuthenticationConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServiceAuthenticationConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'pingfederate_service_authentication',
      terraformGeneratorMetadata: {
        providerName: 'pingfederate',
        providerVersion: '1.6.2',
        providerVersionConstraint: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributeQuery.internalValue = config.attributeQuery;
    this._jmx.internalValue = config.jmx;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_query - computed: false, optional: true, required: false
  private _attributeQuery = new ServiceAuthenticationAttributeQueryOutputReference(this, "attribute_query");
  public get attributeQuery() {
    return this._attributeQuery;
  }
  public putAttributeQuery(value: ServiceAuthenticationAttributeQuery) {
    this._attributeQuery.internalValue = value;
  }
  public resetAttributeQuery() {
    this._attributeQuery.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeQueryInput() {
    return this._attributeQuery.internalValue;
  }

  // jmx - computed: false, optional: true, required: false
  private _jmx = new ServiceAuthenticationJmxOutputReference(this, "jmx");
  public get jmx() {
    return this._jmx;
  }
  public putJmx(value: ServiceAuthenticationJmx) {
    this._jmx.internalValue = value;
  }
  public resetJmx() {
    this._jmx.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jmxInput() {
    return this._jmx.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_query: serviceAuthenticationAttributeQueryToTerraform(this._attributeQuery.internalValue),
      jmx: serviceAuthenticationJmxToTerraform(this._jmx.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_query: {
        value: serviceAuthenticationAttributeQueryToHclTerraform(this._attributeQuery.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceAuthenticationAttributeQuery",
      },
      jmx: {
        value: serviceAuthenticationJmxToHclTerraform(this._jmx.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceAuthenticationJmx",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
