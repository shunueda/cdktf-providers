// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/actiontrails
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlicloudActiontrailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/actiontrails#id DataAlicloudActiontrails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/actiontrails#ids DataAlicloudActiontrails#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/actiontrails#include_organization_trail DataAlicloudActiontrails#include_organization_trail}
  */
  readonly includeOrganizationTrail?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/actiontrails#include_shadow_trails DataAlicloudActiontrails#include_shadow_trails}
  */
  readonly includeShadowTrails?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/actiontrails#name_regex DataAlicloudActiontrails#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/actiontrails#output_file DataAlicloudActiontrails#output_file}
  */
  readonly outputFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/actiontrails#status DataAlicloudActiontrails#status}
  */
  readonly status?: string;
}
export interface DataAlicloudActiontrailsActiontrails {
}

export function dataAlicloudActiontrailsActiontrailsToTerraform(struct?: DataAlicloudActiontrailsActiontrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudActiontrailsActiontrailsToHclTerraform(struct?: DataAlicloudActiontrailsActiontrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudActiontrailsActiontrailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudActiontrailsActiontrails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudActiontrailsActiontrails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_rw - computed: true, optional: false, required: false
  public get eventRw() {
    return this.getStringAttribute('event_rw');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_organization_trail - computed: true, optional: false, required: false
  public get isOrganizationTrail() {
    return this.getBooleanAttribute('is_organization_trail');
  }

  // oss_bucket_name - computed: true, optional: false, required: false
  public get ossBucketName() {
    return this.getStringAttribute('oss_bucket_name');
  }

  // oss_key_prefix - computed: true, optional: false, required: false
  public get ossKeyPrefix() {
    return this.getStringAttribute('oss_key_prefix');
  }

  // oss_write_role_arn - computed: true, optional: false, required: false
  public get ossWriteRoleArn() {
    return this.getStringAttribute('oss_write_role_arn');
  }

  // sls_project_arn - computed: true, optional: false, required: false
  public get slsProjectArn() {
    return this.getStringAttribute('sls_project_arn');
  }

  // sls_write_role_arn - computed: true, optional: false, required: false
  public get slsWriteRoleArn() {
    return this.getStringAttribute('sls_write_role_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // trail_name - computed: true, optional: false, required: false
  public get trailName() {
    return this.getStringAttribute('trail_name');
  }

  // trail_region - computed: true, optional: false, required: false
  public get trailRegion() {
    return this.getStringAttribute('trail_region');
  }
}

export class DataAlicloudActiontrailsActiontrailsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudActiontrailsActiontrailsOutputReference {
    return new DataAlicloudActiontrailsActiontrailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataAlicloudActiontrailsTrails {
}

export function dataAlicloudActiontrailsTrailsToTerraform(struct?: DataAlicloudActiontrailsTrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlicloudActiontrailsTrailsToHclTerraform(struct?: DataAlicloudActiontrailsTrails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlicloudActiontrailsTrailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlicloudActiontrailsTrails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlicloudActiontrailsTrails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // event_rw - computed: true, optional: false, required: false
  public get eventRw() {
    return this.getStringAttribute('event_rw');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_organization_trail - computed: true, optional: false, required: false
  public get isOrganizationTrail() {
    return this.getBooleanAttribute('is_organization_trail');
  }

  // oss_bucket_name - computed: true, optional: false, required: false
  public get ossBucketName() {
    return this.getStringAttribute('oss_bucket_name');
  }

  // oss_key_prefix - computed: true, optional: false, required: false
  public get ossKeyPrefix() {
    return this.getStringAttribute('oss_key_prefix');
  }

  // oss_write_role_arn - computed: true, optional: false, required: false
  public get ossWriteRoleArn() {
    return this.getStringAttribute('oss_write_role_arn');
  }

  // sls_project_arn - computed: true, optional: false, required: false
  public get slsProjectArn() {
    return this.getStringAttribute('sls_project_arn');
  }

  // sls_write_role_arn - computed: true, optional: false, required: false
  public get slsWriteRoleArn() {
    return this.getStringAttribute('sls_write_role_arn');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // trail_name - computed: true, optional: false, required: false
  public get trailName() {
    return this.getStringAttribute('trail_name');
  }

  // trail_region - computed: true, optional: false, required: false
  public get trailRegion() {
    return this.getStringAttribute('trail_region');
  }
}

export class DataAlicloudActiontrailsTrailsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlicloudActiontrailsTrailsOutputReference {
    return new DataAlicloudActiontrailsTrailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/actiontrails alicloud_actiontrails}
*/
export class DataAlicloudActiontrails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_actiontrails";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlicloudActiontrails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlicloudActiontrails to import
  * @param importFromId The id of the existing DataAlicloudActiontrails that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/actiontrails#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlicloudActiontrails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_actiontrails", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/data-sources/actiontrails alicloud_actiontrails} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlicloudActiontrailsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAlicloudActiontrailsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_actiontrails',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
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
    this._ids = config.ids;
    this._includeOrganizationTrail = config.includeOrganizationTrail;
    this._includeShadowTrails = config.includeShadowTrails;
    this._nameRegex = config.nameRegex;
    this._outputFile = config.outputFile;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actiontrails - computed: true, optional: false, required: false
  private _actiontrails = new DataAlicloudActiontrailsActiontrailsList(this, "actiontrails", false);
  public get actiontrails() {
    return this._actiontrails;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // include_organization_trail - computed: false, optional: true, required: false
  private _includeOrganizationTrail?: boolean | cdktf.IResolvable; 
  public get includeOrganizationTrail() {
    return this.getBooleanAttribute('include_organization_trail');
  }
  public set includeOrganizationTrail(value: boolean | cdktf.IResolvable) {
    this._includeOrganizationTrail = value;
  }
  public resetIncludeOrganizationTrail() {
    this._includeOrganizationTrail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeOrganizationTrailInput() {
    return this._includeOrganizationTrail;
  }

  // include_shadow_trails - computed: false, optional: true, required: false
  private _includeShadowTrails?: boolean | cdktf.IResolvable; 
  public get includeShadowTrails() {
    return this.getBooleanAttribute('include_shadow_trails');
  }
  public set includeShadowTrails(value: boolean | cdktf.IResolvable) {
    this._includeShadowTrails = value;
  }
  public resetIncludeShadowTrails() {
    this._includeShadowTrails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeShadowTrailsInput() {
    return this._includeShadowTrails;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // names - computed: true, optional: false, required: false
  public get names() {
    return this.getListAttribute('names');
  }

  // output_file - computed: false, optional: true, required: false
  private _outputFile?: string; 
  public get outputFile() {
    return this.getStringAttribute('output_file');
  }
  public set outputFile(value: string) {
    this._outputFile = value;
  }
  public resetOutputFile() {
    this._outputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFileInput() {
    return this._outputFile;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // trails - computed: true, optional: false, required: false
  private _trails = new DataAlicloudActiontrailsTrailsList(this, "trails", false);
  public get trails() {
    return this._trails;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      include_organization_trail: cdktf.booleanToTerraform(this._includeOrganizationTrail),
      include_shadow_trails: cdktf.booleanToTerraform(this._includeShadowTrails),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      output_file: cdktf.stringToTerraform(this._outputFile),
      status: cdktf.stringToTerraform(this._status),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      include_organization_trail: {
        value: cdktf.booleanToHclTerraform(this._includeOrganizationTrail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      include_shadow_trails: {
        value: cdktf.booleanToHclTerraform(this._includeShadowTrails),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_file: {
        value: cdktf.stringToHclTerraform(this._outputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
