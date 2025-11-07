// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LtmProfileHttpcompressConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the maximum number of compressed bytes that the system buffers before inserting a Content-Length header (which specifies the compressed size) into the response. The default is 4096 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress#compression_buffersize LtmProfileHttpcompress#compression_buffersize}
  */
  readonly compressionBuffersize?: number;
  /**
  * Specifies a list of content types for compression of HTTP Content-Type responses. Use a string list to specify a list of content types you want to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress#content_type_exclude LtmProfileHttpcompress#content_type_exclude}
  */
  readonly contentTypeExclude?: string[];
  /**
  * Specifies a list of content types for compression of HTTP Content-Type responses. Use a string list to specify a list of content types you want to compress.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress#content_type_include LtmProfileHttpcompress#content_type_include}
  */
  readonly contentTypeInclude?: string[];
  /**
  * Specifies, when checked (enabled), that the system monitors the percent CPU usage and adjusts compression rates automatically when the CPU usage reaches either the CPU Saver High Threshold or the CPU Saver Low Threshold. The default is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress#cpu_saver LtmProfileHttpcompress#cpu_saver}
  */
  readonly cpuSaver?: string;
  /**
  * Use the parent Httpcompress profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress#defaults_from LtmProfileHttpcompress#defaults_from}
  */
  readonly defaultsFrom?: string;
  /**
  * Specifies the degree to which the system compresses the content. Higher compression levels cause the compression process to be slower. The default is 1 - Least Compression (Fastest)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress#gzip_compression_level LtmProfileHttpcompress#gzip_compression_level}
  */
  readonly gzipCompressionLevel?: number;
  /**
  * Specifies the number of bytes of memory that the system uses for internal compression buffers when compressing a server response. The default is 8 kilobytes/8192 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress#gzip_memory_level LtmProfileHttpcompress#gzip_memory_level}
  */
  readonly gzipMemoryLevel?: number;
  /**
  * Specifies the number of kilobytes in the window size that the system uses when compressing a server response. The default is 16 kilobytes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress#gzip_window_size LtmProfileHttpcompress#gzip_window_size}
  */
  readonly gzipWindowSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress#id LtmProfileHttpcompress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies, when checked (enabled), that the system does not remove the Accept-Encoding: header from an HTTP request. The default is disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress#keep_accept_encoding LtmProfileHttpcompress#keep_accept_encoding}
  */
  readonly keepAcceptEncoding?: string;
  /**
  * Name of the Httpcompress Profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress#name LtmProfileHttpcompress#name}
  */
  readonly name: string;
  /**
  * Servers Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress#uri_exclude LtmProfileHttpcompress#uri_exclude}
  */
  readonly uriExclude?: string[];
  /**
  * Servers Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress#uri_include LtmProfileHttpcompress#uri_include}
  */
  readonly uriInclude?: string[];
  /**
  * Specifies, when checked (enabled), that the system inserts a Vary header into cacheable server responses. The default is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress#vary_header LtmProfileHttpcompress#vary_header}
  */
  readonly varyHeader?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress bigip_ltm_profile_httpcompress}
