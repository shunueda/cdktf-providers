// https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_archival_location
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsArchivalLocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * RSC cloud account ID (UUID). Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_archival_location#account_id AwsArchivalLocation#account_id}
  */
  readonly accountId: string;
  /**
  * AWS bucket prefix. The prefix cannot be longer than 19 characters. Note that `rubrik-` will always be prepended to the prefix. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_archival_location#bucket_prefix AwsArchivalLocation#bucket_prefix}
  */
  readonly bucketPrefix: string;
  /**
  * AWS bucket tags. Each tag will be added to the bucket created by RSC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_archival_location#bucket_tags AwsArchivalLocation#bucket_tags}
  */
  readonly bucketTags?: { [key: string]: string };
  /**
  * AWS KMS master key alias/ID. Default value is `aws/s3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_archival_location#kms_master_key AwsArchivalLocation#kms_master_key}
  */
  readonly kmsMasterKey?: string;
  /**
  * Name of the cloud native archival location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_archival_location#name AwsArchivalLocation#name}
  */
  readonly name: string;
  /**
  * AWS region to store the snapshots in. If not specified, the snapshots will be stored in the same region as the workload. Changing this forces a new resource to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_archival_location#region AwsArchivalLocation#region}
  */
  readonly region?: string;
  /**
  * AWS bucket storage class. Possible values are `STANDARD`, `STANDARD_IA`, `ONEZONE_IA`, `GLACIER_INSTANT_RETRIEVAL`, `GLACIER_DEEP_ARCHIVE` and `GLACIER_FLEXIBLE_RETRIEVAL`. Default value is `STANDARD_IA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_archival_location#storage_class AwsArchivalLocation#storage_class}
  */
  readonly storageClass?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_archival_location polaris_aws_archival_location}
*/
export class AwsArchivalLocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "polaris_aws_archival_location";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsArchivalLocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsArchivalLocation to import
  * @param importFromId The id of the existing AwsArchivalLocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_archival_location#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsArchivalLocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "polaris_aws_archival_location", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rubrikinc/polaris/1.3.0/docs/resources/aws_archival_location polaris_aws_archival_location} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsArchivalLocationConfig
  */
  public constructor(scope: Construct, id: string, config: AwsArchivalLocationConfig) {
    super(scope, id, {
      terraformResourceType: 'polaris_aws_archival_location',
      terraformGeneratorMetadata: {
        providerName: 'polaris',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountId = config.accountId;
    this._bucketPrefix = config.bucketPrefix;
    this._bucketTags = config.bucketTags;
    this._kmsMasterKey = config.kmsMasterKey;
    this._name = config.name;
    this._region = config.region;
    this._storageClass = config.storageClass;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_id - computed: false, optional: false, required: true
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
  }

  // bucket_prefix - computed: false, optional: false, required: true
  private _bucketPrefix?: string; 
  public get bucketPrefix() {
    return this.getStringAttribute('bucket_prefix');
  }
  public set bucketPrefix(value: string) {
    this._bucketPrefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketPrefixInput() {
    return this._bucketPrefix;
  }

  // bucket_tags - computed: false, optional: true, required: false
  private _bucketTags?: { [key: string]: string }; 
  public get bucketTags() {
    return this.getStringMapAttribute('bucket_tags');
  }
  public set bucketTags(value: { [key: string]: string }) {
    this._bucketTags = value;
  }
  public resetBucketTags() {
    this._bucketTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketTagsInput() {
    return this._bucketTags;
  }

  // connection_status - computed: true, optional: false, required: false
  public get connectionStatus() {
    return this.getStringAttribute('connection_status');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kms_master_key - computed: false, optional: true, required: false
  private _kmsMasterKey?: string; 
  public get kmsMasterKey() {
    return this.getStringAttribute('kms_master_key');
  }
  public set kmsMasterKey(value: string) {
    this._kmsMasterKey = value;
  }
  public resetKmsMasterKey() {
    this._kmsMasterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsMasterKeyInput() {
    return this._kmsMasterKey;
  }

  // location_template - computed: true, optional: false, required: false
  public get locationTemplate() {
    return this.getStringAttribute('location_template');
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

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_id: cdktf.stringToTerraform(this._accountId),
      bucket_prefix: cdktf.stringToTerraform(this._bucketPrefix),
      bucket_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._bucketTags),
      kms_master_key: cdktf.stringToTerraform(this._kmsMasterKey),
      name: cdktf.stringToTerraform(this._name),
      region: cdktf.stringToTerraform(this._region),
      storage_class: cdktf.stringToTerraform(this._storageClass),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_prefix: {
        value: cdktf.stringToHclTerraform(this._bucketPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bucket_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._bucketTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      kms_master_key: {
        value: cdktf.stringToHclTerraform(this._kmsMasterKey),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_class: {
        value: cdktf.stringToHclTerraform(this._storageClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
