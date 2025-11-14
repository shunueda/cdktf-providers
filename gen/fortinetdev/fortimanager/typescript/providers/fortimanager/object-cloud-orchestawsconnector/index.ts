// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawsconnector
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectCloudOrchestawsconnectorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawsconnector#access_key_id ObjectCloudOrchestawsconnector#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawsconnector#access_key_secret ObjectCloudOrchestawsconnector#access_key_secret}
  */
  readonly accessKeySecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawsconnector#adom ObjectCloudOrchestawsconnector#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawsconnector#id ObjectCloudOrchestawsconnector#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawsconnector#name ObjectCloudOrchestawsconnector#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawsconnector#scopetype ObjectCloudOrchestawsconnector#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawsconnector#use_metadata_iam ObjectCloudOrchestawsconnector#use_metadata_iam}
  */
  readonly useMetadataIam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawsconnector fortimanager_object_cloud_orchestawsconnector}
*/
export class ObjectCloudOrchestawsconnector extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_cloud_orchestawsconnector";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectCloudOrchestawsconnector resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectCloudOrchestawsconnector to import
  * @param importFromId The id of the existing ObjectCloudOrchestawsconnector that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawsconnector#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectCloudOrchestawsconnector to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_cloud_orchestawsconnector", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_cloud_orchestawsconnector fortimanager_object_cloud_orchestawsconnector} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectCloudOrchestawsconnectorConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectCloudOrchestawsconnectorConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_cloud_orchestawsconnector',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKeyId = config.accessKeyId;
    this._accessKeySecret = config.accessKeySecret;
    this._adom = config.adom;
    this._id = config.id;
    this._name = config.name;
    this._scopetype = config.scopetype;
    this._useMetadataIam = config.useMetadataIam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // access_key_secret - computed: true, optional: true, required: false
  private _accessKeySecret?: string[]; 
  public get accessKeySecret() {
    return cdktf.Fn.tolist(this.getListAttribute('access_key_secret'));
  }
  public set accessKeySecret(value: string[]) {
    this._accessKeySecret = value;
  }
  public resetAccessKeySecret() {
    this._accessKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeySecretInput() {
    return this._accessKeySecret;
  }

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // use_metadata_iam - computed: true, optional: true, required: false
  private _useMetadataIam?: string; 
  public get useMetadataIam() {
    return this.getStringAttribute('use_metadata_iam');
  }
  public set useMetadataIam(value: string) {
    this._useMetadataIam = value;
  }
  public resetUseMetadataIam() {
    this._useMetadataIam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMetadataIamInput() {
    return this._useMetadataIam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      access_key_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accessKeySecret),
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      use_metadata_iam: cdktf.stringToTerraform(this._useMetadataIam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_id: {
        value: cdktf.stringToHclTerraform(this._accessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_key_secret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accessKeySecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_metadata_iam: {
        value: cdktf.stringToHclTerraform(this._useMetadataIam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