*/
export class LtmProfileHttpcompress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ltm_profile_httpcompress";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LtmProfileHttpcompress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LtmProfileHttpcompress to import
  * @param importFromId The id of the existing LtmProfileHttpcompress that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LtmProfileHttpcompress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ltm_profile_httpcompress", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ltm_profile_httpcompress bigip_ltm_profile_httpcompress} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LtmProfileHttpcompressConfig
  */
  public constructor(scope: Construct, id: string, config: LtmProfileHttpcompressConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ltm_profile_httpcompress',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compressionBuffersize = config.compressionBuffersize;
    this._contentTypeExclude = config.contentTypeExclude;
    this._contentTypeInclude = config.contentTypeInclude;
    this._cpuSaver = config.cpuSaver;
    this._defaultsFrom = config.defaultsFrom;
    this._gzipCompressionLevel = config.gzipCompressionLevel;
    this._gzipMemoryLevel = config.gzipMemoryLevel;
    this._gzipWindowSize = config.gzipWindowSize;
    this._id = config.id;
    this._keepAcceptEncoding = config.keepAcceptEncoding;
    this._name = config.name;
    this._uriExclude = config.uriExclude;
    this._uriInclude = config.uriInclude;
    this._varyHeader = config.varyHeader;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compression_buffersize - computed: true, optional: true, required: false
  private _compressionBuffersize?: number; 
  public get compressionBuffersize() {
    return this.getNumberAttribute('compression_buffersize');
  }
  public set compressionBuffersize(value: number) {
    this._compressionBuffersize = value;
  }
  public resetCompressionBuffersize() {
    this._compressionBuffersize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionBuffersizeInput() {
    return this._compressionBuffersize;
  }

  // content_type_exclude - computed: true, optional: true, required: false
  private _contentTypeExclude?: string[]; 
  public get contentTypeExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('content_type_exclude'));
  }
  public set contentTypeExclude(value: string[]) {
    this._contentTypeExclude = value;
  }
  public resetContentTypeExclude() {
    this._contentTypeExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeExcludeInput() {
    return this._contentTypeExclude;
  }

  // content_type_include - computed: true, optional: true, required: false
  private _contentTypeInclude?: string[]; 
  public get contentTypeInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('content_type_include'));
  }
  public set contentTypeInclude(value: string[]) {
    this._contentTypeInclude = value;
  }
  public resetContentTypeInclude() {
    this._contentTypeInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeIncludeInput() {
    return this._contentTypeInclude;
  }

  // cpu_saver - computed: true, optional: true, required: false
  private _cpuSaver?: string; 
  public get cpuSaver() {
    return this.getStringAttribute('cpu_saver');
  }
  public set cpuSaver(value: string) {
    this._cpuSaver = value;
  }
  public resetCpuSaver() {
    this._cpuSaver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuSaverInput() {
    return this._cpuSaver;
  }

  // defaults_from - computed: true, optional: true, required: false
  private _defaultsFrom?: string; 
  public get defaultsFrom() {
    return this.getStringAttribute('defaults_from');
  }
  public set defaultsFrom(value: string) {
    this._defaultsFrom = value;
  }
  public resetDefaultsFrom() {
    this._defaultsFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultsFromInput() {
    return this._defaultsFrom;
  }

  // gzip_compression_level - computed: true, optional: true, required: false
  private _gzipCompressionLevel?: number; 
  public get gzipCompressionLevel() {
    return this.getNumberAttribute('gzip_compression_level');
  }
  public set gzipCompressionLevel(value: number) {
    this._gzipCompressionLevel = value;
  }
  public resetGzipCompressionLevel() {
    this._gzipCompressionLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipCompressionLevelInput() {
    return this._gzipCompressionLevel;
  }

  // gzip_memory_level - computed: true, optional: true, required: false
  private _gzipMemoryLevel?: number; 
  public get gzipMemoryLevel() {
    return this.getNumberAttribute('gzip_memory_level');
  }
  public set gzipMemoryLevel(value: number) {
    this._gzipMemoryLevel = value;
  }
  public resetGzipMemoryLevel() {
    this._gzipMemoryLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipMemoryLevelInput() {
    return this._gzipMemoryLevel;
  }

  // gzip_window_size - computed: true, optional: true, required: false
  private _gzipWindowSize?: number; 
  public get gzipWindowSize() {
    return this.getNumberAttribute('gzip_window_size');
  }
  public set gzipWindowSize(value: number) {
    this._gzipWindowSize = value;
  }
  public resetGzipWindowSize() {
    this._gzipWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gzipWindowSizeInput() {
    return this._gzipWindowSize;
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

  // keep_accept_encoding - computed: true, optional: true, required: false
  private _keepAcceptEncoding?: string; 
  public get keepAcceptEncoding() {
    return this.getStringAttribute('keep_accept_encoding');
  }
  public set keepAcceptEncoding(value: string) {
    this._keepAcceptEncoding = value;
  }
  public resetKeepAcceptEncoding() {
    this._keepAcceptEncoding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAcceptEncodingInput() {
    return this._keepAcceptEncoding;
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

  // uri_exclude - computed: true, optional: true, required: false
  private _uriExclude?: string[]; 
  public get uriExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('uri_exclude'));
  }
  public set uriExclude(value: string[]) {
    this._uriExclude = value;
  }
  public resetUriExclude() {
    this._uriExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriExcludeInput() {
    return this._uriExclude;
  }

  // uri_include - computed: true, optional: true, required: false
  private _uriInclude?: string[]; 
  public get uriInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('uri_include'));
  }
  public set uriInclude(value: string[]) {
    this._uriInclude = value;
  }
  public resetUriInclude() {
    this._uriInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriIncludeInput() {
    return this._uriInclude;
  }

  // vary_header - computed: true, optional: true, required: false
  private _varyHeader?: string; 
  public get varyHeader() {
    return this.getStringAttribute('vary_header');
  }
  public set varyHeader(value: string) {
    this._varyHeader = value;
  }
  public resetVaryHeader() {
    this._varyHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varyHeaderInput() {
    return this._varyHeader;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compression_buffersize: cdktf.numberToTerraform(this._compressionBuffersize),
      content_type_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contentTypeExclude),
      content_type_include: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contentTypeInclude),
      cpu_saver: cdktf.stringToTerraform(this._cpuSaver),
      defaults_from: cdktf.stringToTerraform(this._defaultsFrom),
      gzip_compression_level: cdktf.numberToTerraform(this._gzipCompressionLevel),
      gzip_memory_level: cdktf.numberToTerraform(this._gzipMemoryLevel),
      gzip_window_size: cdktf.numberToTerraform(this._gzipWindowSize),
      id: cdktf.stringToTerraform(this._id),
      keep_accept_encoding: cdktf.stringToTerraform(this._keepAcceptEncoding),
      name: cdktf.stringToTerraform(this._name),
      uri_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uriExclude),
      uri_include: cdktf.listMapper(cdktf.stringToTerraform, false)(this._uriInclude),
      vary_header: cdktf.stringToTerraform(this._varyHeader),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compression_buffersize: {
        value: cdktf.numberToHclTerraform(this._compressionBuffersize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      content_type_exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contentTypeExclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      content_type_include: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contentTypeInclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cpu_saver: {
        value: cdktf.stringToHclTerraform(this._cpuSaver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defaults_from: {
        value: cdktf.stringToHclTerraform(this._defaultsFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gzip_compression_level: {
        value: cdktf.numberToHclTerraform(this._gzipCompressionLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gzip_memory_level: {
        value: cdktf.numberToHclTerraform(this._gzipMemoryLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      gzip_window_size: {
        value: cdktf.numberToHclTerraform(this._gzipWindowSize),
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
      keep_accept_encoding: {
        value: cdktf.stringToHclTerraform(this._keepAcceptEncoding),
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
      uri_exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uriExclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      uri_include: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._uriInclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vary_header: {
        value: cdktf.stringToHclTerraform(this._varyHeader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
