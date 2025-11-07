// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/security_app_hosting_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSdwanSecurityAppHostingFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/security_app_hosting_feature_template#id DataSdwanSecurityAppHostingFeatureTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/security_app_hosting_feature_template#name DataSdwanSecurityAppHostingFeatureTemplate#name}
  */
  readonly name?: string;
}
export interface DataSdwanSecurityAppHostingFeatureTemplateVirtualApplications {
}

export function dataSdwanSecurityAppHostingFeatureTemplateVirtualApplicationsToTerraform(struct?: DataSdwanSecurityAppHostingFeatureTemplateVirtualApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdwanSecurityAppHostingFeatureTemplateVirtualApplicationsToHclTerraform(struct?: DataSdwanSecurityAppHostingFeatureTemplateVirtualApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdwanSecurityAppHostingFeatureTemplateVirtualApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdwanSecurityAppHostingFeatureTemplateVirtualApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdwanSecurityAppHostingFeatureTemplateVirtualApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_type - computed: true, optional: false, required: false
  public get applicationType() {
    return this.getStringAttribute('application_type');
  }

  // data_gateway_ip - computed: true, optional: false, required: false
  public get dataGatewayIp() {
    return this.getStringAttribute('data_gateway_ip');
  }

  // data_gateway_ip_variable - computed: true, optional: false, required: false
  public get dataGatewayIpVariable() {
    return this.getStringAttribute('data_gateway_ip_variable');
  }

  // data_service_ip - computed: true, optional: false, required: false
  public get dataServiceIp() {
    return this.getStringAttribute('data_service_ip');
  }

  // data_service_ip_variable - computed: true, optional: false, required: false
  public get dataServiceIpVariable() {
    return this.getStringAttribute('data_service_ip_variable');
  }

  // database_url - computed: true, optional: false, required: false
  public get databaseUrl() {
    return this.getBooleanAttribute('database_url');
  }

  // database_url_variable - computed: true, optional: false, required: false
  public get databaseUrlVariable() {
    return this.getStringAttribute('database_url_variable');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }

  // nat - computed: true, optional: false, required: false
  public get nat() {
    return this.getBooleanAttribute('nat');
  }

  // nat_variable - computed: true, optional: false, required: false
  public get natVariable() {
    return this.getStringAttribute('nat_variable');
  }

  // optional - computed: true, optional: false, required: false
  public get optional() {
    return this.getBooleanAttribute('optional');
  }

  // resource_profile - computed: true, optional: false, required: false
  public get resourceProfile() {
    return this.getStringAttribute('resource_profile');
  }

  // resource_profile_variable - computed: true, optional: false, required: false
  public get resourceProfileVariable() {
    return this.getStringAttribute('resource_profile_variable');
  }

  // service_gateway_ip - computed: true, optional: false, required: false
  public get serviceGatewayIp() {
    return this.getStringAttribute('service_gateway_ip');
  }

  // service_gateway_ip_variable - computed: true, optional: false, required: false
  public get serviceGatewayIpVariable() {
    return this.getStringAttribute('service_gateway_ip_variable');
  }

  // service_ip - computed: true, optional: false, required: false
  public get serviceIp() {
    return this.getStringAttribute('service_ip');
  }

  // service_ip_variable - computed: true, optional: false, required: false
  public get serviceIpVariable() {
    return this.getStringAttribute('service_ip_variable');
  }
}

export class DataSdwanSecurityAppHostingFeatureTemplateVirtualApplicationsList extends cdktf.ComplexList {

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
  public get(index: number): DataSdwanSecurityAppHostingFeatureTemplateVirtualApplicationsOutputReference {
    return new DataSdwanSecurityAppHostingFeatureTemplateVirtualApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/security_app_hosting_feature_template sdwan_security_app_hosting_feature_template}
*/
export class DataSdwanSecurityAppHostingFeatureTemplate extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_security_app_hosting_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSdwanSecurityAppHostingFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSdwanSecurityAppHostingFeatureTemplate to import
  * @param importFromId The id of the existing DataSdwanSecurityAppHostingFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/security_app_hosting_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSdwanSecurityAppHostingFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_security_app_hosting_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/data-sources/security_app_hosting_feature_template sdwan_security_app_hosting_feature_template} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSdwanSecurityAppHostingFeatureTemplateConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSdwanSecurityAppHostingFeatureTemplateConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sdwan_security_app_hosting_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // device_types - computed: true, optional: false, required: false
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
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

  // name - computed: true, optional: true, required: false
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

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // virtual_applications - computed: true, optional: false, required: false
  private _virtualApplications = new DataSdwanSecurityAppHostingFeatureTemplateVirtualApplicationsList(this, "virtual_applications", false);
  public get virtualApplications() {
    return this._virtualApplications;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
