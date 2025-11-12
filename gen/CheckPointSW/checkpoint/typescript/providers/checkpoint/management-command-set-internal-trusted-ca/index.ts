// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementCommandSetInternalTrustedCaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Allow only certificates from listed branches.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca#allow_certificates_from_branches ManagementCommandSetInternalTrustedCa#allow_certificates_from_branches}
  */
  readonly allowCertificatesFromBranches?: boolean | cdktf.IResolvable;
  /**
  * Branches to allow certificates from. Required only if "allow-certificates-from-branches" set to "true".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca#branches ManagementCommandSetInternalTrustedCa#branches}
  */
  readonly branches?: string[];
  /**
  * Cache Certificate Revocation List on the Security Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca#cache_crl ManagementCommandSetInternalTrustedCa#cache_crl}
  */
  readonly cacheCrl?: boolean | cdktf.IResolvable;
  /**
  * Color of the object. Should be one of existing colors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca#color ManagementCommandSetInternalTrustedCa#color}
  */
  readonly color?: string;
  /**
  * Comments string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca#comments ManagementCommandSetInternalTrustedCa#comments}
  */
  readonly comments?: string;
  /**
  * Weather to retrieve new Certificate Revocation List after the certificate expires or after a fixed period.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca#crl_cache_method ManagementCommandSetInternalTrustedCa#crl_cache_method}
  */
  readonly crlCacheMethod?: string;
  /**
  * When to fetch new Certificate Revocation List (in minutes).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca#crl_cache_timeout ManagementCommandSetInternalTrustedCa#crl_cache_timeout}
  */
  readonly crlCacheTimeout?: number;
  /**
  * Indicates which domains to process the commands on. It cannot be used with the details-level full, must be run from the System Domain only and with ignore-warnings true. Valid values are: CURRENT_DOMAIN, ALL_DOMAINS_ON_THIS_SERVER.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca#domains_to_process ManagementCommandSetInternalTrustedCa#domains_to_process}
  */
  readonly domainsToProcess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca#id ManagementCommandSetInternalTrustedCa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Apply changes ignoring errors. You won't be able to publish such a changes. If ignore-warnings flag was omitted - warnings will also be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca#ignore_errors ManagementCommandSetInternalTrustedCa#ignore_errors}
  */
  readonly ignoreErrors?: boolean | cdktf.IResolvable;
  /**
  * Apply changes ignoring warnings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca#ignore_warnings ManagementCommandSetInternalTrustedCa#ignore_warnings}
  */
  readonly ignoreWarnings?: boolean | cdktf.IResolvable;
  /**
  * Whether to retrieve Certificate Revocation List from http servers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca#retrieve_crl_from_http_servers ManagementCommandSetInternalTrustedCa#retrieve_crl_from_http_servers}
  */
  readonly retrieveCrlFromHttpServers?: boolean | cdktf.IResolvable;
  /**
  * Collection of tag identifiers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca#tags ManagementCommandSetInternalTrustedCa#tags}
  */
  readonly tags?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca checkpoint_management_command_set_internal_trusted_ca}
