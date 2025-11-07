// https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_storage_s3
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GcoreStorageS3Config extends cdktf.TerraformMetaArguments {
  /**
  * An client id of new storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_storage_s3#client_id GcoreStorageS3#client_id}
  */
  readonly clientId?: number;
  /**
  * A s3 access key for new storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_storage_s3#generated_access_key GcoreStorageS3#generated_access_key}
  */
  readonly generatedAccessKey?: string;
  /**
  * A s3 entry point for new storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_storage_s3#generated_endpoint GcoreStorageS3#generated_endpoint}
  */
  readonly generatedEndpoint?: string;
  /**
  * A http s3 entry point for new storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_storage_s3#generated_http_endpoint GcoreStorageS3#generated_http_endpoint}
  */
  readonly generatedHttpEndpoint?: string;
  /**
  * A s3 endpoint for new storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_storage_s3#generated_s3_endpoint GcoreStorageS3#generated_s3_endpoint}
  */
  readonly generatedS3Endpoint?: string;
  /**
  * A s3 secret key for new storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_storage_s3#generated_secret_key GcoreStorageS3#generated_secret_key}
  */
  readonly generatedSecretKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_storage_s3#id GcoreStorageS3#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A location of new storage resource. One of (s-ed1, s-darz1, s-ws1, s-dt2, s-drc2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_storage_s3#location GcoreStorageS3#location}
  */
  readonly location: string;
  /**
  * A name of new storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_storage_s3#name GcoreStorageS3#name}
  */
  readonly name: string;
  /**
  * An id of new storage resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_storage_s3#storage_id GcoreStorageS3#storage_id}
  */
  readonly storageId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_storage_s3 gcore_storage_s3}
*/
export class GcoreStorageS3 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_storage_s3";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GcoreStorageS3 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GcoreStorageS3 to import
  * @param importFromId The id of the existing GcoreStorageS3 that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_storage_s3#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GcoreStorageS3 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_storage_s3", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcorelabs/0.3.63/docs/resources/gcore_storage_s3 gcore_storage_s3} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GcoreStorageS3Config
  */
  public constructor(scope: Construct, id: string, config: GcoreStorageS3Config) {
    super(scope, id, {
      terraformResourceType: 'gcore_storage_s3',
      terraformGeneratorMetadata: {
        providerName: 'gcorelabs',
        providerVersion: '0.3.63'
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
    this._generatedAccessKey = config.generatedAccessKey;
    this._generatedEndpoint = config.generatedEndpoint;
    this._generatedHttpEndpoint = config.generatedHttpEndpoint;
    this._generatedS3Endpoint = config.generatedS3Endpoint;
    this._generatedSecretKey = config.generatedSecretKey;
    this._id = config.id;
    this._location = config.location;
    this._name = config.name;
    this._storageId = config.storageId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_id - computed: true, optional: true, required: false
  private _clientId?: number; 
  public get clientId() {
    return this.getNumberAttribute('client_id');
  }
  public set clientId(value: number) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // generated_access_key - computed: true, optional: true, required: false
  private _generatedAccessKey?: string; 
  public get generatedAccessKey() {
    return this.getStringAttribute('generated_access_key');
  }
  public set generatedAccessKey(value: string) {
    this._generatedAccessKey = value;
  }
  public resetGeneratedAccessKey() {
    this._generatedAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedAccessKeyInput() {
    return this._generatedAccessKey;
  }

  // generated_endpoint - computed: true, optional: true, required: false
  private _generatedEndpoint?: string; 
  public get generatedEndpoint() {
    return this.getStringAttribute('generated_endpoint');
  }
  public set generatedEndpoint(value: string) {
    this._generatedEndpoint = value;
  }
  public resetGeneratedEndpoint() {
    this._generatedEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedEndpointInput() {
    return this._generatedEndpoint;
  }

  // generated_http_endpoint - computed: true, optional: true, required: false
  private _generatedHttpEndpoint?: string; 
  public get generatedHttpEndpoint() {
    return this.getStringAttribute('generated_http_endpoint');
  }
  public set generatedHttpEndpoint(value: string) {
    this._generatedHttpEndpoint = value;
  }
  public resetGeneratedHttpEndpoint() {
    this._generatedHttpEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedHttpEndpointInput() {
    return this._generatedHttpEndpoint;
  }

  // generated_s3_endpoint - computed: true, optional: true, required: false
  private _generatedS3Endpoint?: string; 
  public get generatedS3Endpoint() {
    return this.getStringAttribute('generated_s3_endpoint');
  }
  public set generatedS3Endpoint(value: string) {
    this._generatedS3Endpoint = value;
  }
  public resetGeneratedS3Endpoint() {
    this._generatedS3Endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedS3EndpointInput() {
    return this._generatedS3Endpoint;
  }

  // generated_secret_key - computed: true, optional: true, required: false
  private _generatedSecretKey?: string; 
  public get generatedSecretKey() {
    return this.getStringAttribute('generated_secret_key');
  }
  public set generatedSecretKey(value: string) {
    this._generatedSecretKey = value;
  }
  public resetGeneratedSecretKey() {
    this._generatedSecretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generatedSecretKeyInput() {
    return this._generatedSecretKey;
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

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // storage_id - computed: true, optional: true, required: false
  private _storageId?: number; 
  public get storageId() {
    return this.getNumberAttribute('storage_id');
  }
  public set storageId(value: number) {
    this._storageId = value;
  }
  public resetStorageId() {
    this._storageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIdInput() {
    return this._storageId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      client_id: cdktf.numberToTerraform(this._clientId),
      generated_access_key: cdktf.stringToTerraform(this._generatedAccessKey),
      generated_endpoint: cdktf.stringToTerraform(this._generatedEndpoint),
      generated_http_endpoint: cdktf.stringToTerraform(this._generatedHttpEndpoint),
      generated_s3_endpoint: cdktf.stringToTerraform(this._generatedS3Endpoint),
      generated_secret_key: cdktf.stringToTerraform(this._generatedSecretKey),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
      storage_id: cdktf.numberToTerraform(this._storageId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      client_id: {
        value: cdktf.numberToHclTerraform(this._clientId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      generated_access_key: {
        value: cdktf.stringToHclTerraform(this._generatedAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generated_endpoint: {
        value: cdktf.stringToHclTerraform(this._generatedEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generated_http_endpoint: {
        value: cdktf.stringToHclTerraform(this._generatedHttpEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generated_s3_endpoint: {
        value: cdktf.stringToHclTerraform(this._generatedS3Endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generated_secret_key: {
        value: cdktf.stringToHclTerraform(this._generatedSecretKey),
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
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
      storage_id: {
        value: cdktf.numberToHclTerraform(this._storageId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
