// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_backup_stream
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CssBackupStreamConfig extends cdktf.TerraformMetaArguments {
  /**
  * App name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_backup_stream#app_name CssBackupStream#app_name}
  */
  readonly appName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_backup_stream#id CssBackupStream#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Push domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_backup_stream#push_domain_name CssBackupStream#push_domain_name}
  */
  readonly pushDomainName: string;
  /**
  * Stream id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_backup_stream#stream_name CssBackupStream#stream_name}
  */
  readonly streamName: string;
  /**
  * Sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_backup_stream#upstream_sequence CssBackupStream#upstream_sequence}
  */
  readonly upstreamSequence: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_backup_stream tencentcloud_css_backup_stream}
*/
export class CssBackupStream extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_css_backup_stream";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CssBackupStream resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CssBackupStream to import
  * @param importFromId The id of the existing CssBackupStream that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_backup_stream#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CssBackupStream to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_css_backup_stream", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.49/docs/resources/css_backup_stream tencentcloud_css_backup_stream} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CssBackupStreamConfig
  */
  public constructor(scope: Construct, id: string, config: CssBackupStreamConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_css_backup_stream',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.49',
        providerVersionConstraint: '1.82.49'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appName = config.appName;
    this._id = config.id;
    this._pushDomainName = config.pushDomainName;
    this._streamName = config.streamName;
    this._upstreamSequence = config.upstreamSequence;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_name - computed: false, optional: false, required: true
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
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

  // push_domain_name - computed: false, optional: false, required: true
  private _pushDomainName?: string; 
  public get pushDomainName() {
    return this.getStringAttribute('push_domain_name');
  }
  public set pushDomainName(value: string) {
    this._pushDomainName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pushDomainNameInput() {
    return this._pushDomainName;
  }

  // stream_name - computed: false, optional: false, required: true
  private _streamName?: string; 
  public get streamName() {
    return this.getStringAttribute('stream_name');
  }
  public set streamName(value: string) {
    this._streamName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get streamNameInput() {
    return this._streamName;
  }

  // upstream_sequence - computed: false, optional: false, required: true
  private _upstreamSequence?: string; 
  public get upstreamSequence() {
    return this.getStringAttribute('upstream_sequence');
  }
  public set upstreamSequence(value: string) {
    this._upstreamSequence = value;
  }
  // Temporarily expose input value. Use with caution.
  public get upstreamSequenceInput() {
    return this._upstreamSequence;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_name: cdktf.stringToTerraform(this._appName),
      id: cdktf.stringToTerraform(this._id),
      push_domain_name: cdktf.stringToTerraform(this._pushDomainName),
      stream_name: cdktf.stringToTerraform(this._streamName),
      upstream_sequence: cdktf.stringToTerraform(this._upstreamSequence),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_name: {
        value: cdktf.stringToHclTerraform(this._appName),
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
      push_domain_name: {
        value: cdktf.stringToHclTerraform(this._pushDomainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stream_name: {
        value: cdktf.stringToHclTerraform(this._streamName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      upstream_sequence: {
        value: cdktf.stringToHclTerraform(this._upstreamSequence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
