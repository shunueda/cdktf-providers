// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DtsMigrateServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * destination database type, optional value is mysql/redis/percona/mongodb/postgresql/sqlserver/mariadb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_service#dst_database_type DtsMigrateService#dst_database_type}
  */
  readonly dstDatabaseType: string;
  /**
  * destination region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_service#dst_region DtsMigrateService#dst_region}
  */
  readonly dstRegion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_service#id DtsMigrateService#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * instance class, optional value is small/medium/large/xlarge/2xlarge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_service#instance_class DtsMigrateService#instance_class}
  */
  readonly instanceClass: string;
  /**
  * job name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_service#job_name DtsMigrateService#job_name}
  */
  readonly jobName?: string;
  /**
  * source database type, optional value is mysql/redis/percona/mongodb/postgresql/sqlserver/mariadb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_service#src_database_type DtsMigrateService#src_database_type}
  */
  readonly srcDatabaseType: string;
  /**
  * source region.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_service#src_region DtsMigrateService#src_region}
  */
  readonly srcRegion: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_service#tags DtsMigrateService#tags}
  */
  readonly tags?: DtsMigrateServiceTags[] | cdktf.IResolvable;
}
export interface DtsMigrateServiceTags {
  /**
  * tag key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_service#tag_key DtsMigrateService#tag_key}
  */
  readonly tagKey?: string;
  /**
  * tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_service#tag_value DtsMigrateService#tag_value}
  */
  readonly tagValue?: string;
}

export function dtsMigrateServiceTagsToTerraform(struct?: DtsMigrateServiceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
  }
}


export function dtsMigrateServiceTagsToHclTerraform(struct?: DtsMigrateServiceTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DtsMigrateServiceTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DtsMigrateServiceTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DtsMigrateServiceTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagValue = value.tagValue;
    }
  }

  // tag_key - computed: false, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_value - computed: false, optional: true, required: false
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  public resetTagValue() {
    this._tagValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }
}

export class DtsMigrateServiceTagsList extends cdktf.ComplexList {
  public internalValue? : DtsMigrateServiceTags[] | cdktf.IResolvable

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
  public get(index: number): DtsMigrateServiceTagsOutputReference {
    return new DtsMigrateServiceTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_service tencentcloud_dts_migrate_service}
*/
export class DtsMigrateService extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dts_migrate_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DtsMigrateService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DtsMigrateService to import
  * @param importFromId The id of the existing DtsMigrateService that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DtsMigrateService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dts_migrate_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dts_migrate_service tencentcloud_dts_migrate_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DtsMigrateServiceConfig
  */
  public constructor(scope: Construct, id: string, config: DtsMigrateServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dts_migrate_service',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dstDatabaseType = config.dstDatabaseType;
    this._dstRegion = config.dstRegion;
    this._id = config.id;
    this._instanceClass = config.instanceClass;
    this._jobName = config.jobName;
    this._srcDatabaseType = config.srcDatabaseType;
    this._srcRegion = config.srcRegion;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_database_type - computed: false, optional: false, required: true
  private _dstDatabaseType?: string; 
  public get dstDatabaseType() {
    return this.getStringAttribute('dst_database_type');
  }
  public set dstDatabaseType(value: string) {
    this._dstDatabaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstDatabaseTypeInput() {
    return this._dstDatabaseType;
  }

  // dst_region - computed: false, optional: false, required: true
  private _dstRegion?: string; 
  public get dstRegion() {
    return this.getStringAttribute('dst_region');
  }
  public set dstRegion(value: string) {
    this._dstRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dstRegionInput() {
    return this._dstRegion;
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

  // instance_class - computed: false, optional: false, required: true
  private _instanceClass?: string; 
  public get instanceClass() {
    return this.getStringAttribute('instance_class');
  }
  public set instanceClass(value: string) {
    this._instanceClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceClassInput() {
    return this._instanceClass;
  }

  // job_name - computed: false, optional: true, required: false
  private _jobName?: string; 
  public get jobName() {
    return this.getStringAttribute('job_name');
  }
  public set jobName(value: string) {
    this._jobName = value;
  }
  public resetJobName() {
    this._jobName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobNameInput() {
    return this._jobName;
  }

  // src_database_type - computed: false, optional: false, required: true
  private _srcDatabaseType?: string; 
  public get srcDatabaseType() {
    return this.getStringAttribute('src_database_type');
  }
  public set srcDatabaseType(value: string) {
    this._srcDatabaseType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcDatabaseTypeInput() {
    return this._srcDatabaseType;
  }

  // src_region - computed: false, optional: false, required: true
  private _srcRegion?: string; 
  public get srcRegion() {
    return this.getStringAttribute('src_region');
  }
  public set srcRegion(value: string) {
    this._srcRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get srcRegionInput() {
    return this._srcRegion;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DtsMigrateServiceTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DtsMigrateServiceTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dst_database_type: cdktf.stringToTerraform(this._dstDatabaseType),
      dst_region: cdktf.stringToTerraform(this._dstRegion),
      id: cdktf.stringToTerraform(this._id),
      instance_class: cdktf.stringToTerraform(this._instanceClass),
      job_name: cdktf.stringToTerraform(this._jobName),
      src_database_type: cdktf.stringToTerraform(this._srcDatabaseType),
      src_region: cdktf.stringToTerraform(this._srcRegion),
      tags: cdktf.listMapper(dtsMigrateServiceTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_database_type: {
        value: cdktf.stringToHclTerraform(this._dstDatabaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_region: {
        value: cdktf.stringToHclTerraform(this._dstRegion),
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
      instance_class: {
        value: cdktf.stringToHclTerraform(this._instanceClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      job_name: {
        value: cdktf.stringToHclTerraform(this._jobName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_database_type: {
        value: cdktf.stringToHclTerraform(this._srcDatabaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_region: {
        value: cdktf.stringToHclTerraform(this._srcRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(dtsMigrateServiceTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DtsMigrateServiceTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
