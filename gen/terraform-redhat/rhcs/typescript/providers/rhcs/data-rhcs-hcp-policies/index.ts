// https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_policies
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRhcsHcpPoliciesConfig extends cdktf.TerraformMetaArguments {
}
export interface DataRhcsHcpPoliciesAccountRolePolicies {
}

export function dataRhcsHcpPoliciesAccountRolePoliciesToTerraform(struct?: DataRhcsHcpPoliciesAccountRolePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsHcpPoliciesAccountRolePoliciesToHclTerraform(struct?: DataRhcsHcpPoliciesAccountRolePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsHcpPoliciesAccountRolePoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsHcpPoliciesAccountRolePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsHcpPoliciesAccountRolePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // sts_hcp_installer_permission_policy - computed: true, optional: false, required: false
  public get stsHcpInstallerPermissionPolicy() {
    return this.getStringAttribute('sts_hcp_installer_permission_policy');
  }

  // sts_hcp_instance_worker_permission_policy - computed: true, optional: false, required: false
  public get stsHcpInstanceWorkerPermissionPolicy() {
    return this.getStringAttribute('sts_hcp_instance_worker_permission_policy');
  }

  // sts_hcp_support_permission_policy - computed: true, optional: false, required: false
  public get stsHcpSupportPermissionPolicy() {
    return this.getStringAttribute('sts_hcp_support_permission_policy');
  }

  // sts_support_rh_sre_role - computed: true, optional: false, required: false
  public get stsSupportRhSreRole() {
    return this.getStringAttribute('sts_support_rh_sre_role');
  }
}
export interface DataRhcsHcpPoliciesOperatorRolePolicies {
}

export function dataRhcsHcpPoliciesOperatorRolePoliciesToTerraform(struct?: DataRhcsHcpPoliciesOperatorRolePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataRhcsHcpPoliciesOperatorRolePoliciesToHclTerraform(struct?: DataRhcsHcpPoliciesOperatorRolePolicies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataRhcsHcpPoliciesOperatorRolePoliciesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataRhcsHcpPoliciesOperatorRolePolicies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataRhcsHcpPoliciesOperatorRolePolicies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // openshift_hcp_capa_controller_manager_credentials_policy - computed: true, optional: false, required: false
  public get openshiftHcpCapaControllerManagerCredentialsPolicy() {
    return this.getStringAttribute('openshift_hcp_capa_controller_manager_credentials_policy');
  }

  // openshift_hcp_cloud_network_config_controller_cloud_credentials_policy - computed: true, optional: false, required: false
  public get openshiftHcpCloudNetworkConfigControllerCloudCredentialsPolicy() {
    return this.getStringAttribute('openshift_hcp_cloud_network_config_controller_cloud_credentials_policy');
  }

  // openshift_hcp_cluster_csi_drivers_ebs_cloud_credentials_policy - computed: true, optional: false, required: false
  public get openshiftHcpClusterCsiDriversEbsCloudCredentialsPolicy() {
    return this.getStringAttribute('openshift_hcp_cluster_csi_drivers_ebs_cloud_credentials_policy');
  }

  // openshift_hcp_control_plane_operator_credentials_policy - computed: true, optional: false, required: false
  public get openshiftHcpControlPlaneOperatorCredentialsPolicy() {
    return this.getStringAttribute('openshift_hcp_control_plane_operator_credentials_policy');
  }

  // openshift_hcp_image_registry_installer_cloud_credentials_policy - computed: true, optional: false, required: false
  public get openshiftHcpImageRegistryInstallerCloudCredentialsPolicy() {
    return this.getStringAttribute('openshift_hcp_image_registry_installer_cloud_credentials_policy');
  }

  // openshift_hcp_ingress_operator_cloud_credentials_policy - computed: true, optional: false, required: false
  public get openshiftHcpIngressOperatorCloudCredentialsPolicy() {
    return this.getStringAttribute('openshift_hcp_ingress_operator_cloud_credentials_policy');
  }

  // openshift_hcp_kms_provider_credentials_policy - computed: true, optional: false, required: false
  public get openshiftHcpKmsProviderCredentialsPolicy() {
    return this.getStringAttribute('openshift_hcp_kms_provider_credentials_policy');
  }

  // openshift_hcp_kube_controller_manager_credentials_policy - computed: true, optional: false, required: false
  public get openshiftHcpKubeControllerManagerCredentialsPolicy() {
    return this.getStringAttribute('openshift_hcp_kube_controller_manager_credentials_policy');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_policies rhcs_hcp_policies}
*/
export class DataRhcsHcpPolicies extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rhcs_hcp_policies";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRhcsHcpPolicies resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRhcsHcpPolicies to import
  * @param importFromId The id of the existing DataRhcsHcpPolicies that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_policies#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRhcsHcpPolicies to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rhcs_hcp_policies", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-redhat/rhcs/1.7.2/docs/data-sources/hcp_policies rhcs_hcp_policies} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRhcsHcpPoliciesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRhcsHcpPoliciesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rhcs_hcp_policies',
      terraformGeneratorMetadata: {
        providerName: 'rhcs',
        providerVersion: '1.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_role_policies - computed: true, optional: false, required: false
  private _accountRolePolicies = new DataRhcsHcpPoliciesAccountRolePoliciesOutputReference(this, "account_role_policies");
  public get accountRolePolicies() {
    return this._accountRolePolicies;
  }

  // operator_role_policies - computed: true, optional: false, required: false
  private _operatorRolePolicies = new DataRhcsHcpPoliciesOperatorRolePoliciesOutputReference(this, "operator_role_policies");
  public get operatorRolePolicies() {
    return this._operatorRolePolicies;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
