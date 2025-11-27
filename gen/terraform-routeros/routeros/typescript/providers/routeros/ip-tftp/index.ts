// https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpTftpConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp#___path___ IpTftp#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp#___skip___ IpTftp#___skip___}
  */
  readonly skip?: string;
  /**
  * Allow connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp#allow IpTftp#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * If `true`, overwriting the file is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp#allow_overwrite IpTftp#allow_overwrite}
  */
  readonly allowOverwrite?: boolean | cdktf.IResolvable;
  /**
  * If set, server will allow sequence number to roll over when maximum value is reached. This is used to enable large downloads using TFTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp#allow_rollover IpTftp#allow_rollover}
  */
  readonly allowRollover?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp#disabled IpTftp#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp#id IpTftp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Range of IP addresses accepted as clients. If empty `0.0.0.0/0` will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp#ip_addresses IpTftp#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * Sets if file can be written to. If set to `false` write attempts will fail with an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp#read_only IpTftp#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * TFTP Windowsize option value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp#reading_window_size IpTftp#reading_window_size}
  */
  readonly readingWindowSize?: string;
  /**
  * If `req-filename` and `real-filename` values are set and valid, the requested filename will be replaced with matched file. This field has to be set. If multiple regex are specified in `req-filename`, with this field you can set which ones should match, so this rule is validated. `real-filename` format for using multiple regex is `filename\0\5\6`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp#real_filename IpTftp#real_filename}
  */
  readonly realFilename?: string;
  /**
  * Requested filename as regular expression (regex) if field is left empty it defaults to `.*`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp#req_filename IpTftp#req_filename}
  */
  readonly reqFilename?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp routeros_ip_tftp}
*/
export class IpTftp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_ip_tftp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpTftp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpTftp to import
  * @param importFromId The id of the existing IpTftp that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpTftp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_ip_tftp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.93.0/docs/resources/ip_tftp routeros_ip_tftp} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpTftpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: IpTftpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_ip_tftp',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.93.0',
        providerVersionConstraint: '1.93.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._skip = config.skip;
    this._allow = config.allow;
    this._allowOverwrite = config.allowOverwrite;
    this._allowRollover = config.allowRollover;
    this._disabled = config.disabled;
    this._id = config.id;
    this._ipAddresses = config.ipAddresses;
    this._readOnly = config.readOnly;
    this._readingWindowSize = config.readingWindowSize;
    this._realFilename = config.realFilename;
    this._reqFilename = config.reqFilename;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // allow_overwrite - computed: false, optional: true, required: false
  private _allowOverwrite?: boolean | cdktf.IResolvable; 
  public get allowOverwrite() {
    return this.getBooleanAttribute('allow_overwrite');
  }
  public set allowOverwrite(value: boolean | cdktf.IResolvable) {
    this._allowOverwrite = value;
  }
  public resetAllowOverwrite() {
    this._allowOverwrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverwriteInput() {
    return this._allowOverwrite;
  }

  // allow_rollover - computed: false, optional: true, required: false
  private _allowRollover?: boolean | cdktf.IResolvable; 
  public get allowRollover() {
    return this.getBooleanAttribute('allow_rollover');
  }
  public set allowRollover(value: boolean | cdktf.IResolvable) {
    this._allowRollover = value;
  }
  public resetAllowRollover() {
    this._allowRollover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowRolloverInput() {
    return this._allowRollover;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
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

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }

  // reading_window_size - computed: false, optional: true, required: false
  private _readingWindowSize?: string; 
  public get readingWindowSize() {
    return this.getStringAttribute('reading_window_size');
  }
  public set readingWindowSize(value: string) {
    this._readingWindowSize = value;
  }
  public resetReadingWindowSize() {
    this._readingWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readingWindowSizeInput() {
    return this._readingWindowSize;
  }

  // real_filename - computed: false, optional: true, required: false
  private _realFilename?: string; 
  public get realFilename() {
    return this.getStringAttribute('real_filename');
  }
  public set realFilename(value: string) {
    this._realFilename = value;
  }
  public resetRealFilename() {
    this._realFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get realFilenameInput() {
    return this._realFilename;
  }

  // req_filename - computed: false, optional: true, required: false
  private _reqFilename?: string; 
  public get reqFilename() {
    return this.getStringAttribute('req_filename');
  }
  public set reqFilename(value: string) {
    this._reqFilename = value;
  }
  public resetReqFilename() {
    this._reqFilename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqFilenameInput() {
    return this._reqFilename;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      allow: cdktf.booleanToTerraform(this._allow),
      allow_overwrite: cdktf.booleanToTerraform(this._allowOverwrite),
      allow_rollover: cdktf.booleanToTerraform(this._allowRollover),
      disabled: cdktf.booleanToTerraform(this._disabled),
      id: cdktf.stringToTerraform(this._id),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddresses),
      read_only: cdktf.booleanToTerraform(this._readOnly),
      reading_window_size: cdktf.stringToTerraform(this._readingWindowSize),
      real_filename: cdktf.stringToTerraform(this._realFilename),
      req_filename: cdktf.stringToTerraform(this._reqFilename),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow: {
        value: cdktf.booleanToHclTerraform(this._allow),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_overwrite: {
        value: cdktf.booleanToHclTerraform(this._allowOverwrite),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_rollover: {
        value: cdktf.booleanToHclTerraform(this._allowRollover),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      read_only: {
        value: cdktf.booleanToHclTerraform(this._readOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      reading_window_size: {
        value: cdktf.stringToHclTerraform(this._readingWindowSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      real_filename: {
        value: cdktf.stringToHclTerraform(this._realFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      req_filename: {
        value: cdktf.stringToHclTerraform(this._reqFilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
