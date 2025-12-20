// https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_access_status
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOpalResourcesAccessStatusConfig extends cdktf.TerraformMetaArguments {
  /**
  * The remote ID of the access level that you wish to query for the resource. If omitted, the default access level remote ID value (empty string) is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_access_status#access_level_remote_id DataOpalResourcesAccessStatus#access_level_remote_id}
  */
  readonly accessLevelRemoteId?: string;
  /**
  * The pagination cursor value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_access_status#cursor DataOpalResourcesAccessStatus#cursor}
  */
  readonly cursor?: string;
  /**
  * Number of results to return per page. Default is 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_access_status#page_size DataOpalResourcesAccessStatus#page_size}
  */
  readonly pageSize?: number;
  /**
  * The ID of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_access_status#resource_id DataOpalResourcesAccessStatus#resource_id}
  */
  readonly resourceId: string;
  /**
  * The ID of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_access_status#user_id DataOpalResourcesAccessStatus#user_id}
  */
  readonly userId: string;
}
export interface DataOpalResourcesAccessStatusAccessLevel {
}

export function dataOpalResourcesAccessStatusAccessLevelToTerraform(struct?: DataOpalResourcesAccessStatusAccessLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOpalResourcesAccessStatusAccessLevelToHclTerraform(struct?: DataOpalResourcesAccessStatusAccessLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOpalResourcesAccessStatusAccessLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataOpalResourcesAccessStatusAccessLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOpalResourcesAccessStatusAccessLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // access_level_name - computed: true, optional: false, required: false
  public get accessLevelName() {
    return this.getStringAttribute('access_level_name');
  }

  // access_level_remote_id - computed: true, optional: false, required: false
  public get accessLevelRemoteId() {
    return this.getStringAttribute('access_level_remote_id');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_access_status opal_resources_access_status}
*/
export class DataOpalResourcesAccessStatus extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opal_resources_access_status";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOpalResourcesAccessStatus resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOpalResourcesAccessStatus to import
  * @param importFromId The id of the existing DataOpalResourcesAccessStatus that should be imported. Refer to the {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_access_status#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOpalResourcesAccessStatus to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opal_resources_access_status", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opalsecurity/opal/3.4.0/docs/data-sources/resources_access_status opal_resources_access_status} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOpalResourcesAccessStatusConfig
  */
  public constructor(scope: Construct, id: string, config: DataOpalResourcesAccessStatusConfig) {
    super(scope, id, {
      terraformResourceType: 'opal_resources_access_status',
      terraformGeneratorMetadata: {
        providerName: 'opal',
        providerVersion: '3.4.0',
        providerVersionConstraint: '3.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLevelRemoteId = config.accessLevelRemoteId;
    this._cursor = config.cursor;
    this._pageSize = config.pageSize;
    this._resourceId = config.resourceId;
    this._userId = config.userId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_level - computed: true, optional: false, required: false
  private _accessLevel = new DataOpalResourcesAccessStatusAccessLevelOutputReference(this, "access_level");
  public get accessLevel() {
    return this._accessLevel;
  }

  // access_level_remote_id - computed: false, optional: true, required: false
  private _accessLevelRemoteId?: string; 
  public get accessLevelRemoteId() {
    return this.getStringAttribute('access_level_remote_id');
  }
  public set accessLevelRemoteId(value: string) {
    this._accessLevelRemoteId = value;
  }
  public resetAccessLevelRemoteId() {
    this._accessLevelRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLevelRemoteIdInput() {
    return this._accessLevelRemoteId;
  }

  // cursor - computed: false, optional: true, required: false
  private _cursor?: string; 
  public get cursor() {
    return this.getStringAttribute('cursor');
  }
  public set cursor(value: string) {
    this._cursor = value;
  }
  public resetCursor() {
    this._cursor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cursorInput() {
    return this._cursor;
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_level_remote_id: cdktf.stringToTerraform(this._accessLevelRemoteId),
      cursor: cdktf.stringToTerraform(this._cursor),
      page_size: cdktf.numberToTerraform(this._pageSize),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      user_id: cdktf.stringToTerraform(this._userId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_level_remote_id: {
        value: cdktf.stringToHclTerraform(this._accessLevelRemoteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cursor: {
        value: cdktf.stringToHclTerraform(this._cursor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_size: {
        value: cdktf.numberToHclTerraform(this._pageSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
