// https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EntitlementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement#id Entitlement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If enabled, the token will allow downloads based on configured restrictions (if any).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement#is_active Entitlement#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * The starting date/time the token is allowed to be used from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement#limit_date_range_from Entitlement#limit_date_range_from}
  */
  readonly limitDateRangeFrom?: string;
  /**
  * The ending date/time the token is allowed to be used until.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement#limit_date_range_to Entitlement#limit_date_range_to}
  */
  readonly limitDateRangeTo?: string;
  /**
  * The maximum number of unique clients allowed for the token. Please note that since clients are calculated asynchronously (after the download happens), the limit may not be imposed immediately but at a later point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement#limit_num_clients Entitlement#limit_num_clients}
  */
  readonly limitNumClients?: number;
  /**
  * The maximum number of downloads allowed for the token. Please note that since downloads are calculated asynchronously (after the download happens), the limit may not be imposed immediately but at a later point.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement#limit_num_downloads Entitlement#limit_num_downloads}
  */
  readonly limitNumDownloads?: number;
  /**
  * The package-based search query to apply to restrict downloads to. This uses the same syntax as the standard search used for repositories, and also supports boolean logic operators such as OR/AND/NOT and parentheses for grouping. This will still allow access to non-package files, such as metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement#limit_package_query Entitlement#limit_package_query}
  */
  readonly limitPackageQuery?: string;
  /**
  * The path-based search query to apply to restrict downloads to. This supports boolean logic operators such as OR/AND/NOT and parentheses for grouping. The path evaluated does not include the domain name, the namespace, the entitlement code used, the package format, etc. and it always starts with a forward slash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement#limit_path_query Entitlement#limit_path_query}
  */
  readonly limitPathQuery?: string;
  /**
  * A descriptive name for the entitlement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement#name Entitlement#name}
  */
  readonly name: string;
  /**
  * Namespace to which this entitlement belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement#namespace Entitlement#namespace}
  */
  readonly namespace: string;
  /**
  * Repository to which this entitlement belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement#repository Entitlement#repository}
  */
  readonly repository: string;
  /**
  * The literal value of the token to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement#token Entitlement#token}
  */
  readonly token?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement cloudsmith_entitlement}
*/
export class Entitlement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudsmith_entitlement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Entitlement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Entitlement to import
  * @param importFromId The id of the existing Entitlement that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Entitlement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudsmith_entitlement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudsmith-io/cloudsmith/0.0.66/docs/resources/entitlement cloudsmith_entitlement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EntitlementConfig
  */
  public constructor(scope: Construct, id: string, config: EntitlementConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudsmith_entitlement',
      terraformGeneratorMetadata: {
        providerName: 'cloudsmith',
        providerVersion: '0.0.66'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._isActive = config.isActive;
    this._limitDateRangeFrom = config.limitDateRangeFrom;
    this._limitDateRangeTo = config.limitDateRangeTo;
    this._limitNumClients = config.limitNumClients;
    this._limitNumDownloads = config.limitNumDownloads;
    this._limitPackageQuery = config.limitPackageQuery;
    this._limitPathQuery = config.limitPathQuery;
    this._name = config.name;
    this._namespace = config.namespace;
    this._repository = config.repository;
    this._token = config.token;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // limit_date_range_from - computed: false, optional: true, required: false
  private _limitDateRangeFrom?: string; 
  public get limitDateRangeFrom() {
    return this.getStringAttribute('limit_date_range_from');
  }
  public set limitDateRangeFrom(value: string) {
    this._limitDateRangeFrom = value;
  }
  public resetLimitDateRangeFrom() {
    this._limitDateRangeFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitDateRangeFromInput() {
    return this._limitDateRangeFrom;
  }

  // limit_date_range_to - computed: false, optional: true, required: false
  private _limitDateRangeTo?: string; 
  public get limitDateRangeTo() {
    return this.getStringAttribute('limit_date_range_to');
  }
  public set limitDateRangeTo(value: string) {
    this._limitDateRangeTo = value;
  }
  public resetLimitDateRangeTo() {
    this._limitDateRangeTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitDateRangeToInput() {
    return this._limitDateRangeTo;
  }

  // limit_num_clients - computed: true, optional: true, required: false
  private _limitNumClients?: number; 
  public get limitNumClients() {
    return this.getNumberAttribute('limit_num_clients');
  }
  public set limitNumClients(value: number) {
    this._limitNumClients = value;
  }
  public resetLimitNumClients() {
    this._limitNumClients = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitNumClientsInput() {
    return this._limitNumClients;
  }

  // limit_num_downloads - computed: true, optional: true, required: false
  private _limitNumDownloads?: number; 
  public get limitNumDownloads() {
    return this.getNumberAttribute('limit_num_downloads');
  }
  public set limitNumDownloads(value: number) {
    this._limitNumDownloads = value;
  }
  public resetLimitNumDownloads() {
    this._limitNumDownloads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitNumDownloadsInput() {
    return this._limitNumDownloads;
  }

  // limit_package_query - computed: false, optional: true, required: false
  private _limitPackageQuery?: string; 
  public get limitPackageQuery() {
    return this.getStringAttribute('limit_package_query');
  }
  public set limitPackageQuery(value: string) {
    this._limitPackageQuery = value;
  }
  public resetLimitPackageQuery() {
    this._limitPackageQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitPackageQueryInput() {
    return this._limitPackageQuery;
  }

  // limit_path_query - computed: false, optional: true, required: false
  private _limitPathQuery?: string; 
  public get limitPathQuery() {
    return this.getStringAttribute('limit_path_query');
  }
  public set limitPathQuery(value: string) {
    this._limitPathQuery = value;
  }
  public resetLimitPathQuery() {
    this._limitPathQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitPathQueryInput() {
    return this._limitPathQuery;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // slug_perm - computed: true, optional: false, required: false
  public get slugPerm() {
    return this.getStringAttribute('slug_perm');
  }

  // token - computed: true, optional: true, required: false
  private _token?: string; 
  public get token() {
    return this.getStringAttribute('token');
  }
  public set token(value: string) {
    this._token = value;
  }
  public resetToken() {
    this._token = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenInput() {
    return this._token;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      is_active: cdktf.booleanToTerraform(this._isActive),
      limit_date_range_from: cdktf.stringToTerraform(this._limitDateRangeFrom),
      limit_date_range_to: cdktf.stringToTerraform(this._limitDateRangeTo),
      limit_num_clients: cdktf.numberToTerraform(this._limitNumClients),
      limit_num_downloads: cdktf.numberToTerraform(this._limitNumDownloads),
      limit_package_query: cdktf.stringToTerraform(this._limitPackageQuery),
      limit_path_query: cdktf.stringToTerraform(this._limitPathQuery),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      repository: cdktf.stringToTerraform(this._repository),
      token: cdktf.stringToTerraform(this._token),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      limit_date_range_from: {
        value: cdktf.stringToHclTerraform(this._limitDateRangeFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_date_range_to: {
        value: cdktf.stringToHclTerraform(this._limitDateRangeTo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_num_clients: {
        value: cdktf.numberToHclTerraform(this._limitNumClients),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_num_downloads: {
        value: cdktf.numberToHclTerraform(this._limitNumDownloads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_package_query: {
        value: cdktf.stringToHclTerraform(this._limitPackageQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_path_query: {
        value: cdktf.stringToHclTerraform(this._limitPathQuery),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      token: {
        value: cdktf.stringToHclTerraform(this._token),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
