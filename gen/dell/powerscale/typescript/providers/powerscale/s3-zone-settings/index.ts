// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_zone_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface S3ZoneSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Base Domain for S3 zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_zone_settings#base_domain S3ZoneSettings#base_domain}
  */
  readonly baseDomain?: string;
  /**
  * The permission mode for creating bucket directories.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_zone_settings#bucket_directory_create_mode S3ZoneSettings#bucket_directory_create_mode}
  */
  readonly bucketDirectoryCreateMode?: number;
  /**
  * The default policy for object access control lists (ACLs), which can be either `replace` or `deny`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_zone_settings#object_acl_policy S3ZoneSettings#object_acl_policy}
  */
  readonly objectAclPolicy?: string;
  /**
  * The root path for the S3 bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_zone_settings#root_path S3ZoneSettings#root_path}
  */
  readonly rootPath?: string;
  /**
  * The name of the access zone you want to update settings for s3 service. If this field is updated, Terraform will delete and then recreate this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_zone_settings#zone S3ZoneSettings#zone}
  */
  readonly zone: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_zone_settings powerscale_s3_zone_settings}
*/
export class S3ZoneSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_s3_zone_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a S3ZoneSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the S3ZoneSettings to import
  * @param importFromId The id of the existing S3ZoneSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_zone_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the S3ZoneSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_s3_zone_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/s3_zone_settings powerscale_s3_zone_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options S3ZoneSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: S3ZoneSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_s3_zone_settings',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseDomain = config.baseDomain;
    this._bucketDirectoryCreateMode = config.bucketDirectoryCreateMode;
    this._objectAclPolicy = config.objectAclPolicy;
    this._rootPath = config.rootPath;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_domain - computed: true, optional: true, required: false
  private _baseDomain?: string; 
  public get baseDomain() {
    return this.getStringAttribute('base_domain');
  }
  public set baseDomain(value: string) {
    this._baseDomain = value;
  }
  public resetBaseDomain() {
    this._baseDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDomainInput() {
    return this._baseDomain;
  }

  // bucket_directory_create_mode - computed: true, optional: true, required: false
  private _bucketDirectoryCreateMode?: number; 
  public get bucketDirectoryCreateMode() {
    return this.getNumberAttribute('bucket_directory_create_mode');
  }
  public set bucketDirectoryCreateMode(value: number) {
    this._bucketDirectoryCreateMode = value;
  }
  public resetBucketDirectoryCreateMode() {
    this._bucketDirectoryCreateMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketDirectoryCreateModeInput() {
    return this._bucketDirectoryCreateMode;
  }

  // object_acl_policy - computed: true, optional: true, required: false
  private _objectAclPolicy?: string; 
  public get objectAclPolicy() {
    return this.getStringAttribute('object_acl_policy');
  }
  public set objectAclPolicy(value: string) {
    this._objectAclPolicy = value;
  }
  public resetObjectAclPolicy() {
    this._objectAclPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectAclPolicyInput() {
    return this._objectAclPolicy;
  }

  // root_path - computed: true, optional: true, required: false
  private _rootPath?: string; 
  public get rootPath() {
    return this.getStringAttribute('root_path');
  }
  public set rootPath(value: string) {
    this._rootPath = value;
  }
  public resetRootPath() {
    this._rootPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootPathInput() {
    return this._rootPath;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_domain: cdktf.stringToTerraform(this._baseDomain),
      bucket_directory_create_mode: cdktf.numberToTerraform(this._bucketDirectoryCreateMode),
      object_acl_policy: cdktf.stringToTerraform(this._objectAclPolicy),
      root_path: cdktf.stringToTerraform(this._rootPath),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_domain: {
        value: cdktf.stringToHclTerraform(this._baseDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_directory_create_mode: {
        value: cdktf.numberToHclTerraform(this._bucketDirectoryCreateMode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      object_acl_policy: {
        value: cdktf.stringToHclTerraform(this._objectAclPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_path: {
        value: cdktf.stringToHclTerraform(this._rootPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
