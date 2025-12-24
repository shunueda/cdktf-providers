// https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_s3_bucket_subdomain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TwcS3BucketSubdomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * S3 Bucket ID for which file should be created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_s3_bucket_subdomain#bucket_id TwcS3BucketSubdomain#bucket_id}
  */
  readonly bucketId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_s3_bucket_subdomain#id TwcS3BucketSubdomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Flag that ensures releasing SSL certificate for subdomain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_s3_bucket_subdomain#release_cert TwcS3BucketSubdomain#release_cert}
  */
  readonly releaseCert?: boolean | cdktf.IResolvable;
  /**
  * Subdomain for serving files from S3 bucket. Subdomain should be valid domain name (and unique between buckets) with CNAME record that pointing to `s3.timeweb.com`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_s3_bucket_subdomain#subdomain TwcS3BucketSubdomain#subdomain}
  */
  readonly subdomain: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_s3_bucket_subdomain twc_s3_bucket_subdomain}
*/
export class TwcS3BucketSubdomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twc_s3_bucket_subdomain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TwcS3BucketSubdomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TwcS3BucketSubdomain to import
  * @param importFromId The id of the existing TwcS3BucketSubdomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_s3_bucket_subdomain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TwcS3BucketSubdomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twc_s3_bucket_subdomain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/timeweb-cloud/timeweb-cloud/1.6.8/docs/resources/twc_s3_bucket_subdomain twc_s3_bucket_subdomain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TwcS3BucketSubdomainConfig
  */
  public constructor(scope: Construct, id: string, config: TwcS3BucketSubdomainConfig) {
    super(scope, id, {
      terraformResourceType: 'twc_s3_bucket_subdomain',
      terraformGeneratorMetadata: {
        providerName: 'timeweb-cloud',
        providerVersion: '1.6.8',
        providerVersionConstraint: '1.6.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bucketId = config.bucketId;
    this._id = config.id;
    this._releaseCert = config.releaseCert;
    this._subdomain = config.subdomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bucket_id - computed: false, optional: false, required: true
  private _bucketId?: number; 
  public get bucketId() {
    return this.getNumberAttribute('bucket_id');
  }
  public set bucketId(value: number) {
    this._bucketId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketIdInput() {
    return this._bucketId;
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

  // release_cert - computed: false, optional: true, required: false
  private _releaseCert?: boolean | cdktf.IResolvable; 
  public get releaseCert() {
    return this.getBooleanAttribute('release_cert');
  }
  public set releaseCert(value: boolean | cdktf.IResolvable) {
    this._releaseCert = value;
  }
  public resetReleaseCert() {
    this._releaseCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseCertInput() {
    return this._releaseCert;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subdomain - computed: false, optional: false, required: true
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bucket_id: cdktf.numberToTerraform(this._bucketId),
      id: cdktf.stringToTerraform(this._id),
      release_cert: cdktf.booleanToTerraform(this._releaseCert),
      subdomain: cdktf.stringToTerraform(this._subdomain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bucket_id: {
        value: cdktf.numberToHclTerraform(this._bucketId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      release_cert: {
        value: cdktf.booleanToHclTerraform(this._releaseCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      subdomain: {
        value: cdktf.stringToHclTerraform(this._subdomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