*/
export class ManagementCommandSetInternalTrustedCa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_command_set_internal_trusted_ca";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementCommandSetInternalTrustedCa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementCommandSetInternalTrustedCa to import
  * @param importFromId The id of the existing ManagementCommandSetInternalTrustedCa that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementCommandSetInternalTrustedCa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_command_set_internal_trusted_ca", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/resources/management_command_set_internal_trusted_ca checkpoint_management_command_set_internal_trusted_ca} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementCommandSetInternalTrustedCaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementCommandSetInternalTrustedCaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_command_set_internal_trusted_ca',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowCertificatesFromBranches = config.allowCertificatesFromBranches;
    this._branches = config.branches;
    this._cacheCrl = config.cacheCrl;
    this._color = config.color;
    this._comments = config.comments;
    this._crlCacheMethod = config.crlCacheMethod;
    this._crlCacheTimeout = config.crlCacheTimeout;
    this._domainsToProcess = config.domainsToProcess;
    this._id = config.id;
    this._ignoreErrors = config.ignoreErrors;
    this._ignoreWarnings = config.ignoreWarnings;
    this._retrieveCrlFromHttpServers = config.retrieveCrlFromHttpServers;
    this._tags = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_certificates_from_branches - computed: false, optional: true, required: false
  private _allowCertificatesFromBranches?: boolean | cdktf.IResolvable; 
  public get allowCertificatesFromBranches() {
    return this.getBooleanAttribute('allow_certificates_from_branches');
  }
  public set allowCertificatesFromBranches(value: boolean | cdktf.IResolvable) {
    this._allowCertificatesFromBranches = value;
  }
  public resetAllowCertificatesFromBranches() {
    this._allowCertificatesFromBranches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowCertificatesFromBranchesInput() {
    return this._allowCertificatesFromBranches;
  }

  // branches - computed: false, optional: true, required: false
  private _branches?: string[]; 
  public get branches() {
    return cdktf.Fn.tolist(this.getListAttribute('branches'));
  }
  public set branches(value: string[]) {
    this._branches = value;
  }
  public resetBranches() {
    this._branches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches;
  }

  // cache_crl - computed: false, optional: true, required: false
  private _cacheCrl?: boolean | cdktf.IResolvable; 
  public get cacheCrl() {
    return this.getBooleanAttribute('cache_crl');
  }
  public set cacheCrl(value: boolean | cdktf.IResolvable) {
    this._cacheCrl = value;
  }
  public resetCacheCrl() {
    this._cacheCrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheCrlInput() {
    return this._cacheCrl;
  }

  // color - computed: false, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // crl_cache_method - computed: false, optional: true, required: false
  private _crlCacheMethod?: string; 
  public get crlCacheMethod() {
    return this.getStringAttribute('crl_cache_method');
  }
  public set crlCacheMethod(value: string) {
    this._crlCacheMethod = value;
  }
  public resetCrlCacheMethod() {
    this._crlCacheMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlCacheMethodInput() {
    return this._crlCacheMethod;
  }

  // crl_cache_timeout - computed: false, optional: true, required: false
  private _crlCacheTimeout?: number; 
  public get crlCacheTimeout() {
    return this.getNumberAttribute('crl_cache_timeout');
  }
  public set crlCacheTimeout(value: number) {
    this._crlCacheTimeout = value;
  }
  public resetCrlCacheTimeout() {
    this._crlCacheTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crlCacheTimeoutInput() {
    return this._crlCacheTimeout;
  }

  // domains_to_process - computed: false, optional: true, required: false
  private _domainsToProcess?: string[]; 
  public get domainsToProcess() {
    return cdktf.Fn.tolist(this.getListAttribute('domains_to_process'));
  }
  public set domainsToProcess(value: string[]) {
    this._domainsToProcess = value;
  }
  public resetDomainsToProcess() {
    this._domainsToProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsToProcessInput() {
    return this._domainsToProcess;
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

  // ignore_errors - computed: false, optional: true, required: false
  private _ignoreErrors?: boolean | cdktf.IResolvable; 
  public get ignoreErrors() {
    return this.getBooleanAttribute('ignore_errors');
  }
  public set ignoreErrors(value: boolean | cdktf.IResolvable) {
    this._ignoreErrors = value;
  }
  public resetIgnoreErrors() {
    this._ignoreErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreErrorsInput() {
    return this._ignoreErrors;
  }

  // ignore_warnings - computed: false, optional: true, required: false
  private _ignoreWarnings?: boolean | cdktf.IResolvable; 
  public get ignoreWarnings() {
    return this.getBooleanAttribute('ignore_warnings');
  }
  public set ignoreWarnings(value: boolean | cdktf.IResolvable) {
    this._ignoreWarnings = value;
  }
  public resetIgnoreWarnings() {
    this._ignoreWarnings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreWarningsInput() {
    return this._ignoreWarnings;
  }

  // retrieve_crl_from_http_servers - computed: false, optional: true, required: false
  private _retrieveCrlFromHttpServers?: boolean | cdktf.IResolvable; 
  public get retrieveCrlFromHttpServers() {
    return this.getBooleanAttribute('retrieve_crl_from_http_servers');
  }
  public set retrieveCrlFromHttpServers(value: boolean | cdktf.IResolvable) {
    this._retrieveCrlFromHttpServers = value;
  }
  public resetRetrieveCrlFromHttpServers() {
    this._retrieveCrlFromHttpServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retrieveCrlFromHttpServersInput() {
    return this._retrieveCrlFromHttpServers;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_certificates_from_branches: cdktf.booleanToTerraform(this._allowCertificatesFromBranches),
      branches: cdktf.listMapper(cdktf.stringToTerraform, false)(this._branches),
      cache_crl: cdktf.booleanToTerraform(this._cacheCrl),
      color: cdktf.stringToTerraform(this._color),
      comments: cdktf.stringToTerraform(this._comments),
      crl_cache_method: cdktf.stringToTerraform(this._crlCacheMethod),
      crl_cache_timeout: cdktf.numberToTerraform(this._crlCacheTimeout),
      domains_to_process: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainsToProcess),
      id: cdktf.stringToTerraform(this._id),
      ignore_errors: cdktf.booleanToTerraform(this._ignoreErrors),
      ignore_warnings: cdktf.booleanToTerraform(this._ignoreWarnings),
      retrieve_crl_from_http_servers: cdktf.booleanToTerraform(this._retrieveCrlFromHttpServers),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_certificates_from_branches: {
        value: cdktf.booleanToHclTerraform(this._allowCertificatesFromBranches),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      branches: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._branches),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cache_crl: {
        value: cdktf.booleanToHclTerraform(this._cacheCrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl_cache_method: {
        value: cdktf.stringToHclTerraform(this._crlCacheMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crl_cache_timeout: {
        value: cdktf.numberToHclTerraform(this._crlCacheTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      domains_to_process: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainsToProcess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_errors: {
        value: cdktf.booleanToHclTerraform(this._ignoreErrors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_warnings: {
        value: cdktf.booleanToHclTerraform(this._ignoreWarnings),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      retrieve_crl_from_http_servers: {
        value: cdktf.booleanToHclTerraform(this._retrieveCrlFromHttpServers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
