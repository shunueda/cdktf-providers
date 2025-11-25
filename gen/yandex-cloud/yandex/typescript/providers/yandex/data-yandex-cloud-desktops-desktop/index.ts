// https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/cloud_desktops_desktop
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexCloudDesktopsDesktopConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the Desktop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/cloud_desktops_desktop#desktop_id DataYandexCloudDesktopsDesktop#desktop_id}
  */
  readonly desktopId?: string;
  /**
  * The folder containing the Desktop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/cloud_desktops_desktop#folder_id DataYandexCloudDesktopsDesktop#folder_id}
  */
  readonly folderId?: string;
  /**
  * The name of the Desktop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/cloud_desktops_desktop#name DataYandexCloudDesktopsDesktop#name}
  */
  readonly name?: string;
}
export interface DataYandexCloudDesktopsDesktopMembers {
}

export function dataYandexCloudDesktopsDesktopMembersToTerraform(struct?: DataYandexCloudDesktopsDesktopMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexCloudDesktopsDesktopMembersToHclTerraform(struct?: DataYandexCloudDesktopsDesktopMembers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexCloudDesktopsDesktopMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexCloudDesktopsDesktopMembers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexCloudDesktopsDesktopMembers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // subject_id - computed: true, optional: false, required: false
  public get subjectId() {
    return this.getStringAttribute('subject_id');
  }

  // subject_type - computed: true, optional: false, required: false
  public get subjectType() {
    return this.getStringAttribute('subject_type');
  }
}

export class DataYandexCloudDesktopsDesktopMembersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexCloudDesktopsDesktopMembersOutputReference {
    return new DataYandexCloudDesktopsDesktopMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/cloud_desktops_desktop yandex_cloud_desktops_desktop}
*/
export class DataYandexCloudDesktopsDesktop extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_cloud_desktops_desktop";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexCloudDesktopsDesktop resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexCloudDesktopsDesktop to import
  * @param importFromId The id of the existing DataYandexCloudDesktopsDesktop that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/cloud_desktops_desktop#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexCloudDesktopsDesktop to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_cloud_desktops_desktop", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.172.0/docs/data-sources/cloud_desktops_desktop yandex_cloud_desktops_desktop} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexCloudDesktopsDesktopConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexCloudDesktopsDesktopConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_cloud_desktops_desktop',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.172.0',
        providerVersionConstraint: '0.172.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._desktopId = config.desktopId;
    this._folderId = config.folderId;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // desktop_group_id - computed: true, optional: false, required: false
  public get desktopGroupId() {
    return this.getStringAttribute('desktop_group_id');
  }

  // desktop_id - computed: true, optional: true, required: false
  private _desktopId?: string; 
  public get desktopId() {
    return this.getStringAttribute('desktop_id');
  }
  public set desktopId(value: string) {
    this._desktopId = value;
  }
  public resetDesktopId() {
    this._desktopId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desktopIdInput() {
    return this._desktopId;
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // members - computed: true, optional: false, required: false
  private _members = new DataYandexCloudDesktopsDesktopMembersList(this, "members", false);
  public get members() {
    return this._members;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      desktop_id: cdktf.stringToTerraform(this._desktopId),
      folder_id: cdktf.stringToTerraform(this._folderId),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      desktop_id: {
        value: cdktf.stringToHclTerraform(this._desktopId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
