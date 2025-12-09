// https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_ms365
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationMs365Config extends cdktf.TerraformMetaArguments {
  /**
  * Azure client ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_ms365#client_id IntegrationMs365#client_id}
  */
  readonly clientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_ms365#credentials IntegrationMs365#credentials}
  */
  readonly credentials: IntegrationMs365Credentials;
  /**
  * Name of the integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_ms365#name IntegrationMs365#name}
  */
  readonly name: string;
  /**
  * Mondoo space identifier. If there is no space ID, the provider space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_ms365#space_id IntegrationMs365#space_id}
  */
  readonly spaceId?: string;
  /**
  * Azure tenant ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_ms365#tenant_id IntegrationMs365#tenant_id}
  */
  readonly tenantId: string;
}
export interface IntegrationMs365Credentials {
  /**
  * PEM file for MS365 integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_ms365#pem_file IntegrationMs365#pem_file}
  */
  readonly pemFile: string;
}

export function integrationMs365CredentialsToTerraform(struct?: IntegrationMs365Credentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pem_file: cdktf.stringToTerraform(struct!.pemFile),
  }
}


export function integrationMs365CredentialsToHclTerraform(struct?: IntegrationMs365Credentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pem_file: {
      value: cdktf.stringToHclTerraform(struct!.pemFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IntegrationMs365CredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): IntegrationMs365Credentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pemFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.pemFile = this._pemFile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IntegrationMs365Credentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pemFile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pemFile = value.pemFile;
    }
  }

  // pem_file - computed: false, optional: false, required: true
  private _pemFile?: string; 
  public get pemFile() {
    return this.getStringAttribute('pem_file');
  }
  public set pemFile(value: string) {
    this._pemFile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pemFileInput() {
    return this._pemFile;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_ms365 mondoo_integration_ms365}
*/
export class IntegrationMs365 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mondoo_integration_ms365";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IntegrationMs365 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IntegrationMs365 to import
  * @param importFromId The id of the existing IntegrationMs365 that should be imported. Refer to the {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_ms365#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IntegrationMs365 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mondoo_integration_ms365", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mondoohq/mondoo/0.35.0/docs/resources/integration_ms365 mondoo_integration_ms365} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationMs365Config
  */
  public constructor(scope: Construct, id: string, config: IntegrationMs365Config) {
    super(scope, id, {
      terraformResourceType: 'mondoo_integration_ms365',
      terraformGeneratorMetadata: {
        providerName: 'mondoo',
        providerVersion: '0.35.0',
        providerVersionConstraint: '0.35.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clientId = config.clientId;
    this._credentials.internalValue = config.credentials;
    this._name = config.name;
    this._spaceId = config.spaceId;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: false, optional: false, required: true
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // credentials - computed: false, optional: false, required: true
  private _credentials = new IntegrationMs365CredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: IntegrationMs365Credentials) {
    this._credentials.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // mrn - computed: true, optional: false, required: false
  public get mrn() {
    return this.getStringAttribute('mrn');
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

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.stringToTerraform(this._clientId),
      credentials: integrationMs365CredentialsToTerraform(this._credentials.internalValue),
      name: cdktf.stringToTerraform(this._name),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.stringToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials: {
        value: integrationMs365CredentialsToHclTerraform(this._credentials.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "IntegrationMs365Credentials",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
