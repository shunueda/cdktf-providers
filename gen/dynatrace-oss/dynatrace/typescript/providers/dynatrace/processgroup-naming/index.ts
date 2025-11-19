// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcessgroupNamingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The rule is enabled (`true`) or disabled (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#enabled ProcessgroupNaming#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * The name to be assigned to matching entities. You can use the following placeholders here:  * `{AwsAutoScalingGroup:Name}`  * `{AwsAvailabilityZone:Name}`  * `{AwsElasticLoadBalancer:Name}`  * `{AwsRelationalDatabaseService:DBName}`  * `{AwsRelationalDatabaseService:Endpoint}`  * `{AwsRelationalDatabaseService:Engine}`  * `{AwsRelationalDatabaseService:InstanceClass}`  * `{AwsRelationalDatabaseService:Name}`  * `{AwsRelationalDatabaseService:Port}`  * `{AzureRegion:Name}`  * `{AzureScaleSet:Name}`  * `{AzureVm:Name}`  * `{CloudFoundryOrganization:Name}`  * `{CustomDevice:DetectedName}`  * `{CustomDevice:DnsName}`  * `{CustomDevice:IpAddress}`  * `{CustomDevice:Port}`  * `{DockerContainerGroupInstance:ContainerName}`  * `{DockerContainerGroupInstance:FullImageName}`  * `{DockerContainerGroupInstance:ImageVersion}`  * `{DockerContainerGroupInstance:StrippedImageName}`  * `{ESXIHost:HardwareModel}`  * `{ESXIHost:HardwareVendor}`  * `{ESXIHost:Name}`  * `{ESXIHost:ProductName}`  * `{ESXIHost:ProductVersion}`  * `{Ec2Instance:AmiId}`  * `{Ec2Instance:BeanstalkEnvironmentName}`  * `{Ec2Instance:InstanceId}`  * `{Ec2Instance:InstanceType}`  * `{Ec2Instance:LocalHostName}`  * `{Ec2Instance:Name}`  * `{Ec2Instance:PublicHostName}`  * `{Ec2Instance:SecurityGroup}`  * `{GoogleComputeInstance:Id}`  * `{GoogleComputeInstance:IpAddresses}`  * `{GoogleComputeInstance:MachineType}`  * `{GoogleComputeInstance:Name}`  * `{GoogleComputeInstance:ProjectId}`  * `{GoogleComputeInstance:Project}`  * `{Host:AWSNameTag}`  * `{Host:AixLogicalCpuCount}`  * `{Host:AzureHostName}`  * `{Host:AzureSiteName}`  * `{Host:BoshDeploymentId}`  * `{Host:BoshInstanceId}`  * `{Host:BoshInstanceName}`  * `{Host:BoshName}`  * `{Host:BoshStemcellVersion}`  * `{Host:CpuCores}`  * `{Host:DetectedName}`  * `{Host:Environment:AppName}`  * `{Host:Environment:BoshReleaseVersion}`  * `{Host:Environment:Environment}`  * `{Host:Environment:Link}`  * `{Host:Environment:Organization}`  * `{Host:Environment:Owner}`  * `{Host:Environment:Support}`  * `{Host:IpAddress}`  * `{Host:LogicalCpuCores}`  * `{Host:OneAgentCustomHostName}`  * `{Host:OperatingSystemVersion}`  * `{Host:PaasMemoryLimit}`  * `{HostGroup:Name}`  * `{KubernetesCluster:Name}`  * `{KubernetesNode:DetectedName}`  * `{OpenstackAvailabilityZone:Name}`  * `{OpenstackZone:Name}`  * `{OpenstackComputeNode:Name}`  * `{OpenstackProject:Name}`  * `{OpenstackVm:InstanceType}`  * `{OpenstackVm:Name}`  * `{OpenstackVm:SecurityGroup}`  * `{ProcessGroup:AmazonECRImageAccountId}`  * `{ProcessGroup:AmazonECRImageRegion}`  * `{ProcessGroup:AmazonECSCluster}`  * `{ProcessGroup:AmazonECSContainerName}`  * `{ProcessGroup:AmazonECSFamily}`  * `{ProcessGroup:AmazonECSRevision}`  * `{ProcessGroup:AmazonLambdaFunctionName}`  * `{ProcessGroup:AmazonRegion}`  * `{ProcessGroup:ApacheConfigPath}`  * `{ProcessGroup:ApacheSparkMasterIpAddress}`  * `{ProcessGroup:AspDotNetCoreApplicationPath}`  * `{ProcessGroup:AspDotNetCoreApplicationPath}`  * `{ProcessGroup:AzureHostName}`  * `{ProcessGroup:AzureSiteName}`  * `{ProcessGroup:CassandraClusterName}`  * `{ProcessGroup:CatalinaBase}`  * `{ProcessGroup:CatalinaHome}`  * `{ProcessGroup:CloudFoundryAppId}`  * `{ProcessGroup:CloudFoundryAppName}`  * `{ProcessGroup:CloudFoundryInstanceIndex}`  * `{ProcessGroup:CloudFoundrySpaceId}`  * `{ProcessGroup:CloudFoundrySpaceName}`  * `{ProcessGroup:ColdFusionJvmConfigFile}`  * `{ProcessGroup:ColdFusionServiceName}`  * `{ProcessGroup:CommandLineArgs}`  * `{ProcessGroup:DetectedName}`  * `{ProcessGroup:DotNetCommandPath}`  * `{ProcessGroup:DotNetCommand}`  * `{ProcessGroup:DotNetClusterId}`  * `{ProcessGroup:DotNetNodeId}`  * `{ProcessGroup:ElasticsearchClusterName}`  * `{ProcessGroup:ElasticsearchNodeName}`  * `{ProcessGroup:EquinoxConfigPath}`  * `{ProcessGroup:ExeName}`  * `{ProcessGroup:ExePath}`  * `{ProcessGroup:GlassFishDomainName}`  * `{ProcessGroup:GlassFishInstanceName}`  * `{ProcessGroup:GoogleAppEngineInstance}`  * `{ProcessGroup:GoogleAppEngineService}`  * `{ProcessGroup:GoogleCloudProject}`  * `{ProcessGroup:HybrisBinDirectory}`  * `{ProcessGroup:HybrisConfigDirectory}`  * `{ProcessGroup:HybrisConfigDirectory}`  * `{ProcessGroup:HybrisDataDirectory}`  * `{ProcessGroup:IBMCicsRegion}`  * `{ProcessGroup:IBMCtgName}`  * `{ProcessGroup:IBMImsConnectRegion}`  * `{ProcessGroup:IBMImsControlRegion}`  * `{ProcessGroup:IBMImsMessageProcessingRegion}`  * `{ProcessGroup:IBMImsSoapGwName}`  * `{ProcessGroup:IBMIntegrationNodeName}`  * `{ProcessGroup:IBMIntegrationServerName}`  * `{ProcessGroup:IISAppPool}`  * `{ProcessGroup:IISRoleName}`  * `{ProcessGroup:JbossHome}`  * `{ProcessGroup:JbossMode}`  * `{ProcessGroup:JbossServerName}`  * `{ProcessGroup:JavaJarFile}`  * `{ProcessGroup:JavaJarPath}`  * `{ProcessGroup:JavaMainCLass}`  * `{ProcessGroup:KubernetesBasePodName}`  * `{ProcessGroup:KubernetesContainerName}`  * `{ProcessGroup:KubernetesFullPodName}`  * `{ProcessGroup:KubernetesNamespace}`  * `{ProcessGroup:KubernetesPodUid}`  * `{ProcessGroup:MssqlInstanceName}`  * `{ProcessGroup:NodeJsAppBaseDirectory}`  * `{ProcessGroup:NodeJsAppName}`  * `{ProcessGroup:NodeJsScriptName}`  * `{ProcessGroup:OracleSid}`  * `{ProcessGroup:PHPScriptPath}`  * `{ProcessGroup:PHPWorkingDirectory}`  * `{ProcessGroup:Ports}`  * `{ProcessGroup:RubyAppRootPath}`  * `{ProcessGroup:RubyScriptPath}`  * `{ProcessGroup:SoftwareAGInstallRoot}`  * `{ProcessGroup:SoftwareAGProductPropertyName}`  * `{ProcessGroup:SpringBootAppName}`  * `{ProcessGroup:SpringBootProfileName}`  * `{ProcessGroup:SpringBootStartupClass}`  * `{ProcessGroup:TIBCOBusinessWorksAppNodeName}`  * `{ProcessGroup:TIBCOBusinessWorksAppSpaceName}`  * `{ProcessGroup:TIBCOBusinessWorksCeAppName}`  * `{ProcessGroup:TIBCOBusinessWorksCeVersion}`  * `{ProcessGroup:TIBCOBusinessWorksDomainName}`  * `{ProcessGroup:TIBCOBusinessWorksEnginePropertyFilePath}`  * `{ProcessGroup:TIBCOBusinessWorksEnginePropertyFile}`  * `{ProcessGroup:TIBCOBusinessWorksHome}`  * `{ProcessGroup:VarnishInstanceName}`  * `{ProcessGroup:WebLogicClusterName}`  * `{ProcessGroup:WebLogicDomainName}`  * `{ProcessGroup:WebLogicHome}`  * `{ProcessGroup:WebLogicName}`  * `{ProcessGroup:WebSphereCellName}`  * `{ProcessGroup:WebSphereClusterName}`  * `{ProcessGroup:WebSphereNodeName}`  * `{ProcessGroup:WebSphereServerName}`  * `{ProcessGroup:ActorSystem}`  * `{Service:STGServerName}`  * `{Service:DatabaseHostName}`  * `{Service:DatabaseName}`  * `{Service:DatabaseVendor}`  * `{Service:DetectedName}`  * `{Service:EndpointPath}`  * `{Service:EndpointPathGatewayUrl}`  * `{Service:IIBApplicationName}`  * `{Service:MessageListenerClassName}`  * `{Service:Port}`  * `{Service:PublicDomainName}`  * `{Service:RemoteEndpoint}`  * `{Service:RemoteName}`  * `{Service:WebApplicationId}`  * `{Service:WebContextRoot}`  * `{Service:WebServerName}`  * `{Service:WebServiceNamespace}`  * `{Service:WebServiceName}`  * `{VmwareDatacenter:Name}`  * `{VmwareVm:Name}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#format ProcessgroupNaming#format}
  */
  readonly format: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#id ProcessgroupNaming#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#name ProcessgroupNaming#name}
  */
  readonly name: string;
  /**
  * allows for configuring properties that are not explicitly supported by the current version of this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * conditions block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#conditions ProcessgroupNaming#conditions}
  */
  readonly conditions?: ProcessgroupNamingConditions[] | cdktf.IResolvable;
}
export interface ProcessgroupNamingConditionsConditionApplicationType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionApplicationTypeToTerraform(struct?: ProcessgroupNamingConditionsConditionApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionApplicationTypeToHclTerraform(struct?: ProcessgroupNamingConditionsConditionApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionApplicationTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionApplicationType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionApplicationType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionApplicationTypeList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionApplicationType[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionApplicationTypeOutputReference {
    return new ProcessgroupNamingConditionsConditionApplicationTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionApplicationTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be APPLICATION_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionApplicationTypeComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionApplicationTypeComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionApplicationTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionApplicationTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionApplicationTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionApplicationTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionApplicationTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionApplicationTypeComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionApplicationTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionAzureComputeMode {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are DEDICATED or SHARED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionAzureComputeModeToTerraform(struct?: ProcessgroupNamingConditionsConditionAzureComputeMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionAzureComputeModeToHclTerraform(struct?: ProcessgroupNamingConditionsConditionAzureComputeMode | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionAzureComputeModeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionAzureComputeMode | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionAzureComputeMode | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionAzureComputeModeList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionAzureComputeMode[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionAzureComputeModeOutputReference {
    return new ProcessgroupNamingConditionsConditionAzureComputeModeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionAzureComputeModeComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are DEDICATED or SHARED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionAzureComputeModeComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionAzureComputeModeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionAzureComputeModeComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionAzureComputeModeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionAzureComputeModeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionAzureComputeModeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionAzureComputeModeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionAzureComputeModeComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionAzureComputeModeComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionAzureComputeModeComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionAzureComputeModeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionAzureSku {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BASIC, DYNAMIC, FREE, PREMIUM, SHARED and STANDARD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionAzureSkuToTerraform(struct?: ProcessgroupNamingConditionsConditionAzureSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionAzureSkuToHclTerraform(struct?: ProcessgroupNamingConditionsConditionAzureSku | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionAzureSkuOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionAzureSku | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionAzureSku | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionAzureSkuList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionAzureSku[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionAzureSkuOutputReference {
    return new ProcessgroupNamingConditionsConditionAzureSkuOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionAzureSkuComparision {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be AZURE_SKU
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BASIC, DYNAMIC, FREE, PREMIUM, SHARED and STANDARD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionAzureSkuComparisionToTerraform(struct?: ProcessgroupNamingConditionsConditionAzureSkuComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionAzureSkuComparisionToHclTerraform(struct?: ProcessgroupNamingConditionsConditionAzureSkuComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionAzureSkuComparisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionAzureSkuComparision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionAzureSkuComparision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionAzureSkuComparisionList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionAzureSkuComparision[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionAzureSkuComparisionOutputReference {
    return new ProcessgroupNamingConditionsConditionAzureSkuComparisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionBaseComparisonBasic {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The type of comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function processgroupNamingConditionsConditionBaseComparisonBasicToTerraform(struct?: ProcessgroupNamingConditionsConditionBaseComparisonBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function processgroupNamingConditionsConditionBaseComparisonBasicToHclTerraform(struct?: ProcessgroupNamingConditionsConditionBaseComparisonBasic | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionBaseComparisonBasicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionBaseComparisonBasic | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionBaseComparisonBasic | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ProcessgroupNamingConditionsConditionBaseComparisonBasicList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionBaseComparisonBasic[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionBaseComparisonBasicOutputReference {
    return new ProcessgroupNamingConditionsConditionBaseComparisonBasicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionBaseConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#attribute ProcessgroupNaming#attribute}
  */
  readonly attribute: string;
  /**
  * Defines the actual set of fields depending on the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function processgroupNamingConditionsConditionBaseConditionKeyToTerraform(struct?: ProcessgroupNamingConditionsConditionBaseConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function processgroupNamingConditionsConditionBaseConditionKeyToHclTerraform(struct?: ProcessgroupNamingConditionsConditionBaseConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionBaseConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionBaseConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionBaseConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ProcessgroupNamingConditionsConditionBaseConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionBaseConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionBaseConditionKeyOutputReference {
    return new ProcessgroupNamingConditionsConditionBaseConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionBitness {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are 32 and 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionBitnessToTerraform(struct?: ProcessgroupNamingConditionsConditionBitness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionBitnessToHclTerraform(struct?: ProcessgroupNamingConditionsConditionBitness | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionBitnessOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionBitness | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionBitness | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionBitnessList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionBitness[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionBitnessOutputReference {
    return new ProcessgroupNamingConditionsConditionBitnessOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionBitnessComparision {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be BITNESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are 32 and 64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionBitnessComparisionToTerraform(struct?: ProcessgroupNamingConditionsConditionBitnessComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionBitnessComparisionToHclTerraform(struct?: ProcessgroupNamingConditionsConditionBitnessComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionBitnessComparisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionBitnessComparision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionBitnessComparision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionBitnessComparisionList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionBitnessComparision[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionBitnessComparisionOutputReference {
    return new ProcessgroupNamingConditionsConditionBitnessComparisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionCloudType {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AZURE, EC2, GOOGLE_CLOUD_PLATFORM, OPENSTACK, ORACLE and UNRECOGNIZED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionCloudTypeToTerraform(struct?: ProcessgroupNamingConditionsConditionCloudType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionCloudTypeToHclTerraform(struct?: ProcessgroupNamingConditionsConditionCloudType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionCloudTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionCloudType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionCloudType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionCloudTypeList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionCloudType[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionCloudTypeOutputReference {
    return new ProcessgroupNamingConditionsConditionCloudTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionCloudTypeComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be CLOUD_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AZURE, EC2, GOOGLE_CLOUD_PLATFORM, OPENSTACK, ORACLE and UNRECOGNIZED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionCloudTypeComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionCloudTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionCloudTypeComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionCloudTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionCloudTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionCloudTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionCloudTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionCloudTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionCloudTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionCloudTypeComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionCloudTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * The type of comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function processgroupNamingConditionsConditionComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function processgroupNamingConditionsConditionComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ProcessgroupNamingConditionsConditionComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionCustomApplicationType {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AMAZON_ECHO, DESKTOP, EMBEDDED, IOT, MICROSOFT_HOLOLENS and UFO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionCustomApplicationTypeToTerraform(struct?: ProcessgroupNamingConditionsConditionCustomApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionCustomApplicationTypeToHclTerraform(struct?: ProcessgroupNamingConditionsConditionCustomApplicationType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionCustomApplicationTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionCustomApplicationType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionCustomApplicationType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionCustomApplicationTypeList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionCustomApplicationType[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionCustomApplicationTypeOutputReference {
    return new ProcessgroupNamingConditionsConditionCustomApplicationTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionCustomApplicationTypeComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be CUSTOM_APPLICATION_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AMAZON_ECHO, DESKTOP, EMBEDDED, IOT, MICROSOFT_HOLOLENS and UFO.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionCustomApplicationTypeComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionCustomApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionCustomApplicationTypeComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionCustomApplicationTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionCustomApplicationTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionCustomApplicationTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionCustomApplicationTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionCustomApplicationTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionCustomApplicationTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionCustomApplicationTypeComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionCustomApplicationTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionCustomHostMetadataDynamicKey {
  /**
  * The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#key ProcessgroupNaming#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are ENVIRONMENT, GOOGLE_COMPUTE_ENGINE and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#source ProcessgroupNaming#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function processgroupNamingConditionsConditionCustomHostMetadataDynamicKeyToTerraform(struct?: ProcessgroupNamingConditionsConditionCustomHostMetadataDynamicKeyOutputReference | ProcessgroupNamingConditionsConditionCustomHostMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function processgroupNamingConditionsConditionCustomHostMetadataDynamicKeyToHclTerraform(struct?: ProcessgroupNamingConditionsConditionCustomHostMetadataDynamicKeyOutputReference | ProcessgroupNamingConditionsConditionCustomHostMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionCustomHostMetadataDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessgroupNamingConditionsConditionCustomHostMetadataDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionCustomHostMetadataDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ProcessgroupNamingConditionsConditionCustomHostMetadata {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#attribute ProcessgroupNaming#attribute}
  */
  readonly attribute: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#dynamic_key ProcessgroupNaming#dynamic_key}
  */
  readonly dynamicKey: ProcessgroupNamingConditionsConditionCustomHostMetadataDynamicKey;
}

export function processgroupNamingConditionsConditionCustomHostMetadataToTerraform(struct?: ProcessgroupNamingConditionsConditionCustomHostMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: processgroupNamingConditionsConditionCustomHostMetadataDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function processgroupNamingConditionsConditionCustomHostMetadataToHclTerraform(struct?: ProcessgroupNamingConditionsConditionCustomHostMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: processgroupNamingConditionsConditionCustomHostMetadataDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionCustomHostMetadataDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionCustomHostMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionCustomHostMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionCustomHostMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new ProcessgroupNamingConditionsConditionCustomHostMetadataDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: ProcessgroupNamingConditionsConditionCustomHostMetadataDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class ProcessgroupNamingConditionsConditionCustomHostMetadataList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionCustomHostMetadata[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionCustomHostMetadataOutputReference {
    return new ProcessgroupNamingConditionsConditionCustomHostMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey {
  /**
  * The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#key ProcessgroupNaming#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are ENVIRONMENT, GOOGLE_COMPUTE_ENGINE and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#source ProcessgroupNaming#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function processgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyToTerraform(struct?: ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyOutputReference | ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function processgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyToHclTerraform(struct?: ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyOutputReference | ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#attribute ProcessgroupNaming#attribute}
  */
  readonly attribute: string;
  /**
  * if specified, needs to be HOST_CUSTOM_METADATA_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#dynamic_key ProcessgroupNaming#dynamic_key}
  */
  readonly dynamicKey: ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey;
}

export function processgroupNamingConditionsConditionCustomHostMetadataConditionKeyToTerraform(struct?: ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: processgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function processgroupNamingConditionsConditionCustomHostMetadataConditionKeyToHclTerraform(struct?: ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: processgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyOutputReference {
    return new ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionCustomProcessMetadataDynamicKey {
  /**
  *  The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#key ProcessgroupNaming#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are CLOUD_FOUNDRY, ENVIRONMENT, GOOGLE_CLOUD, KUBERNETES and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#source ProcessgroupNaming#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function processgroupNamingConditionsConditionCustomProcessMetadataDynamicKeyToTerraform(struct?: ProcessgroupNamingConditionsConditionCustomProcessMetadataDynamicKeyOutputReference | ProcessgroupNamingConditionsConditionCustomProcessMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function processgroupNamingConditionsConditionCustomProcessMetadataDynamicKeyToHclTerraform(struct?: ProcessgroupNamingConditionsConditionCustomProcessMetadataDynamicKeyOutputReference | ProcessgroupNamingConditionsConditionCustomProcessMetadataDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionCustomProcessMetadataDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessgroupNamingConditionsConditionCustomProcessMetadataDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionCustomProcessMetadataDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ProcessgroupNamingConditionsConditionCustomProcessMetadata {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#attribute ProcessgroupNaming#attribute}
  */
  readonly attribute: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#dynamic_key ProcessgroupNaming#dynamic_key}
  */
  readonly dynamicKey: ProcessgroupNamingConditionsConditionCustomProcessMetadataDynamicKey;
}

export function processgroupNamingConditionsConditionCustomProcessMetadataToTerraform(struct?: ProcessgroupNamingConditionsConditionCustomProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: processgroupNamingConditionsConditionCustomProcessMetadataDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function processgroupNamingConditionsConditionCustomProcessMetadataToHclTerraform(struct?: ProcessgroupNamingConditionsConditionCustomProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: processgroupNamingConditionsConditionCustomProcessMetadataDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionCustomProcessMetadataDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionCustomProcessMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionCustomProcessMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionCustomProcessMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new ProcessgroupNamingConditionsConditionCustomProcessMetadataDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: ProcessgroupNamingConditionsConditionCustomProcessMetadataDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class ProcessgroupNamingConditionsConditionCustomProcessMetadataList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionCustomProcessMetadata[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionCustomProcessMetadataOutputReference {
    return new ProcessgroupNamingConditionsConditionCustomProcessMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey {
  /**
  *  The actual key of the custom metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#key ProcessgroupNaming#key}
  */
  readonly key: string;
  /**
  * The source of the custom metadata. Possible values are CLOUD_FOUNDRY, ENVIRONMENT, GOOGLE_CLOUD, KUBERNETES and PLUGIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#source ProcessgroupNaming#source}
  */
  readonly source: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function processgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyToTerraform(struct?: ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyOutputReference | ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    source: cdktf.stringToTerraform(struct!.source),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function processgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyToHclTerraform(struct?: ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyOutputReference | ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._key = undefined;
      this._source = undefined;
      this._unknowns = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._key = value.key;
      this._source = value.source;
      this._unknowns = value.unknowns;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}
export interface ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#attribute ProcessgroupNaming#attribute}
  */
  readonly attribute: string;
  /**
  * if specified, needs to be PROCESS_CUSTOM_METADATA_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * dynamic_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#dynamic_key ProcessgroupNaming#dynamic_key}
  */
  readonly dynamicKey: ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey;
}

export function processgroupNamingConditionsConditionCustomProcessMetadataConditionKeyToTerraform(struct?: ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    dynamic_key: processgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyToTerraform(struct!.dynamicKey),
  }
}


export function processgroupNamingConditionsConditionCustomProcessMetadataConditionKeyToHclTerraform(struct?: ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: processgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyToHclTerraform(struct!.dynamicKey),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._dynamicKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._dynamicKey.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._dynamicKey.internalValue = value.dynamicKey;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey = new ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKeyOutputReference(this, "dynamic_key");
  public get dynamicKey() {
    return this._dynamicKey;
  }
  public putDynamicKey(value: ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyDynamicKey) {
    this._dynamicKey.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey.internalValue;
  }
}

export class ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyOutputReference {
    return new ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionDatabaseTopology {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLUSTER, EMBEDDED, FAILOVER, IPC, LOAD_BALANCING, SINGLE_SERVER and UNSPECIFIED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionDatabaseTopologyToTerraform(struct?: ProcessgroupNamingConditionsConditionDatabaseTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionDatabaseTopologyToHclTerraform(struct?: ProcessgroupNamingConditionsConditionDatabaseTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionDatabaseTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionDatabaseTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionDatabaseTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionDatabaseTopologyList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionDatabaseTopology[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionDatabaseTopologyOutputReference {
    return new ProcessgroupNamingConditionsConditionDatabaseTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionDatabaseTopologyComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be DATABASE_TOPOLOGY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLUSTER, EMBEDDED, FAILOVER, IPC, LOAD_BALANCING, SINGLE_SERVER and UNSPECIFIED.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionDatabaseTopologyComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionDatabaseTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionDatabaseTopologyComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionDatabaseTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionDatabaseTopologyComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionDatabaseTopologyComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionDatabaseTopologyComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionDatabaseTopologyComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionDatabaseTopologyComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionDatabaseTopologyComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionDatabaseTopologyComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionDcrumDecoder {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ALL_OTHER, CITRIX_APPFLOW, CITRIX_ICA, CITRIX_ICA_OVER_SSL, DB2_DRDA, HTTP, HTTPS, HTTP_EXPRESS, INFORMIX, MYSQL, ORACLE, SAP_GUI, SAP_GUI_OVER_HTTP, SAP_GUI_OVER_HTTPS, SAP_HANA_DB, SAP_RFC, SSL and TDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionDcrumDecoderToTerraform(struct?: ProcessgroupNamingConditionsConditionDcrumDecoder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionDcrumDecoderToHclTerraform(struct?: ProcessgroupNamingConditionsConditionDcrumDecoder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionDcrumDecoderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionDcrumDecoder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionDcrumDecoder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionDcrumDecoderList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionDcrumDecoder[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionDcrumDecoderOutputReference {
    return new ProcessgroupNamingConditionsConditionDcrumDecoderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionDcrumDecoderComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be DCRUM_DECODER_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ALL_OTHER, CITRIX_APPFLOW, CITRIX_ICA, CITRIX_ICA_OVER_SSL, DB2_DRDA, HTTP, HTTPS, HTTP_EXPRESS, INFORMIX, MYSQL, ORACLE, SAP_GUI, SAP_GUI_OVER_HTTP, SAP_GUI_OVER_HTTPS, SAP_HANA_DB, SAP_RFC, SSL and TDS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionDcrumDecoderComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionDcrumDecoderComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionDcrumDecoderComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionDcrumDecoderComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionDcrumDecoderComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionDcrumDecoderComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionDcrumDecoderComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionDcrumDecoderComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionDcrumDecoderComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionDcrumDecoderComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionDcrumDecoderComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionEntity {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Currently only EQUALS is supported. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionEntityToTerraform(struct?: ProcessgroupNamingConditionsConditionEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionEntityToHclTerraform(struct?: ProcessgroupNamingConditionsConditionEntity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionEntityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionEntity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionEntity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionEntityList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionEntity[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionEntityOutputReference {
    return new ProcessgroupNamingConditionsConditionEntityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionEntityIdComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Currently only EQUALS is supported. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be ENTITY_ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionEntityIdComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionEntityIdComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionEntityIdComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionEntityIdComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionEntityIdComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionEntityIdComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionEntityIdComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionEntityIdComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionEntityIdComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionEntityIdComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionEntityIdComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionHostTechValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set. Possible values are APPARMOR, BOSH, BOSHBPM, CLOUDFOUNDRY, CONTAINERD, CRIO, DIEGO_CELL, DOCKER, GARDEN, GRSECURITY, KUBERNETES, OPENSHIFT, OPENSTACK_COMPUTE, OPENSTACK_CONTROLLER and SELINUX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#verbatim_type ProcessgroupNaming#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function processgroupNamingConditionsConditionHostTechValueToTerraform(struct?: ProcessgroupNamingConditionsConditionHostTechValueOutputReference | ProcessgroupNamingConditionsConditionHostTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function processgroupNamingConditionsConditionHostTechValueToHclTerraform(struct?: ProcessgroupNamingConditionsConditionHostTechValueOutputReference | ProcessgroupNamingConditionsConditionHostTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionHostTechValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessgroupNamingConditionsConditionHostTechValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionHostTechValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface ProcessgroupNamingConditionsConditionHostTech {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: ProcessgroupNamingConditionsConditionHostTechValue;
}

export function processgroupNamingConditionsConditionHostTechToTerraform(struct?: ProcessgroupNamingConditionsConditionHostTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: processgroupNamingConditionsConditionHostTechValueToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionHostTechToHclTerraform(struct?: ProcessgroupNamingConditionsConditionHostTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: processgroupNamingConditionsConditionHostTechValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionHostTechValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionHostTechOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionHostTech | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionHostTech | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ProcessgroupNamingConditionsConditionHostTechValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ProcessgroupNamingConditionsConditionHostTechValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ProcessgroupNamingConditionsConditionHostTechList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionHostTech[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionHostTechOutputReference {
    return new ProcessgroupNamingConditionsConditionHostTechOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionHypervisor {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AHV, HYPER_V, KVM, LPAR, QEMU, VIRTUAL_BOX, VMWARE, WPAR and XEN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionHypervisorToTerraform(struct?: ProcessgroupNamingConditionsConditionHypervisor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionHypervisorToHclTerraform(struct?: ProcessgroupNamingConditionsConditionHypervisor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionHypervisorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionHypervisor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionHypervisor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionHypervisorList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionHypervisor[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionHypervisorOutputReference {
    return new ProcessgroupNamingConditionsConditionHypervisorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionHypervisorTypeComparision {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be HYPERVISOR_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AHV, HYPER_V, KVM, LPAR, QEMU, VIRTUAL_BOX, VMWARE, WPAR and XEN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionHypervisorTypeComparisionToTerraform(struct?: ProcessgroupNamingConditionsConditionHypervisorTypeComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionHypervisorTypeComparisionToHclTerraform(struct?: ProcessgroupNamingConditionsConditionHypervisorTypeComparision | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionHypervisorTypeComparisionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionHypervisorTypeComparision | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionHypervisorTypeComparision | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionHypervisorTypeComparisionList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionHypervisorTypeComparision[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionHypervisorTypeComparisionOutputReference {
    return new ProcessgroupNamingConditionsConditionHypervisorTypeComparisionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionIndexedName {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS, CONTAINS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionIndexedNameToTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionIndexedNameToHclTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedName | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionIndexedNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionIndexedName | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionIndexedName | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionIndexedNameList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionIndexedName[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionIndexedNameOutputReference {
    return new ProcessgroupNamingConditionsConditionIndexedNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionIndexedNameComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS, CONTAINS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INDEXED_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionIndexedNameComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedNameComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionIndexedNameComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedNameComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionIndexedNameComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionIndexedNameComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionIndexedNameComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionIndexedNameComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionIndexedNameComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionIndexedNameComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionIndexedNameComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionIndexedString {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionIndexedStringToTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionIndexedStringToHclTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionIndexedStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionIndexedString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionIndexedString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionIndexedStringList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionIndexedString[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionIndexedStringOutputReference {
    return new ProcessgroupNamingConditionsConditionIndexedStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionIndexedStringComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INDEXED_STRING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionIndexedStringComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionIndexedStringComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionIndexedStringComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionIndexedStringComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionIndexedStringComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionIndexedStringComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionIndexedStringComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionIndexedStringComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionIndexedStringComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionIndexedTagValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#context ProcessgroupNaming#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#key ProcessgroupNaming#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionIndexedTagValueToTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedTagValueOutputReference | ProcessgroupNamingConditionsConditionIndexedTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionIndexedTagValueToHclTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedTagValueOutputReference | ProcessgroupNamingConditionsConditionIndexedTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionIndexedTagValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessgroupNamingConditionsConditionIndexedTagValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionIndexedTagValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ProcessgroupNamingConditionsConditionIndexedTag {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: ProcessgroupNamingConditionsConditionIndexedTagValue;
}

export function processgroupNamingConditionsConditionIndexedTagToTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: processgroupNamingConditionsConditionIndexedTagValueToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionIndexedTagToHclTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: processgroupNamingConditionsConditionIndexedTagValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionIndexedTagValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionIndexedTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionIndexedTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionIndexedTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ProcessgroupNamingConditionsConditionIndexedTagValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ProcessgroupNamingConditionsConditionIndexedTagValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ProcessgroupNamingConditionsConditionIndexedTagList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionIndexedTag[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionIndexedTagOutputReference {
    return new ProcessgroupNamingConditionsConditionIndexedTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionIndexedTagComparisonValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#context ProcessgroupNaming#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#key ProcessgroupNaming#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionIndexedTagComparisonValueToTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedTagComparisonValueOutputReference | ProcessgroupNamingConditionsConditionIndexedTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionIndexedTagComparisonValueToHclTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedTagComparisonValueOutputReference | ProcessgroupNamingConditionsConditionIndexedTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionIndexedTagComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessgroupNamingConditionsConditionIndexedTagComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionIndexedTagComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ProcessgroupNamingConditionsConditionIndexedTagComparison {
  /**
  * Reverses the operator. For example it turns EQUALS into DOES NOT EQUAL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Either EQUALS or EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INDEXED_TAG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: ProcessgroupNamingConditionsConditionIndexedTagComparisonValue;
}

export function processgroupNamingConditionsConditionIndexedTagComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: processgroupNamingConditionsConditionIndexedTagComparisonValueToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionIndexedTagComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionIndexedTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: processgroupNamingConditionsConditionIndexedTagComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionIndexedTagComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionIndexedTagComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionIndexedTagComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionIndexedTagComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ProcessgroupNamingConditionsConditionIndexedTagComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ProcessgroupNamingConditionsConditionIndexedTagComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ProcessgroupNamingConditionsConditionIndexedTagComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionIndexedTagComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionIndexedTagComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionIndexedTagComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionInteger {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS, EXISTS, GREATER_THAN, GREATER_THAN_OR_EQUAL, LOWER_THAN and LOWER_THAN_OR_EQUAL. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: number;
}

export function processgroupNamingConditionsConditionIntegerToTerraform(struct?: ProcessgroupNamingConditionsConditionInteger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionIntegerToHclTerraform(struct?: ProcessgroupNamingConditionsConditionInteger | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionIntegerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionInteger | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionInteger | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionIntegerList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionInteger[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionIntegerOutputReference {
    return new ProcessgroupNamingConditionsConditionIntegerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionIntegerComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS, EXISTS, GREATER_THAN, GREATER_THAN_OR_EQUAL, LOWER_THAN and LOWER_THAN_OR_EQUAL. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be INTEGER
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: number;
}

export function processgroupNamingConditionsConditionIntegerComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionIntegerComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionIntegerComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionIntegerComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionIntegerComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionIntegerComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionIntegerComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionIntegerComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionIntegerComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionIntegerComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionIntegerComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionIpaddress {
  /**
  *  The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#case_sensitive ProcessgroupNaming#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS, IS_IP_IN_RANGE and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionIpaddressToTerraform(struct?: ProcessgroupNamingConditionsConditionIpaddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionIpaddressToHclTerraform(struct?: ProcessgroupNamingConditionsConditionIpaddress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionIpaddressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionIpaddress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionIpaddress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionIpaddressList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionIpaddress[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionIpaddressOutputReference {
    return new ProcessgroupNamingConditionsConditionIpaddressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionIpaddressComparison {
  /**
  *  The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#case_sensitive ProcessgroupNaming#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS, IS_IP_IN_RANGE and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be IP_ADDRESS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionIpaddressComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionIpaddressComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionIpaddressComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionIpaddressComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionIpaddressComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionIpaddressComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionIpaddressComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionIpaddressComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionIpaddressComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionIpaddressComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionIpaddressComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#attribute ProcessgroupNaming#attribute}
  */
  readonly attribute: string;
  /**
  * Defines the actual set of fields depending on the value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function processgroupNamingConditionsConditionKeyToTerraform(struct?: ProcessgroupNamingConditionsConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function processgroupNamingConditionsConditionKeyToHclTerraform(struct?: ProcessgroupNamingConditionsConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ProcessgroupNamingConditionsConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionKeyOutputReference {
    return new ProcessgroupNamingConditionsConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionMobilePlatform {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ANDROID, IOS, LINUX, MAC_OS, OTHER, TVOS and WINDOWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionMobilePlatformToTerraform(struct?: ProcessgroupNamingConditionsConditionMobilePlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionMobilePlatformToHclTerraform(struct?: ProcessgroupNamingConditionsConditionMobilePlatform | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionMobilePlatformOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionMobilePlatform | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionMobilePlatform | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionMobilePlatformList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionMobilePlatform[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionMobilePlatformOutputReference {
    return new ProcessgroupNamingConditionsConditionMobilePlatformOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionMobilePlatformComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be MOBILE_PLATFORM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ANDROID, IOS, LINUX, MAC_OS, OTHER, TVOS and WINDOWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionMobilePlatformComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionMobilePlatformComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionMobilePlatformComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionMobilePlatformComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionMobilePlatformComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionMobilePlatformComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionMobilePlatformComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionMobilePlatformComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionMobilePlatformComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionMobilePlatformComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionMobilePlatformComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionOsArch {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ARM, IA64, PARISC, PPC, PPCLE, S390, SPARC, X86 and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionOsArchToTerraform(struct?: ProcessgroupNamingConditionsConditionOsArch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionOsArchToHclTerraform(struct?: ProcessgroupNamingConditionsConditionOsArch | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionOsArchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionOsArch | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionOsArch | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionOsArchList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionOsArch[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionOsArchOutputReference {
    return new ProcessgroupNamingConditionsConditionOsArchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionOsType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AIX, DARWIN, HPUX, LINUX, SOLARIS, WINDOWS and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionOsTypeToTerraform(struct?: ProcessgroupNamingConditionsConditionOsType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionOsTypeToHclTerraform(struct?: ProcessgroupNamingConditionsConditionOsType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionOsTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionOsType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionOsType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionOsTypeList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionOsType[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionOsTypeOutputReference {
    return new ProcessgroupNamingConditionsConditionOsTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionOsarchitectureComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be OS_ARCHITECTURE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are ARM, IA64, PARISC, PPC, PPCLE, S390, SPARC, X86 and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionOsarchitectureComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionOsarchitectureComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionOsarchitectureComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionOsarchitectureComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionOsarchitectureComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionOsarchitectureComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionOsarchitectureComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionOsarchitectureComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionOsarchitectureComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionOsarchitectureComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionOsarchitectureComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionOstypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be OS_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AIX, DARWIN, HPUX, LINUX, SOLARIS, WINDOWS and ZOS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionOstypeComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionOstypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionOstypeComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionOstypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionOstypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionOstypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionOstypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionOstypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionOstypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionOstypeComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionOstypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionPaasType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AWS_ECS_EC2, AWS_ECS_FARGATE, AWS_LAMBDA, AZURE_FUNCTIONS, AZURE_WEBSITES, CLOUD_FOUNDRY, GOOGLE_APP_ENGINE, HEROKU, KUBERNETES and OPENSHIFT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionPaasTypeToTerraform(struct?: ProcessgroupNamingConditionsConditionPaasType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionPaasTypeToHclTerraform(struct?: ProcessgroupNamingConditionsConditionPaasType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionPaasTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionPaasType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionPaasType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionPaasTypeList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionPaasType[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionPaasTypeOutputReference {
    return new ProcessgroupNamingConditionsConditionPaasTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionPaasTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be PAAS_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are AWS_ECS_EC2, AWS_ECS_FARGATE, AWS_LAMBDA, AZURE_FUNCTIONS, AZURE_WEBSITES, CLOUD_FOUNDRY, GOOGLE_APP_ENGINE, HEROKU, KUBERNETES and OPENSHIFT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionPaasTypeComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionPaasTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionPaasTypeComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionPaasTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionPaasTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionPaasTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionPaasTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionPaasTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionPaasTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionPaasTypeComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionPaasTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionProcessMetadata {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#attribute ProcessgroupNaming#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are AMAZON_ECR_IMAGE_ACCOUNT_ID,AMAZON_ECR_IMAGE_REGION, AMAZON_LAMBDA_FUNCTION_NAME, AMAZON_REGION, APACHE_CONFIG_PATH, APACHE_SPARK_MASTER_IP_ADDRESS, ASP_DOT_NET_CORE_APPLICATION_PATH, AWS_ECS_CLUSTER, AWS_ECS_CONTAINERNAME, AWS_ECS_FAMILY, AWS_ECS_REVISION, CASSANDRA_CLUSTER_NAME, CATALINA_BASE, CATALINA_HOME, CLOUD_FOUNDRY_APP_ID, CLOUD_FOUNDRY_APP_NAME, CLOUD_FOUNDRY_INSTANCE_INDEX, CLOUD_FOUNDRY_SPACE_ID, CLOUD_FOUNDRY_SPACE_NAME, COLDFUSION_JVM_CONFIG_FILE, COLDFUSION_SERVICE_NAME, COMMAND_LINE_ARGS, DOTNET_COMMAND, DOTNET_COMMAND_PATH, DYNATRACE_CLUSTER_ID, DYNATRACE_NODE_ID, ELASTICSEARCH_CLUSTER_NAME, ELASTICSEARCH_NODE_NAME, EQUINOX_CONFIG_PATH, EXE_NAME, EXE_PATH, GLASS_FISH_DOMAIN_NAME, GLASS_FISH_INSTANCE_NAME, GOOGLE_APP_ENGINE_INSTANCE, GOOGLE_APP_ENGINE_SERVICE, GOOGLE_CLOUD_PROJECT, HYBRIS_BIN_DIRECTORY, HYBRIS_CONFIG_DIRECTORY, HYBRIS_DATA_DIRECTORY, IBM_CICS_REGION, IBM_CTG_NAME, IBM_IMS_CONNECT_REGION, IBM_IMS_CONTROL_REGION, IBM_IMS_MESSAGE_PROCESSING_REGION, IBM_IMS_SOAP_GW_NAME, IBM_INTEGRATION_NODE_NAME, IBM_INTEGRATION_SERVER_NAME, IIS_APP_POOL, IIS_ROLE_NAME, JAVA_JAR_FILE, JAVA_JAR_PATH, JAVA_MAIN_CLASS, JAVA_MAIN_MODULE, JBOSS_HOME, JBOSS_MODE, JBOSS_SERVER_NAME, KUBERNETES_BASE_POD_NAME, KUBERNETES_CONTAINER_NAME, KUBERNETES_FULL_POD_NAME, KUBERNETES_NAMESPACE, KUBERNETES_POD_UID, MSSQL_INSTANCE_NAME, NODE_JS_APP_BASE_DIRECTORY, NODE_JS_APP_NAME, NODE_JS_SCRIPT_NAME, ORACLE_SID, PG_ID_CALC_INPUT_KEY_LINKAGE, PHP_SCRIPT_PATH, PHP_WORKING_DIRECTORY, RUBY_APP_ROOT_PATH, RUBY_SCRIPT_PATH, RULE_RESULT, SOFTWAREAG_INSTALL_ROOT, SOFTWAREAG_PRODUCTPROPNAME, SPRINGBOOT_APP_NAME, SPRINGBOOT_PROFILE_NAME, SPRINGBOOT_STARTUP_CLASS, TIBCO_BUSINESSWORKS_CE_APP_NAME, TIBCO_BUSINESSWORKS_CE_VERSION, TIBCO_BUSINESS_WORKS_APP_NODE_NAME, TIBCO_BUSINESS_WORKS_APP_SPACE_NAME, TIBCO_BUSINESS_WORKS_DOMAIN_NAME, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH, TIBCO_BUSINESS_WORKS_HOME, VARNISH_INSTANCE_NAME, WEB_LOGIC_CLUSTER_NAME, WEB_LOGIC_DOMAIN_NAME, WEB_LOGIC_HOME, WEB_LOGIC_NAME, WEB_SPHERE_CELL_NAME, WEB_SPHERE_CLUSTER_NAME, WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#dynamic_key ProcessgroupNaming#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function processgroupNamingConditionsConditionProcessMetadataToTerraform(struct?: ProcessgroupNamingConditionsConditionProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function processgroupNamingConditionsConditionProcessMetadataToHclTerraform(struct?: ProcessgroupNamingConditionsConditionProcessMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionProcessMetadataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionProcessMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionProcessMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ProcessgroupNamingConditionsConditionProcessMetadataList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionProcessMetadata[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionProcessMetadataOutputReference {
    return new ProcessgroupNamingConditionsConditionProcessMetadataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionProcessMetadataConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#attribute ProcessgroupNaming#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are AMAZON_ECR_IMAGE_ACCOUNT_ID,AMAZON_ECR_IMAGE_REGION, AMAZON_LAMBDA_FUNCTION_NAME, AMAZON_REGION, APACHE_CONFIG_PATH, APACHE_SPARK_MASTER_IP_ADDRESS, ASP_DOT_NET_CORE_APPLICATION_PATH, AWS_ECS_CLUSTER, AWS_ECS_CONTAINERNAME, AWS_ECS_FAMILY, AWS_ECS_REVISION, CASSANDRA_CLUSTER_NAME, CATALINA_BASE, CATALINA_HOME, CLOUD_FOUNDRY_APP_ID, CLOUD_FOUNDRY_APP_NAME, CLOUD_FOUNDRY_INSTANCE_INDEX, CLOUD_FOUNDRY_SPACE_ID, CLOUD_FOUNDRY_SPACE_NAME, COLDFUSION_JVM_CONFIG_FILE, COLDFUSION_SERVICE_NAME, COMMAND_LINE_ARGS, DOTNET_COMMAND, DOTNET_COMMAND_PATH, DYNATRACE_CLUSTER_ID, DYNATRACE_NODE_ID, ELASTICSEARCH_CLUSTER_NAME, ELASTICSEARCH_NODE_NAME, EQUINOX_CONFIG_PATH, EXE_NAME, EXE_PATH, GLASS_FISH_DOMAIN_NAME, GLASS_FISH_INSTANCE_NAME, GOOGLE_APP_ENGINE_INSTANCE, GOOGLE_APP_ENGINE_SERVICE, GOOGLE_CLOUD_PROJECT, HYBRIS_BIN_DIRECTORY, HYBRIS_CONFIG_DIRECTORY, HYBRIS_DATA_DIRECTORY, IBM_CICS_REGION, IBM_CTG_NAME, IBM_IMS_CONNECT_REGION, IBM_IMS_CONTROL_REGION, IBM_IMS_MESSAGE_PROCESSING_REGION, IBM_IMS_SOAP_GW_NAME, IBM_INTEGRATION_NODE_NAME, IBM_INTEGRATION_SERVER_NAME, IIS_APP_POOL, IIS_ROLE_NAME, JAVA_JAR_FILE, JAVA_JAR_PATH, JAVA_MAIN_CLASS, JAVA_MAIN_MODULE, JBOSS_HOME, JBOSS_MODE, JBOSS_SERVER_NAME, KUBERNETES_BASE_POD_NAME, KUBERNETES_CONTAINER_NAME, KUBERNETES_FULL_POD_NAME, KUBERNETES_NAMESPACE, KUBERNETES_POD_UID, MSSQL_INSTANCE_NAME, NODE_JS_APP_BASE_DIRECTORY, NODE_JS_APP_NAME, NODE_JS_SCRIPT_NAME, ORACLE_SID, PG_ID_CALC_INPUT_KEY_LINKAGE, PHP_SCRIPT_PATH, PHP_WORKING_DIRECTORY, RUBY_APP_ROOT_PATH, RUBY_SCRIPT_PATH, RULE_RESULT, SOFTWAREAG_INSTALL_ROOT, SOFTWAREAG_PRODUCTPROPNAME, SPRINGBOOT_APP_NAME, SPRINGBOOT_PROFILE_NAME, SPRINGBOOT_STARTUP_CLASS, TIBCO_BUSINESSWORKS_CE_APP_NAME, TIBCO_BUSINESSWORKS_CE_VERSION, TIBCO_BUSINESS_WORKS_APP_NODE_NAME, TIBCO_BUSINESS_WORKS_APP_SPACE_NAME, TIBCO_BUSINESS_WORKS_DOMAIN_NAME, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE, TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH, TIBCO_BUSINESS_WORKS_HOME, VARNISH_INSTANCE_NAME, WEB_LOGIC_CLUSTER_NAME, WEB_LOGIC_DOMAIN_NAME, WEB_LOGIC_HOME, WEB_LOGIC_NAME, WEB_SPHERE_CELL_NAME, WEB_SPHERE_CLUSTER_NAME, WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#dynamic_key ProcessgroupNaming#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * if specified, needs to be PROCESS_PREDEFINED_METADATA_KEY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function processgroupNamingConditionsConditionProcessMetadataConditionKeyToTerraform(struct?: ProcessgroupNamingConditionsConditionProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function processgroupNamingConditionsConditionProcessMetadataConditionKeyToHclTerraform(struct?: ProcessgroupNamingConditionsConditionProcessMetadataConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionProcessMetadataConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionProcessMetadataConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionProcessMetadataConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ProcessgroupNamingConditionsConditionProcessMetadataConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionProcessMetadataConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionProcessMetadataConditionKeyOutputReference {
    return new ProcessgroupNamingConditionsConditionProcessMetadataConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionServiceTopology {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are EXTERNAL_SERVICE, FULLY_MONITORED and OPAQUE_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionServiceTopologyToTerraform(struct?: ProcessgroupNamingConditionsConditionServiceTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionServiceTopologyToHclTerraform(struct?: ProcessgroupNamingConditionsConditionServiceTopology | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionServiceTopologyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionServiceTopology | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionServiceTopology | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionServiceTopologyList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionServiceTopology[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionServiceTopologyOutputReference {
    return new ProcessgroupNamingConditionsConditionServiceTopologyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionServiceTopologyComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SERVICE_TOPOLOGY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are EXTERNAL_SERVICE, FULLY_MONITORED and OPAQUE_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionServiceTopologyComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionServiceTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionServiceTopologyComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionServiceTopologyComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionServiceTopologyComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionServiceTopologyComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionServiceTopologyComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionServiceTopologyComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionServiceTopologyComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionServiceTopologyComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionServiceTopologyComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionServiceType {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BACKGROUND_ACTIVITY, CICS_SERVICE, CUSTOM_SERVICE, DATABASE_SERVICE, ENTERPRISE_SERVICE_BUS_SERVICE, EXTERNAL, IBM_INTEGRATION_BUS_SERVICE, IMS_SERVICE, MESSAGING_SERVICE, QUEUE_LISTENER_SERVICE, RMI_SERVICE, RPC_SERVICE, WEB_REQUEST_SERVICE and WEB_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionServiceTypeToTerraform(struct?: ProcessgroupNamingConditionsConditionServiceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionServiceTypeToHclTerraform(struct?: ProcessgroupNamingConditionsConditionServiceType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionServiceTypeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionServiceType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionServiceType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionServiceTypeList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionServiceType[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionServiceTypeOutputReference {
    return new ProcessgroupNamingConditionsConditionServiceTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionServiceTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SERVICE_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are BACKGROUND_ACTIVITY, CICS_SERVICE, CUSTOM_SERVICE, DATABASE_SERVICE, ENTERPRISE_SERVICE_BUS_SERVICE, EXTERNAL, IBM_INTEGRATION_BUS_SERVICE, IMS_SERVICE, MESSAGING_SERVICE, QUEUE_LISTENER_SERVICE, RMI_SERVICE, RPC_SERVICE, WEB_REQUEST_SERVICE and WEB_SERVICE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionServiceTypeComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionServiceTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionServiceTypeComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionServiceTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionServiceTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionServiceTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionServiceTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionServiceTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionServiceTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionServiceTypeComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionServiceTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionSimpleHostTechComparisonValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set. Possible values are APPARMOR, BOSH, BOSHBPM, CLOUDFOUNDRY, CONTAINERD, CRIO, DIEGO_CELL, DOCKER, GARDEN, GRSECURITY, KUBERNETES, OPENSHIFT, OPENSTACK_COMPUTE, OPENSTACK_CONTROLLER and SELINUX
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#verbatim_type ProcessgroupNaming#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function processgroupNamingConditionsConditionSimpleHostTechComparisonValueToTerraform(struct?: ProcessgroupNamingConditionsConditionSimpleHostTechComparisonValueOutputReference | ProcessgroupNamingConditionsConditionSimpleHostTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function processgroupNamingConditionsConditionSimpleHostTechComparisonValueToHclTerraform(struct?: ProcessgroupNamingConditionsConditionSimpleHostTechComparisonValueOutputReference | ProcessgroupNamingConditionsConditionSimpleHostTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionSimpleHostTechComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessgroupNamingConditionsConditionSimpleHostTechComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionSimpleHostTechComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface ProcessgroupNamingConditionsConditionSimpleHostTechComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SIMPLE_HOST_TECH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: ProcessgroupNamingConditionsConditionSimpleHostTechComparisonValue;
}

export function processgroupNamingConditionsConditionSimpleHostTechComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionSimpleHostTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: processgroupNamingConditionsConditionSimpleHostTechComparisonValueToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionSimpleHostTechComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionSimpleHostTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: processgroupNamingConditionsConditionSimpleHostTechComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionSimpleHostTechComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionSimpleHostTechComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionSimpleHostTechComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionSimpleHostTechComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ProcessgroupNamingConditionsConditionSimpleHostTechComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ProcessgroupNamingConditionsConditionSimpleHostTechComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ProcessgroupNamingConditionsConditionSimpleHostTechComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionSimpleHostTechComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionSimpleHostTechComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionSimpleHostTechComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionSimpleTechComparisonValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#verbatim_type ProcessgroupNaming#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function processgroupNamingConditionsConditionSimpleTechComparisonValueToTerraform(struct?: ProcessgroupNamingConditionsConditionSimpleTechComparisonValueOutputReference | ProcessgroupNamingConditionsConditionSimpleTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function processgroupNamingConditionsConditionSimpleTechComparisonValueToHclTerraform(struct?: ProcessgroupNamingConditionsConditionSimpleTechComparisonValueOutputReference | ProcessgroupNamingConditionsConditionSimpleTechComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionSimpleTechComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessgroupNamingConditionsConditionSimpleTechComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionSimpleTechComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface ProcessgroupNamingConditionsConditionSimpleTechComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SIMPLE_TECH
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: ProcessgroupNamingConditionsConditionSimpleTechComparisonValue;
}

export function processgroupNamingConditionsConditionSimpleTechComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionSimpleTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: processgroupNamingConditionsConditionSimpleTechComparisonValueToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionSimpleTechComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionSimpleTechComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: processgroupNamingConditionsConditionSimpleTechComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionSimpleTechComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionSimpleTechComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionSimpleTechComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionSimpleTechComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ProcessgroupNamingConditionsConditionSimpleTechComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ProcessgroupNamingConditionsConditionSimpleTechComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ProcessgroupNamingConditionsConditionSimpleTechComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionSimpleTechComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionSimpleTechComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionSimpleTechComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionString {
  /**
  * The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#case_sensitive ProcessgroupNaming#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionStringToTerraform(struct?: ProcessgroupNamingConditionsConditionString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionStringToHclTerraform(struct?: ProcessgroupNamingConditionsConditionString | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionStringOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionString | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionString | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionStringList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionString[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionStringOutputReference {
    return new ProcessgroupNamingConditionsConditionStringOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionStringComparison {
  /**
  * The comparison is case-sensitive (`true`) or insensitive (`false`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#case_sensitive ProcessgroupNaming#case_sensitive}
  */
  readonly caseSensitive?: boolean | cdktf.IResolvable;
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are BEGINS_WITH, CONTAINS, ENDS_WITH, EQUALS, EXISTS and REGEX_MATCHES. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be STRING
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionStringComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    case_sensitive: cdktf.booleanToTerraform(struct!.caseSensitive),
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionStringComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionStringComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    case_sensitive: {
      value: cdktf.booleanToHclTerraform(struct!.caseSensitive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionStringComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionStringComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caseSensitive !== undefined) {
      hasAnyValues = true;
      internalValueResult.caseSensitive = this._caseSensitive;
    }
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionStringComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caseSensitive = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caseSensitive = value.caseSensitive;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // case_sensitive - computed: false, optional: true, required: false
  private _caseSensitive?: boolean | cdktf.IResolvable; 
  public get caseSensitive() {
    return this.getBooleanAttribute('case_sensitive');
  }
  public set caseSensitive(value: boolean | cdktf.IResolvable) {
    this._caseSensitive = value;
  }
  public resetCaseSensitive() {
    this._caseSensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caseSensitiveInput() {
    return this._caseSensitive;
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionStringComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionStringComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionStringComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionStringComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionStringConditionKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#attribute ProcessgroupNaming#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are
  *    - `AMAZON_ECR_IMAGE_ACCOUNT_ID`
  *    - `AMAZON_ECR_IMAGE_REGION`
  *    - `AMAZON_LAMBDA_FUNCTION_NAME`
  *    - `AMAZON_REGION`
  *    - `APACHE_CONFIG_PATH`
  *    - `APACHE_SPARK_MASTER_IP_ADDRESS`
  *    - `ASP_DOT_NET_CORE_APPLICATION_PATH`
  *    - `AWS_ECS_CLUSTER`
  *    - `AWS_ECS_CONTAINERNAME`
  *    - `AWS_ECS_FAMILY`
  *    - `AWS_ECS_REVISION`
  *    - `CASSANDRA_CLUSTER_NAME`
  *    - `CATALINA_BASE`
  *    - `CATALINA_HOME`
  *    - `CLOUD_FOUNDRY_APP_ID`
  *    - `CLOUD_FOUNDRY_APP_NAME`
  *    - `CLOUD_FOUNDRY_INSTANCE_INDEX`
  *    - `CLOUD_FOUNDRY_SPACE_ID`
  *    - `CLOUD_FOUNDRY_SPACE_NAME`
  *    - `COLDFUSION_JVM_CONFIG_FILE`
  *    - `COLDFUSION_SERVICE_NAME`
  *    - `COMMAND_LINE_ARGS`
  *    - `DOTNET_COMMAND`
  *    - `DOTNET_COMMAND_PATH`
  *    - `DYNATRACE_CLUSTER_ID`
  *    - `DYNATRACE_NODE_ID`
  *    - `ELASTICSEARCH_CLUSTER_NAME`
  *    - `ELASTICSEARCH_NODE_NAME`
  *    - `EQUINOX_CONFIG_PATH`
  *    - `EXE_NAME`
  *    - `EXE_PATH`
  *    - `GLASS_FISH_DOMAIN_NAME`
  *    - `GLASS_FISH_INSTANCE_NAME`
  *    - `GOOGLE_APP_ENGINE_INSTANCE`
  *    - `GOOGLE_APP_ENGINE_SERVICE`
  *    - `GOOGLE_CLOUD_PROJECT`
  *    - `HYBRIS_BIN_DIRECTORY`
  *    - `HYBRIS_CONFIG_DIRECTORY`
  *    - `HYBRIS_DATA_DIRECTORY`
  *    - `IBM_CICS_REGION`
  *    - `IBM_CTG_NAME`
  *    - `IBM_IMS_CONNECT_REGION`
  *    - `IBM_IMS_CONTROL_REGION`
  *    - `IBM_IMS_MESSAGE_PROCESSING_REGION`
  *    - `IBM_IMS_SOAP_GW_NAME`
  *    - `IBM_INTEGRATION_NODE_NAME`
  *    - `IBM_INTEGRATION_SERVER_NAME`
  *    - `IIS_APP_POOL`
  *    - `IIS_ROLE_NAME`
  *    - `JAVA_JAR_FILE`
  *    - `JAVA_JAR_PATH`
  *    - `JAVA_MAIN_CLASS`
  *    - `JAVA_MAIN_MODULE`
  *    - `JBOSS_HOME`
  *    - `JBOSS_MODE`
  *    - `JBOSS_SERVER_NAME`
  *    - `KUBERNETES_BASE_POD_NAME`
  *    - `KUBERNETES_CONTAINER_NAME`
  *    - `KUBERNETES_FULL_POD_NAME`
  *    - `KUBERNETES_NAMESPACE`
  *    - `KUBERNETES_POD_UID`
  *    - `MSSQL_INSTANCE_NAME`
  *    - `NODE_JS_APP_BASE_DIRECTORY`
  *    - `NODE_JS_APP_NAME`
  *    - `NODE_JS_SCRIPT_NAME`
  *    - `ORACLE_SID`
  *    - `PG_ID_CALC_INPUT_KEY_LINKAGE`
  *    - `PHP_SCRIPT_PATH`
  *    - `PHP_WORKING_DIRECTORY`
  *    - `RUBY_APP_ROOT_PATH`
  *    - `RUBY_SCRIPT_PATH`
  *    - `RULE_RESULT`
  *    - `SOFTWAREAG_INSTALL_ROOT`
  *    - `SOFTWAREAG_PRODUCTPROPNAME`
  *    - `SPRINGBOOT_APP_NAME`
  *    - `SPRINGBOOT_PROFILE_NAME`
  *    - `SPRINGBOOT_STARTUP_CLASS`
  *    - `TIBCO_BUSINESSWORKS_CE_APP_NAME`
  *    - `TIBCO_BUSINESSWORKS_CE_VERSION`
  *    - `TIBCO_BUSINESS_WORKS_APP_NODE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_APP_SPACE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_DOMAIN_NAME`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH`
  *    - `TIBCO_BUSINESS_WORKS_HOME`
  *    - `VARNISH_INSTANCE_NAME`
  *    - `WEB_LOGIC_CLUSTER_NAME`
  *    - `WEB_LOGIC_DOMAIN_NAME`
  *    - `WEB_LOGIC_HOME`
  *    - `WEB_LOGIC_NAME`
  *    - `WEB_SPHERE_CELL_NAME`
  *    - `WEB_SPHERE_CLUSTER_NAME`
  *    - `WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#dynamic_key ProcessgroupNaming#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * if specified, needs to be `STRING`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function processgroupNamingConditionsConditionStringConditionKeyToTerraform(struct?: ProcessgroupNamingConditionsConditionStringConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function processgroupNamingConditionsConditionStringConditionKeyToHclTerraform(struct?: ProcessgroupNamingConditionsConditionStringConditionKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionStringConditionKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionStringConditionKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionStringConditionKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._type = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._type = value.type;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ProcessgroupNamingConditionsConditionStringConditionKeyList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionStringConditionKey[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionStringConditionKeyOutputReference {
    return new ProcessgroupNamingConditionsConditionStringConditionKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionStringKey {
  /**
  * The attribute to be used for comparision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#attribute ProcessgroupNaming#attribute}
  */
  readonly attribute: string;
  /**
  * The key of the attribute, which need dynamic keys. Not applicable otherwise, as the attibute itself acts as a key. Possible values are
  *    - `AMAZON_ECR_IMAGE_ACCOUNT_ID`
  *    - `AMAZON_ECR_IMAGE_REGION`
  *    - `AMAZON_LAMBDA_FUNCTION_NAME`
  *    - `AMAZON_REGION`
  *    - `APACHE_CONFIG_PATH`
  *    - `APACHE_SPARK_MASTER_IP_ADDRESS`
  *    - `ASP_DOT_NET_CORE_APPLICATION_PATH`
  *    - `AWS_ECS_CLUSTER`
  *    - `AWS_ECS_CONTAINERNAME`
  *    - `AWS_ECS_FAMILY`
  *    - `AWS_ECS_REVISION`
  *    - `CASSANDRA_CLUSTER_NAME`
  *    - `CATALINA_BASE`
  *    - `CATALINA_HOME`
  *    - `CLOUD_FOUNDRY_APP_ID`
  *    - `CLOUD_FOUNDRY_APP_NAME`
  *    - `CLOUD_FOUNDRY_INSTANCE_INDEX`
  *    - `CLOUD_FOUNDRY_SPACE_ID`
  *    - `CLOUD_FOUNDRY_SPACE_NAME`
  *    - `COLDFUSION_JVM_CONFIG_FILE`
  *    - `COLDFUSION_SERVICE_NAME`
  *    - `COMMAND_LINE_ARGS`
  *    - `DOTNET_COMMAND`
  *    - `DOTNET_COMMAND_PATH`
  *    - `DYNATRACE_CLUSTER_ID`
  *    - `DYNATRACE_NODE_ID`
  *    - `ELASTICSEARCH_CLUSTER_NAME`
  *    - `ELASTICSEARCH_NODE_NAME`
  *    - `EQUINOX_CONFIG_PATH`
  *    - `EXE_NAME`
  *    - `EXE_PATH`
  *    - `GLASS_FISH_DOMAIN_NAME`
  *    - `GLASS_FISH_INSTANCE_NAME`
  *    - `GOOGLE_APP_ENGINE_INSTANCE`
  *    - `GOOGLE_APP_ENGINE_SERVICE`
  *    - `GOOGLE_CLOUD_PROJECT`
  *    - `HYBRIS_BIN_DIRECTORY`
  *    - `HYBRIS_CONFIG_DIRECTORY`
  *    - `HYBRIS_DATA_DIRECTORY`
  *    - `IBM_CICS_REGION`
  *    - `IBM_CTG_NAME`
  *    - `IBM_IMS_CONNECT_REGION`
  *    - `IBM_IMS_CONTROL_REGION`
  *    - `IBM_IMS_MESSAGE_PROCESSING_REGION`
  *    - `IBM_IMS_SOAP_GW_NAME`
  *    - `IBM_INTEGRATION_NODE_NAME`
  *    - `IBM_INTEGRATION_SERVER_NAME`
  *    - `IIS_APP_POOL`
  *    - `IIS_ROLE_NAME`
  *    - `JAVA_JAR_FILE`
  *    - `JAVA_JAR_PATH`
  *    - `JAVA_MAIN_CLASS`
  *    - `JAVA_MAIN_MODULE`
  *    - `JBOSS_HOME`
  *    - `JBOSS_MODE`
  *    - `JBOSS_SERVER_NAME`
  *    - `KUBERNETES_BASE_POD_NAME`
  *    - `KUBERNETES_CONTAINER_NAME`
  *    - `KUBERNETES_FULL_POD_NAME`
  *    - `KUBERNETES_NAMESPACE`
  *    - `KUBERNETES_POD_UID`
  *    - `MSSQL_INSTANCE_NAME`
  *    - `NODE_JS_APP_BASE_DIRECTORY`
  *    - `NODE_JS_APP_NAME`
  *    - `NODE_JS_SCRIPT_NAME`
  *    - `ORACLE_SID`
  *    - `PG_ID_CALC_INPUT_KEY_LINKAGE`
  *    - `PHP_SCRIPT_PATH`
  *    - `PHP_WORKING_DIRECTORY`
  *    - `RUBY_APP_ROOT_PATH`
  *    - `RUBY_SCRIPT_PATH`
  *    - `RULE_RESULT`
  *    - `SOFTWAREAG_INSTALL_ROOT`
  *    - `SOFTWAREAG_PRODUCTPROPNAME`
  *    - `SPRINGBOOT_APP_NAME`
  *    - `SPRINGBOOT_PROFILE_NAME`
  *    - `SPRINGBOOT_STARTUP_CLASS`
  *    - `TIBCO_BUSINESSWORKS_CE_APP_NAME`
  *    - `TIBCO_BUSINESSWORKS_CE_VERSION`
  *    - `TIBCO_BUSINESS_WORKS_APP_NODE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_APP_SPACE_NAME`
  *    - `TIBCO_BUSINESS_WORKS_DOMAIN_NAME`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE`
  *    - `TIBCO_BUSINESS_WORKS_ENGINE_PROPERTY_FILE_PATH`
  *    - `TIBCO_BUSINESS_WORKS_HOME`
  *    - `VARNISH_INSTANCE_NAME`
  *    - `WEB_LOGIC_CLUSTER_NAME`
  *    - `WEB_LOGIC_DOMAIN_NAME`
  *    - `WEB_LOGIC_HOME`
  *    - `WEB_LOGIC_NAME`
  *    - `WEB_SPHERE_CELL_NAME`
  *    - `WEB_SPHERE_CLUSTER_NAME`
  *    - `WEB_SPHERE_NODE_NAME and WEB_SPHERE_SERVER_NAME`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#dynamic_key ProcessgroupNaming#dynamic_key}
  */
  readonly dynamicKey: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
}

export function processgroupNamingConditionsConditionStringKeyToTerraform(struct?: ProcessgroupNamingConditionsConditionStringKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    dynamic_key: cdktf.stringToTerraform(struct!.dynamicKey),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
  }
}


export function processgroupNamingConditionsConditionStringKeyToHclTerraform(struct?: ProcessgroupNamingConditionsConditionStringKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dynamic_key: {
      value: cdktf.stringToHclTerraform(struct!.dynamicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionStringKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionStringKey | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._dynamicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicKey = this._dynamicKey;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionStringKey | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._dynamicKey = undefined;
      this._unknowns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._dynamicKey = value.dynamicKey;
      this._unknowns = value.unknowns;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // dynamic_key - computed: false, optional: false, required: true
  private _dynamicKey?: string; 
  public get dynamicKey() {
    return this.getStringAttribute('dynamic_key');
  }
  public set dynamicKey(value: string) {
    this._dynamicKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicKeyInput() {
    return this._dynamicKey;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }
}

export class ProcessgroupNamingConditionsConditionStringKeyList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionStringKey[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionStringKeyOutputReference {
    return new ProcessgroupNamingConditionsConditionStringKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionSyntheticEngine {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are  EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLASSIC and CUSTOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionSyntheticEngineToTerraform(struct?: ProcessgroupNamingConditionsConditionSyntheticEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionSyntheticEngineToHclTerraform(struct?: ProcessgroupNamingConditionsConditionSyntheticEngine | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionSyntheticEngineOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionSyntheticEngine | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionSyntheticEngine | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionSyntheticEngineList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionSyntheticEngine[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionSyntheticEngineOutputReference {
    return new ProcessgroupNamingConditionsConditionSyntheticEngineOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionSyntheticEngineTypeComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are  EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be SYNTHETIC_ENGINE_TYPE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value to compare to. Possible values are CLASSIC and CUSTOM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionSyntheticEngineTypeComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionSyntheticEngineTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionSyntheticEngineTypeComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionSyntheticEngineTypeComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionSyntheticEngineTypeComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionSyntheticEngineTypeComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionSyntheticEngineTypeComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class ProcessgroupNamingConditionsConditionSyntheticEngineTypeComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionSyntheticEngineTypeComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionSyntheticEngineTypeComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionSyntheticEngineTypeComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionTagValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#context ProcessgroupNaming#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#key ProcessgroupNaming#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionTagValueToTerraform(struct?: ProcessgroupNamingConditionsConditionTagValueOutputReference | ProcessgroupNamingConditionsConditionTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionTagValueToHclTerraform(struct?: ProcessgroupNamingConditionsConditionTagValueOutputReference | ProcessgroupNamingConditionsConditionTagValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionTagValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessgroupNamingConditionsConditionTagValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionTagValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ProcessgroupNamingConditionsConditionTag {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and TAG_KEY_EQUALS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: ProcessgroupNamingConditionsConditionTagValue;
}

export function processgroupNamingConditionsConditionTagToTerraform(struct?: ProcessgroupNamingConditionsConditionTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: processgroupNamingConditionsConditionTagValueToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionTagToHclTerraform(struct?: ProcessgroupNamingConditionsConditionTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: processgroupNamingConditionsConditionTagValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionTagValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ProcessgroupNamingConditionsConditionTagValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ProcessgroupNamingConditionsConditionTagValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ProcessgroupNamingConditionsConditionTagList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionTag[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionTagOutputReference {
    return new ProcessgroupNamingConditionsConditionTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionTagComparisonValue {
  /**
  * The origin of the tag, such as AWS or Cloud Foundry. Possible values are AWS, AWS_GENERIC, AZURE, CLOUD_FOUNDRY, CONTEXTLESS, ENVIRONMENT, GOOGLE_CLOUD and KUBERNETES. Custom tags use the `CONTEXTLESS` value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#context ProcessgroupNaming#context}
  */
  readonly context: string;
  /**
  * The key of the tag. Custom tags have the tag value here
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#key ProcessgroupNaming#key}
  */
  readonly key: string;
  /**
  * Any attributes that aren't yet supported by this provider but have meanwhile gotten introduced by a newer version of the Dynatrace REST API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * The value of the tag. Not applicable to custom tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: string;
}

export function processgroupNamingConditionsConditionTagComparisonValueToTerraform(struct?: ProcessgroupNamingConditionsConditionTagComparisonValueOutputReference | ProcessgroupNamingConditionsConditionTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: cdktf.stringToTerraform(struct!.context),
    key: cdktf.stringToTerraform(struct!.key),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionTagComparisonValueToHclTerraform(struct?: ProcessgroupNamingConditionsConditionTagComparisonValueOutputReference | ProcessgroupNamingConditionsConditionTagComparisonValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: cdktf.stringToHclTerraform(struct!.context),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionTagComparisonValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessgroupNamingConditionsConditionTagComparisonValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionTagComparisonValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._context = undefined;
      this._key = undefined;
      this._unknowns = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._context = value.context;
      this._key = value.key;
      this._unknowns = value.unknowns;
      this._value = value.value;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context?: string; 
  public get context() {
    return this.getStringAttribute('context');
  }
  public set context(value: string) {
    this._context = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface ProcessgroupNamingConditionsConditionTagComparison {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and TAG_KEY_EQUALS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * if specified, needs to be TAG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: ProcessgroupNamingConditionsConditionTagComparisonValue;
}

export function processgroupNamingConditionsConditionTagComparisonToTerraform(struct?: ProcessgroupNamingConditionsConditionTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: processgroupNamingConditionsConditionTagComparisonValueToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionTagComparisonToHclTerraform(struct?: ProcessgroupNamingConditionsConditionTagComparison | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: processgroupNamingConditionsConditionTagComparisonValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionTagComparisonValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionTagComparisonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionTagComparison | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionTagComparison | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._type = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ProcessgroupNamingConditionsConditionTagComparisonValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ProcessgroupNamingConditionsConditionTagComparisonValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ProcessgroupNamingConditionsConditionTagComparisonList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionTagComparison[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionTagComparisonOutputReference {
    return new ProcessgroupNamingConditionsConditionTagComparisonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsConditionTechValue {
  /**
  * Predefined technology, if technology is not predefined, then the verbatim type must be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#type ProcessgroupNaming#type}
  */
  readonly type?: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * Non-predefined technology, use for custom technologies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#verbatim_type ProcessgroupNaming#verbatim_type}
  */
  readonly verbatimType?: string;
}

export function processgroupNamingConditionsConditionTechValueToTerraform(struct?: ProcessgroupNamingConditionsConditionTechValueOutputReference | ProcessgroupNamingConditionsConditionTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    verbatim_type: cdktf.stringToTerraform(struct!.verbatimType),
  }
}


export function processgroupNamingConditionsConditionTechValueToHclTerraform(struct?: ProcessgroupNamingConditionsConditionTechValueOutputReference | ProcessgroupNamingConditionsConditionTechValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verbatim_type: {
      value: cdktf.stringToHclTerraform(struct!.verbatimType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionTechValueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProcessgroupNamingConditionsConditionTechValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._verbatimType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verbatimType = this._verbatimType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionTechValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._type = undefined;
      this._unknowns = undefined;
      this._verbatimType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._type = value.type;
      this._unknowns = value.unknowns;
      this._verbatimType = value.verbatimType;
    }
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // verbatim_type - computed: false, optional: true, required: false
  private _verbatimType?: string; 
  public get verbatimType() {
    return this.getStringAttribute('verbatim_type');
  }
  public set verbatimType(value: string) {
    this._verbatimType = value;
  }
  public resetVerbatimType() {
    this._verbatimType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verbatimTypeInput() {
    return this._verbatimType;
  }
}
export interface ProcessgroupNamingConditionsConditionTech {
  /**
  * Reverses the operator. For example it turns the **begins with** into **does not begin with**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#negate ProcessgroupNaming#negate}
  */
  readonly negate?: boolean | cdktf.IResolvable;
  /**
  * Operator of the comparison. Possible values are EQUALS and EXISTS. You can reverse it by setting **negate** to `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#operator ProcessgroupNaming#operator}
  */
  readonly operator: string;
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#value ProcessgroupNaming#value}
  */
  readonly value?: ProcessgroupNamingConditionsConditionTechValue;
}

export function processgroupNamingConditionsConditionTechToTerraform(struct?: ProcessgroupNamingConditionsConditionTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negate: cdktf.booleanToTerraform(struct!.negate),
    operator: cdktf.stringToTerraform(struct!.operator),
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    value: processgroupNamingConditionsConditionTechValueToTerraform(struct!.value),
  }
}


export function processgroupNamingConditionsConditionTechToHclTerraform(struct?: ProcessgroupNamingConditionsConditionTech | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negate: {
      value: cdktf.booleanToHclTerraform(struct!.negate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: processgroupNamingConditionsConditionTechValueToHclTerraform(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionTechValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionTechOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsConditionTech | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negate !== undefined) {
      hasAnyValues = true;
      internalValueResult.negate = this._negate;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsConditionTech | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._negate = undefined;
      this._operator = undefined;
      this._unknowns = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._negate = value.negate;
      this._operator = value.operator;
      this._unknowns = value.unknowns;
      this._value.internalValue = value.value;
    }
  }

  // negate - computed: false, optional: true, required: false
  private _negate?: boolean | cdktf.IResolvable; 
  public get negate() {
    return this.getBooleanAttribute('negate');
  }
  public set negate(value: boolean | cdktf.IResolvable) {
    this._negate = value;
  }
  public resetNegate() {
    this._negate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateInput() {
    return this._negate;
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ProcessgroupNamingConditionsConditionTechValueOutputReference(this, "value");
  public get value() {
    return this._value;
  }
  public putValue(value: ProcessgroupNamingConditionsConditionTechValue) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ProcessgroupNamingConditionsConditionTechList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsConditionTech[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionTechOutputReference {
    return new ProcessgroupNamingConditionsConditionTechOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditionsCondition {
  /**
  * Any attributes that aren't yet supported by this provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#unknowns ProcessgroupNaming#unknowns}
  */
  readonly unknowns?: string;
  /**
  * application_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#application_type ProcessgroupNaming#application_type}
  */
  readonly applicationType?: ProcessgroupNamingConditionsConditionApplicationType[] | cdktf.IResolvable;
  /**
  * application_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#application_type_comparison ProcessgroupNaming#application_type_comparison}
  */
  readonly applicationTypeComparison?: ProcessgroupNamingConditionsConditionApplicationTypeComparison[] | cdktf.IResolvable;
  /**
  * azure_compute_mode block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#azure_compute_mode ProcessgroupNaming#azure_compute_mode}
  */
  readonly azureComputeMode?: ProcessgroupNamingConditionsConditionAzureComputeMode[] | cdktf.IResolvable;
  /**
  * azure_compute_mode_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#azure_compute_mode_comparison ProcessgroupNaming#azure_compute_mode_comparison}
  */
  readonly azureComputeModeComparison?: ProcessgroupNamingConditionsConditionAzureComputeModeComparison[] | cdktf.IResolvable;
  /**
  * azure_sku block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#azure_sku ProcessgroupNaming#azure_sku}
  */
  readonly azureSku?: ProcessgroupNamingConditionsConditionAzureSku[] | cdktf.IResolvable;
  /**
  * azure_sku_comparision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#azure_sku_comparision ProcessgroupNaming#azure_sku_comparision}
  */
  readonly azureSkuComparision?: ProcessgroupNamingConditionsConditionAzureSkuComparision[] | cdktf.IResolvable;
  /**
  * base_comparison_basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#base_comparison_basic ProcessgroupNaming#base_comparison_basic}
  */
  readonly baseComparisonBasic?: ProcessgroupNamingConditionsConditionBaseComparisonBasic[] | cdktf.IResolvable;
  /**
  * base_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#base_condition_key ProcessgroupNaming#base_condition_key}
  */
  readonly baseConditionKey?: ProcessgroupNamingConditionsConditionBaseConditionKey[] | cdktf.IResolvable;
  /**
  * bitness block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#bitness ProcessgroupNaming#bitness}
  */
  readonly bitness?: ProcessgroupNamingConditionsConditionBitness[] | cdktf.IResolvable;
  /**
  * bitness_comparision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#bitness_comparision ProcessgroupNaming#bitness_comparision}
  */
  readonly bitnessComparision?: ProcessgroupNamingConditionsConditionBitnessComparision[] | cdktf.IResolvable;
  /**
  * cloud_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#cloud_type ProcessgroupNaming#cloud_type}
  */
  readonly cloudType?: ProcessgroupNamingConditionsConditionCloudType[] | cdktf.IResolvable;
  /**
  * cloud_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#cloud_type_comparison ProcessgroupNaming#cloud_type_comparison}
  */
  readonly cloudTypeComparison?: ProcessgroupNamingConditionsConditionCloudTypeComparison[] | cdktf.IResolvable;
  /**
  * comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#comparison ProcessgroupNaming#comparison}
  */
  readonly comparison?: ProcessgroupNamingConditionsConditionComparison[] | cdktf.IResolvable;
  /**
  * custom_application_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#custom_application_type ProcessgroupNaming#custom_application_type}
  */
  readonly customApplicationType?: ProcessgroupNamingConditionsConditionCustomApplicationType[] | cdktf.IResolvable;
  /**
  * custom_application_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#custom_application_type_comparison ProcessgroupNaming#custom_application_type_comparison}
  */
  readonly customApplicationTypeComparison?: ProcessgroupNamingConditionsConditionCustomApplicationTypeComparison[] | cdktf.IResolvable;
  /**
  * custom_host_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#custom_host_metadata ProcessgroupNaming#custom_host_metadata}
  */
  readonly customHostMetadata?: ProcessgroupNamingConditionsConditionCustomHostMetadata[] | cdktf.IResolvable;
  /**
  * custom_host_metadata_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#custom_host_metadata_condition_key ProcessgroupNaming#custom_host_metadata_condition_key}
  */
  readonly customHostMetadataConditionKey?: ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKey[] | cdktf.IResolvable;
  /**
  * custom_process_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#custom_process_metadata ProcessgroupNaming#custom_process_metadata}
  */
  readonly customProcessMetadata?: ProcessgroupNamingConditionsConditionCustomProcessMetadata[] | cdktf.IResolvable;
  /**
  * custom_process_metadata_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#custom_process_metadata_condition_key ProcessgroupNaming#custom_process_metadata_condition_key}
  */
  readonly customProcessMetadataConditionKey?: ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKey[] | cdktf.IResolvable;
  /**
  * database_topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#database_topology ProcessgroupNaming#database_topology}
  */
  readonly databaseTopology?: ProcessgroupNamingConditionsConditionDatabaseTopology[] | cdktf.IResolvable;
  /**
  * database_topology_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#database_topology_comparison ProcessgroupNaming#database_topology_comparison}
  */
  readonly databaseTopologyComparison?: ProcessgroupNamingConditionsConditionDatabaseTopologyComparison[] | cdktf.IResolvable;
  /**
  * dcrum_decoder block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#dcrum_decoder ProcessgroupNaming#dcrum_decoder}
  */
  readonly dcrumDecoder?: ProcessgroupNamingConditionsConditionDcrumDecoder[] | cdktf.IResolvable;
  /**
  * dcrum_decoder_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#dcrum_decoder_comparison ProcessgroupNaming#dcrum_decoder_comparison}
  */
  readonly dcrumDecoderComparison?: ProcessgroupNamingConditionsConditionDcrumDecoderComparison[] | cdktf.IResolvable;
  /**
  * entity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#entity ProcessgroupNaming#entity}
  */
  readonly entity?: ProcessgroupNamingConditionsConditionEntity[] | cdktf.IResolvable;
  /**
  * entity_id_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#entity_id_comparison ProcessgroupNaming#entity_id_comparison}
  */
  readonly entityIdComparison?: ProcessgroupNamingConditionsConditionEntityIdComparison[] | cdktf.IResolvable;
  /**
  * host_tech block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#host_tech ProcessgroupNaming#host_tech}
  */
  readonly hostTech?: ProcessgroupNamingConditionsConditionHostTech[] | cdktf.IResolvable;
  /**
  * hypervisor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#hypervisor ProcessgroupNaming#hypervisor}
  */
  readonly hypervisor?: ProcessgroupNamingConditionsConditionHypervisor[] | cdktf.IResolvable;
  /**
  * hypervisor_type_comparision block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#hypervisor_type_comparision ProcessgroupNaming#hypervisor_type_comparision}
  */
  readonly hypervisorTypeComparision?: ProcessgroupNamingConditionsConditionHypervisorTypeComparision[] | cdktf.IResolvable;
  /**
  * indexed_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#indexed_name ProcessgroupNaming#indexed_name}
  */
  readonly indexedName?: ProcessgroupNamingConditionsConditionIndexedName[] | cdktf.IResolvable;
  /**
  * indexed_name_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#indexed_name_comparison ProcessgroupNaming#indexed_name_comparison}
  */
  readonly indexedNameComparison?: ProcessgroupNamingConditionsConditionIndexedNameComparison[] | cdktf.IResolvable;
  /**
  * indexed_string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#indexed_string ProcessgroupNaming#indexed_string}
  */
  readonly indexedString?: ProcessgroupNamingConditionsConditionIndexedString[] | cdktf.IResolvable;
  /**
  * indexed_string_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#indexed_string_comparison ProcessgroupNaming#indexed_string_comparison}
  */
  readonly indexedStringComparison?: ProcessgroupNamingConditionsConditionIndexedStringComparison[] | cdktf.IResolvable;
  /**
  * indexed_tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#indexed_tag ProcessgroupNaming#indexed_tag}
  */
  readonly indexedTag?: ProcessgroupNamingConditionsConditionIndexedTag[] | cdktf.IResolvable;
  /**
  * indexed_tag_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#indexed_tag_comparison ProcessgroupNaming#indexed_tag_comparison}
  */
  readonly indexedTagComparison?: ProcessgroupNamingConditionsConditionIndexedTagComparison[] | cdktf.IResolvable;
  /**
  * integer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#integer ProcessgroupNaming#integer}
  */
  readonly integer?: ProcessgroupNamingConditionsConditionInteger[] | cdktf.IResolvable;
  /**
  * integer_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#integer_comparison ProcessgroupNaming#integer_comparison}
  */
  readonly integerComparison?: ProcessgroupNamingConditionsConditionIntegerComparison[] | cdktf.IResolvable;
  /**
  * ipaddress block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#ipaddress ProcessgroupNaming#ipaddress}
  */
  readonly ipaddress?: ProcessgroupNamingConditionsConditionIpaddress[] | cdktf.IResolvable;
  /**
  * ipaddress_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#ipaddress_comparison ProcessgroupNaming#ipaddress_comparison}
  */
  readonly ipaddressComparison?: ProcessgroupNamingConditionsConditionIpaddressComparison[] | cdktf.IResolvable;
  /**
  * key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#key ProcessgroupNaming#key}
  */
  readonly key?: ProcessgroupNamingConditionsConditionKey[] | cdktf.IResolvable;
  /**
  * mobile_platform block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#mobile_platform ProcessgroupNaming#mobile_platform}
  */
  readonly mobilePlatform?: ProcessgroupNamingConditionsConditionMobilePlatform[] | cdktf.IResolvable;
  /**
  * mobile_platform_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#mobile_platform_comparison ProcessgroupNaming#mobile_platform_comparison}
  */
  readonly mobilePlatformComparison?: ProcessgroupNamingConditionsConditionMobilePlatformComparison[] | cdktf.IResolvable;
  /**
  * os_arch block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#os_arch ProcessgroupNaming#os_arch}
  */
  readonly osArch?: ProcessgroupNamingConditionsConditionOsArch[] | cdktf.IResolvable;
  /**
  * os_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#os_type ProcessgroupNaming#os_type}
  */
  readonly osType?: ProcessgroupNamingConditionsConditionOsType[] | cdktf.IResolvable;
  /**
  * osarchitecture_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#osarchitecture_comparison ProcessgroupNaming#osarchitecture_comparison}
  */
  readonly osarchitectureComparison?: ProcessgroupNamingConditionsConditionOsarchitectureComparison[] | cdktf.IResolvable;
  /**
  * ostype_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#ostype_comparison ProcessgroupNaming#ostype_comparison}
  */
  readonly ostypeComparison?: ProcessgroupNamingConditionsConditionOstypeComparison[] | cdktf.IResolvable;
  /**
  * paas_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#paas_type ProcessgroupNaming#paas_type}
  */
  readonly paasType?: ProcessgroupNamingConditionsConditionPaasType[] | cdktf.IResolvable;
  /**
  * paas_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#paas_type_comparison ProcessgroupNaming#paas_type_comparison}
  */
  readonly paasTypeComparison?: ProcessgroupNamingConditionsConditionPaasTypeComparison[] | cdktf.IResolvable;
  /**
  * process_metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#process_metadata ProcessgroupNaming#process_metadata}
  */
  readonly processMetadata?: ProcessgroupNamingConditionsConditionProcessMetadata[] | cdktf.IResolvable;
  /**
  * process_metadata_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#process_metadata_condition_key ProcessgroupNaming#process_metadata_condition_key}
  */
  readonly processMetadataConditionKey?: ProcessgroupNamingConditionsConditionProcessMetadataConditionKey[] | cdktf.IResolvable;
  /**
  * service_topology block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#service_topology ProcessgroupNaming#service_topology}
  */
  readonly serviceTopology?: ProcessgroupNamingConditionsConditionServiceTopology[] | cdktf.IResolvable;
  /**
  * service_topology_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#service_topology_comparison ProcessgroupNaming#service_topology_comparison}
  */
  readonly serviceTopologyComparison?: ProcessgroupNamingConditionsConditionServiceTopologyComparison[] | cdktf.IResolvable;
  /**
  * service_type block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#service_type ProcessgroupNaming#service_type}
  */
  readonly serviceType?: ProcessgroupNamingConditionsConditionServiceType[] | cdktf.IResolvable;
  /**
  * service_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#service_type_comparison ProcessgroupNaming#service_type_comparison}
  */
  readonly serviceTypeComparison?: ProcessgroupNamingConditionsConditionServiceTypeComparison[] | cdktf.IResolvable;
  /**
  * simple_host_tech_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#simple_host_tech_comparison ProcessgroupNaming#simple_host_tech_comparison}
  */
  readonly simpleHostTechComparison?: ProcessgroupNamingConditionsConditionSimpleHostTechComparison[] | cdktf.IResolvable;
  /**
  * simple_tech_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#simple_tech_comparison ProcessgroupNaming#simple_tech_comparison}
  */
  readonly simpleTechComparison?: ProcessgroupNamingConditionsConditionSimpleTechComparison[] | cdktf.IResolvable;
  /**
  * string block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#string ProcessgroupNaming#string}
  */
  readonly string?: ProcessgroupNamingConditionsConditionString[] | cdktf.IResolvable;
  /**
  * string_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#string_comparison ProcessgroupNaming#string_comparison}
  */
  readonly stringComparison?: ProcessgroupNamingConditionsConditionStringComparison[] | cdktf.IResolvable;
  /**
  * string_condition_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#string_condition_key ProcessgroupNaming#string_condition_key}
  */
  readonly stringConditionKey?: ProcessgroupNamingConditionsConditionStringConditionKey[] | cdktf.IResolvable;
  /**
  * string_key block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#string_key ProcessgroupNaming#string_key}
  */
  readonly stringKey?: ProcessgroupNamingConditionsConditionStringKey[] | cdktf.IResolvable;
  /**
  * synthetic_engine block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#synthetic_engine ProcessgroupNaming#synthetic_engine}
  */
  readonly syntheticEngine?: ProcessgroupNamingConditionsConditionSyntheticEngine[] | cdktf.IResolvable;
  /**
  * synthetic_engine_type_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#synthetic_engine_type_comparison ProcessgroupNaming#synthetic_engine_type_comparison}
  */
  readonly syntheticEngineTypeComparison?: ProcessgroupNamingConditionsConditionSyntheticEngineTypeComparison[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#tag ProcessgroupNaming#tag}
  */
  readonly tag?: ProcessgroupNamingConditionsConditionTag[] | cdktf.IResolvable;
  /**
  * tag_comparison block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#tag_comparison ProcessgroupNaming#tag_comparison}
  */
  readonly tagComparison?: ProcessgroupNamingConditionsConditionTagComparison[] | cdktf.IResolvable;
  /**
  * tech block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#tech ProcessgroupNaming#tech}
  */
  readonly tech?: ProcessgroupNamingConditionsConditionTech[] | cdktf.IResolvable;
}

export function processgroupNamingConditionsConditionToTerraform(struct?: ProcessgroupNamingConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unknowns: cdktf.stringToTerraform(struct!.unknowns),
    application_type: cdktf.listMapper(processgroupNamingConditionsConditionApplicationTypeToTerraform, true)(struct!.applicationType),
    application_type_comparison: cdktf.listMapper(processgroupNamingConditionsConditionApplicationTypeComparisonToTerraform, true)(struct!.applicationTypeComparison),
    azure_compute_mode: cdktf.listMapper(processgroupNamingConditionsConditionAzureComputeModeToTerraform, true)(struct!.azureComputeMode),
    azure_compute_mode_comparison: cdktf.listMapper(processgroupNamingConditionsConditionAzureComputeModeComparisonToTerraform, true)(struct!.azureComputeModeComparison),
    azure_sku: cdktf.listMapper(processgroupNamingConditionsConditionAzureSkuToTerraform, true)(struct!.azureSku),
    azure_sku_comparision: cdktf.listMapper(processgroupNamingConditionsConditionAzureSkuComparisionToTerraform, true)(struct!.azureSkuComparision),
    base_comparison_basic: cdktf.listMapper(processgroupNamingConditionsConditionBaseComparisonBasicToTerraform, true)(struct!.baseComparisonBasic),
    base_condition_key: cdktf.listMapper(processgroupNamingConditionsConditionBaseConditionKeyToTerraform, true)(struct!.baseConditionKey),
    bitness: cdktf.listMapper(processgroupNamingConditionsConditionBitnessToTerraform, true)(struct!.bitness),
    bitness_comparision: cdktf.listMapper(processgroupNamingConditionsConditionBitnessComparisionToTerraform, true)(struct!.bitnessComparision),
    cloud_type: cdktf.listMapper(processgroupNamingConditionsConditionCloudTypeToTerraform, true)(struct!.cloudType),
    cloud_type_comparison: cdktf.listMapper(processgroupNamingConditionsConditionCloudTypeComparisonToTerraform, true)(struct!.cloudTypeComparison),
    comparison: cdktf.listMapper(processgroupNamingConditionsConditionComparisonToTerraform, true)(struct!.comparison),
    custom_application_type: cdktf.listMapper(processgroupNamingConditionsConditionCustomApplicationTypeToTerraform, true)(struct!.customApplicationType),
    custom_application_type_comparison: cdktf.listMapper(processgroupNamingConditionsConditionCustomApplicationTypeComparisonToTerraform, true)(struct!.customApplicationTypeComparison),
    custom_host_metadata: cdktf.listMapper(processgroupNamingConditionsConditionCustomHostMetadataToTerraform, true)(struct!.customHostMetadata),
    custom_host_metadata_condition_key: cdktf.listMapper(processgroupNamingConditionsConditionCustomHostMetadataConditionKeyToTerraform, true)(struct!.customHostMetadataConditionKey),
    custom_process_metadata: cdktf.listMapper(processgroupNamingConditionsConditionCustomProcessMetadataToTerraform, true)(struct!.customProcessMetadata),
    custom_process_metadata_condition_key: cdktf.listMapper(processgroupNamingConditionsConditionCustomProcessMetadataConditionKeyToTerraform, true)(struct!.customProcessMetadataConditionKey),
    database_topology: cdktf.listMapper(processgroupNamingConditionsConditionDatabaseTopologyToTerraform, true)(struct!.databaseTopology),
    database_topology_comparison: cdktf.listMapper(processgroupNamingConditionsConditionDatabaseTopologyComparisonToTerraform, true)(struct!.databaseTopologyComparison),
    dcrum_decoder: cdktf.listMapper(processgroupNamingConditionsConditionDcrumDecoderToTerraform, true)(struct!.dcrumDecoder),
    dcrum_decoder_comparison: cdktf.listMapper(processgroupNamingConditionsConditionDcrumDecoderComparisonToTerraform, true)(struct!.dcrumDecoderComparison),
    entity: cdktf.listMapper(processgroupNamingConditionsConditionEntityToTerraform, true)(struct!.entity),
    entity_id_comparison: cdktf.listMapper(processgroupNamingConditionsConditionEntityIdComparisonToTerraform, true)(struct!.entityIdComparison),
    host_tech: cdktf.listMapper(processgroupNamingConditionsConditionHostTechToTerraform, true)(struct!.hostTech),
    hypervisor: cdktf.listMapper(processgroupNamingConditionsConditionHypervisorToTerraform, true)(struct!.hypervisor),
    hypervisor_type_comparision: cdktf.listMapper(processgroupNamingConditionsConditionHypervisorTypeComparisionToTerraform, true)(struct!.hypervisorTypeComparision),
    indexed_name: cdktf.listMapper(processgroupNamingConditionsConditionIndexedNameToTerraform, true)(struct!.indexedName),
    indexed_name_comparison: cdktf.listMapper(processgroupNamingConditionsConditionIndexedNameComparisonToTerraform, true)(struct!.indexedNameComparison),
    indexed_string: cdktf.listMapper(processgroupNamingConditionsConditionIndexedStringToTerraform, true)(struct!.indexedString),
    indexed_string_comparison: cdktf.listMapper(processgroupNamingConditionsConditionIndexedStringComparisonToTerraform, true)(struct!.indexedStringComparison),
    indexed_tag: cdktf.listMapper(processgroupNamingConditionsConditionIndexedTagToTerraform, true)(struct!.indexedTag),
    indexed_tag_comparison: cdktf.listMapper(processgroupNamingConditionsConditionIndexedTagComparisonToTerraform, true)(struct!.indexedTagComparison),
    integer: cdktf.listMapper(processgroupNamingConditionsConditionIntegerToTerraform, true)(struct!.integer),
    integer_comparison: cdktf.listMapper(processgroupNamingConditionsConditionIntegerComparisonToTerraform, true)(struct!.integerComparison),
    ipaddress: cdktf.listMapper(processgroupNamingConditionsConditionIpaddressToTerraform, true)(struct!.ipaddress),
    ipaddress_comparison: cdktf.listMapper(processgroupNamingConditionsConditionIpaddressComparisonToTerraform, true)(struct!.ipaddressComparison),
    key: cdktf.listMapper(processgroupNamingConditionsConditionKeyToTerraform, true)(struct!.key),
    mobile_platform: cdktf.listMapper(processgroupNamingConditionsConditionMobilePlatformToTerraform, true)(struct!.mobilePlatform),
    mobile_platform_comparison: cdktf.listMapper(processgroupNamingConditionsConditionMobilePlatformComparisonToTerraform, true)(struct!.mobilePlatformComparison),
    os_arch: cdktf.listMapper(processgroupNamingConditionsConditionOsArchToTerraform, true)(struct!.osArch),
    os_type: cdktf.listMapper(processgroupNamingConditionsConditionOsTypeToTerraform, true)(struct!.osType),
    osarchitecture_comparison: cdktf.listMapper(processgroupNamingConditionsConditionOsarchitectureComparisonToTerraform, true)(struct!.osarchitectureComparison),
    ostype_comparison: cdktf.listMapper(processgroupNamingConditionsConditionOstypeComparisonToTerraform, true)(struct!.ostypeComparison),
    paas_type: cdktf.listMapper(processgroupNamingConditionsConditionPaasTypeToTerraform, true)(struct!.paasType),
    paas_type_comparison: cdktf.listMapper(processgroupNamingConditionsConditionPaasTypeComparisonToTerraform, true)(struct!.paasTypeComparison),
    process_metadata: cdktf.listMapper(processgroupNamingConditionsConditionProcessMetadataToTerraform, true)(struct!.processMetadata),
    process_metadata_condition_key: cdktf.listMapper(processgroupNamingConditionsConditionProcessMetadataConditionKeyToTerraform, true)(struct!.processMetadataConditionKey),
    service_topology: cdktf.listMapper(processgroupNamingConditionsConditionServiceTopologyToTerraform, true)(struct!.serviceTopology),
    service_topology_comparison: cdktf.listMapper(processgroupNamingConditionsConditionServiceTopologyComparisonToTerraform, true)(struct!.serviceTopologyComparison),
    service_type: cdktf.listMapper(processgroupNamingConditionsConditionServiceTypeToTerraform, true)(struct!.serviceType),
    service_type_comparison: cdktf.listMapper(processgroupNamingConditionsConditionServiceTypeComparisonToTerraform, true)(struct!.serviceTypeComparison),
    simple_host_tech_comparison: cdktf.listMapper(processgroupNamingConditionsConditionSimpleHostTechComparisonToTerraform, true)(struct!.simpleHostTechComparison),
    simple_tech_comparison: cdktf.listMapper(processgroupNamingConditionsConditionSimpleTechComparisonToTerraform, true)(struct!.simpleTechComparison),
    string: cdktf.listMapper(processgroupNamingConditionsConditionStringToTerraform, true)(struct!.string),
    string_comparison: cdktf.listMapper(processgroupNamingConditionsConditionStringComparisonToTerraform, true)(struct!.stringComparison),
    string_condition_key: cdktf.listMapper(processgroupNamingConditionsConditionStringConditionKeyToTerraform, true)(struct!.stringConditionKey),
    string_key: cdktf.listMapper(processgroupNamingConditionsConditionStringKeyToTerraform, true)(struct!.stringKey),
    synthetic_engine: cdktf.listMapper(processgroupNamingConditionsConditionSyntheticEngineToTerraform, true)(struct!.syntheticEngine),
    synthetic_engine_type_comparison: cdktf.listMapper(processgroupNamingConditionsConditionSyntheticEngineTypeComparisonToTerraform, true)(struct!.syntheticEngineTypeComparison),
    tag: cdktf.listMapper(processgroupNamingConditionsConditionTagToTerraform, true)(struct!.tag),
    tag_comparison: cdktf.listMapper(processgroupNamingConditionsConditionTagComparisonToTerraform, true)(struct!.tagComparison),
    tech: cdktf.listMapper(processgroupNamingConditionsConditionTechToTerraform, true)(struct!.tech),
  }
}


export function processgroupNamingConditionsConditionToHclTerraform(struct?: ProcessgroupNamingConditionsCondition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unknowns: {
      value: cdktf.stringToHclTerraform(struct!.unknowns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_type: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionApplicationTypeToHclTerraform, true)(struct!.applicationType),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionApplicationTypeList",
    },
    application_type_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionApplicationTypeComparisonToHclTerraform, true)(struct!.applicationTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionApplicationTypeComparisonList",
    },
    azure_compute_mode: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionAzureComputeModeToHclTerraform, true)(struct!.azureComputeMode),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionAzureComputeModeList",
    },
    azure_compute_mode_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionAzureComputeModeComparisonToHclTerraform, true)(struct!.azureComputeModeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionAzureComputeModeComparisonList",
    },
    azure_sku: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionAzureSkuToHclTerraform, true)(struct!.azureSku),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionAzureSkuList",
    },
    azure_sku_comparision: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionAzureSkuComparisionToHclTerraform, true)(struct!.azureSkuComparision),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionAzureSkuComparisionList",
    },
    base_comparison_basic: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionBaseComparisonBasicToHclTerraform, true)(struct!.baseComparisonBasic),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionBaseComparisonBasicList",
    },
    base_condition_key: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionBaseConditionKeyToHclTerraform, true)(struct!.baseConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionBaseConditionKeyList",
    },
    bitness: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionBitnessToHclTerraform, true)(struct!.bitness),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionBitnessList",
    },
    bitness_comparision: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionBitnessComparisionToHclTerraform, true)(struct!.bitnessComparision),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionBitnessComparisionList",
    },
    cloud_type: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionCloudTypeToHclTerraform, true)(struct!.cloudType),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionCloudTypeList",
    },
    cloud_type_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionCloudTypeComparisonToHclTerraform, true)(struct!.cloudTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionCloudTypeComparisonList",
    },
    comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionComparisonToHclTerraform, true)(struct!.comparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionComparisonList",
    },
    custom_application_type: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionCustomApplicationTypeToHclTerraform, true)(struct!.customApplicationType),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionCustomApplicationTypeList",
    },
    custom_application_type_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionCustomApplicationTypeComparisonToHclTerraform, true)(struct!.customApplicationTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionCustomApplicationTypeComparisonList",
    },
    custom_host_metadata: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionCustomHostMetadataToHclTerraform, true)(struct!.customHostMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionCustomHostMetadataList",
    },
    custom_host_metadata_condition_key: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionCustomHostMetadataConditionKeyToHclTerraform, true)(struct!.customHostMetadataConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyList",
    },
    custom_process_metadata: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionCustomProcessMetadataToHclTerraform, true)(struct!.customProcessMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionCustomProcessMetadataList",
    },
    custom_process_metadata_condition_key: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionCustomProcessMetadataConditionKeyToHclTerraform, true)(struct!.customProcessMetadataConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyList",
    },
    database_topology: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionDatabaseTopologyToHclTerraform, true)(struct!.databaseTopology),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionDatabaseTopologyList",
    },
    database_topology_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionDatabaseTopologyComparisonToHclTerraform, true)(struct!.databaseTopologyComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionDatabaseTopologyComparisonList",
    },
    dcrum_decoder: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionDcrumDecoderToHclTerraform, true)(struct!.dcrumDecoder),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionDcrumDecoderList",
    },
    dcrum_decoder_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionDcrumDecoderComparisonToHclTerraform, true)(struct!.dcrumDecoderComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionDcrumDecoderComparisonList",
    },
    entity: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionEntityToHclTerraform, true)(struct!.entity),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionEntityList",
    },
    entity_id_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionEntityIdComparisonToHclTerraform, true)(struct!.entityIdComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionEntityIdComparisonList",
    },
    host_tech: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionHostTechToHclTerraform, true)(struct!.hostTech),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionHostTechList",
    },
    hypervisor: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionHypervisorToHclTerraform, true)(struct!.hypervisor),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionHypervisorList",
    },
    hypervisor_type_comparision: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionHypervisorTypeComparisionToHclTerraform, true)(struct!.hypervisorTypeComparision),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionHypervisorTypeComparisionList",
    },
    indexed_name: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionIndexedNameToHclTerraform, true)(struct!.indexedName),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionIndexedNameList",
    },
    indexed_name_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionIndexedNameComparisonToHclTerraform, true)(struct!.indexedNameComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionIndexedNameComparisonList",
    },
    indexed_string: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionIndexedStringToHclTerraform, true)(struct!.indexedString),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionIndexedStringList",
    },
    indexed_string_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionIndexedStringComparisonToHclTerraform, true)(struct!.indexedStringComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionIndexedStringComparisonList",
    },
    indexed_tag: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionIndexedTagToHclTerraform, true)(struct!.indexedTag),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionIndexedTagList",
    },
    indexed_tag_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionIndexedTagComparisonToHclTerraform, true)(struct!.indexedTagComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionIndexedTagComparisonList",
    },
    integer: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionIntegerToHclTerraform, true)(struct!.integer),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionIntegerList",
    },
    integer_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionIntegerComparisonToHclTerraform, true)(struct!.integerComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionIntegerComparisonList",
    },
    ipaddress: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionIpaddressToHclTerraform, true)(struct!.ipaddress),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionIpaddressList",
    },
    ipaddress_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionIpaddressComparisonToHclTerraform, true)(struct!.ipaddressComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionIpaddressComparisonList",
    },
    key: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionKeyToHclTerraform, true)(struct!.key),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionKeyList",
    },
    mobile_platform: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionMobilePlatformToHclTerraform, true)(struct!.mobilePlatform),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionMobilePlatformList",
    },
    mobile_platform_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionMobilePlatformComparisonToHclTerraform, true)(struct!.mobilePlatformComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionMobilePlatformComparisonList",
    },
    os_arch: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionOsArchToHclTerraform, true)(struct!.osArch),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionOsArchList",
    },
    os_type: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionOsTypeToHclTerraform, true)(struct!.osType),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionOsTypeList",
    },
    osarchitecture_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionOsarchitectureComparisonToHclTerraform, true)(struct!.osarchitectureComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionOsarchitectureComparisonList",
    },
    ostype_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionOstypeComparisonToHclTerraform, true)(struct!.ostypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionOstypeComparisonList",
    },
    paas_type: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionPaasTypeToHclTerraform, true)(struct!.paasType),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionPaasTypeList",
    },
    paas_type_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionPaasTypeComparisonToHclTerraform, true)(struct!.paasTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionPaasTypeComparisonList",
    },
    process_metadata: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionProcessMetadataToHclTerraform, true)(struct!.processMetadata),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionProcessMetadataList",
    },
    process_metadata_condition_key: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionProcessMetadataConditionKeyToHclTerraform, true)(struct!.processMetadataConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionProcessMetadataConditionKeyList",
    },
    service_topology: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionServiceTopologyToHclTerraform, true)(struct!.serviceTopology),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionServiceTopologyList",
    },
    service_topology_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionServiceTopologyComparisonToHclTerraform, true)(struct!.serviceTopologyComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionServiceTopologyComparisonList",
    },
    service_type: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionServiceTypeToHclTerraform, true)(struct!.serviceType),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionServiceTypeList",
    },
    service_type_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionServiceTypeComparisonToHclTerraform, true)(struct!.serviceTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionServiceTypeComparisonList",
    },
    simple_host_tech_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionSimpleHostTechComparisonToHclTerraform, true)(struct!.simpleHostTechComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionSimpleHostTechComparisonList",
    },
    simple_tech_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionSimpleTechComparisonToHclTerraform, true)(struct!.simpleTechComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionSimpleTechComparisonList",
    },
    string: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionStringToHclTerraform, true)(struct!.string),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionStringList",
    },
    string_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionStringComparisonToHclTerraform, true)(struct!.stringComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionStringComparisonList",
    },
    string_condition_key: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionStringConditionKeyToHclTerraform, true)(struct!.stringConditionKey),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionStringConditionKeyList",
    },
    string_key: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionStringKeyToHclTerraform, true)(struct!.stringKey),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionStringKeyList",
    },
    synthetic_engine: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionSyntheticEngineToHclTerraform, true)(struct!.syntheticEngine),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionSyntheticEngineList",
    },
    synthetic_engine_type_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionSyntheticEngineTypeComparisonToHclTerraform, true)(struct!.syntheticEngineTypeComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionSyntheticEngineTypeComparisonList",
    },
    tag: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionTagToHclTerraform, true)(struct!.tag),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionTagList",
    },
    tag_comparison: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionTagComparisonToHclTerraform, true)(struct!.tagComparison),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionTagComparisonList",
    },
    tech: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionTechToHclTerraform, true)(struct!.tech),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionTechList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditionsCondition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unknowns !== undefined) {
      hasAnyValues = true;
      internalValueResult.unknowns = this._unknowns;
    }
    if (this._applicationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationType = this._applicationType?.internalValue;
    }
    if (this._applicationTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationTypeComparison = this._applicationTypeComparison?.internalValue;
    }
    if (this._azureComputeMode?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureComputeMode = this._azureComputeMode?.internalValue;
    }
    if (this._azureComputeModeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureComputeModeComparison = this._azureComputeModeComparison?.internalValue;
    }
    if (this._azureSku?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSku = this._azureSku?.internalValue;
    }
    if (this._azureSkuComparision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.azureSkuComparision = this._azureSkuComparision?.internalValue;
    }
    if (this._baseComparisonBasic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseComparisonBasic = this._baseComparisonBasic?.internalValue;
    }
    if (this._baseConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.baseConditionKey = this._baseConditionKey?.internalValue;
    }
    if (this._bitness?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitness = this._bitness?.internalValue;
    }
    if (this._bitnessComparision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitnessComparision = this._bitnessComparision?.internalValue;
    }
    if (this._cloudType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudType = this._cloudType?.internalValue;
    }
    if (this._cloudTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudTypeComparison = this._cloudTypeComparison?.internalValue;
    }
    if (this._comparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.comparison = this._comparison?.internalValue;
    }
    if (this._customApplicationType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customApplicationType = this._customApplicationType?.internalValue;
    }
    if (this._customApplicationTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customApplicationTypeComparison = this._customApplicationTypeComparison?.internalValue;
    }
    if (this._customHostMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHostMetadata = this._customHostMetadata?.internalValue;
    }
    if (this._customHostMetadataConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customHostMetadataConditionKey = this._customHostMetadataConditionKey?.internalValue;
    }
    if (this._customProcessMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProcessMetadata = this._customProcessMetadata?.internalValue;
    }
    if (this._customProcessMetadataConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customProcessMetadataConditionKey = this._customProcessMetadataConditionKey?.internalValue;
    }
    if (this._databaseTopology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseTopology = this._databaseTopology?.internalValue;
    }
    if (this._databaseTopologyComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseTopologyComparison = this._databaseTopologyComparison?.internalValue;
    }
    if (this._dcrumDecoder?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcrumDecoder = this._dcrumDecoder?.internalValue;
    }
    if (this._dcrumDecoderComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dcrumDecoderComparison = this._dcrumDecoderComparison?.internalValue;
    }
    if (this._entity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entity = this._entity?.internalValue;
    }
    if (this._entityIdComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityIdComparison = this._entityIdComparison?.internalValue;
    }
    if (this._hostTech?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostTech = this._hostTech?.internalValue;
    }
    if (this._hypervisor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisor = this._hypervisor?.internalValue;
    }
    if (this._hypervisorTypeComparision?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hypervisorTypeComparision = this._hypervisorTypeComparision?.internalValue;
    }
    if (this._indexedName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedName = this._indexedName?.internalValue;
    }
    if (this._indexedNameComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedNameComparison = this._indexedNameComparison?.internalValue;
    }
    if (this._indexedString?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedString = this._indexedString?.internalValue;
    }
    if (this._indexedStringComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedStringComparison = this._indexedStringComparison?.internalValue;
    }
    if (this._indexedTag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedTag = this._indexedTag?.internalValue;
    }
    if (this._indexedTagComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexedTagComparison = this._indexedTagComparison?.internalValue;
    }
    if (this._integer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integer = this._integer?.internalValue;
    }
    if (this._integerComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.integerComparison = this._integerComparison?.internalValue;
    }
    if (this._ipaddress?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddress = this._ipaddress?.internalValue;
    }
    if (this._ipaddressComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddressComparison = this._ipaddressComparison?.internalValue;
    }
    if (this._key?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key?.internalValue;
    }
    if (this._mobilePlatform?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilePlatform = this._mobilePlatform?.internalValue;
    }
    if (this._mobilePlatformComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilePlatformComparison = this._mobilePlatformComparison?.internalValue;
    }
    if (this._osArch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osArch = this._osArch?.internalValue;
    }
    if (this._osType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType?.internalValue;
    }
    if (this._osarchitectureComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.osarchitectureComparison = this._osarchitectureComparison?.internalValue;
    }
    if (this._ostypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ostypeComparison = this._ostypeComparison?.internalValue;
    }
    if (this._paasType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paasType = this._paasType?.internalValue;
    }
    if (this._paasTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.paasTypeComparison = this._paasTypeComparison?.internalValue;
    }
    if (this._processMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processMetadata = this._processMetadata?.internalValue;
    }
    if (this._processMetadataConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.processMetadataConditionKey = this._processMetadataConditionKey?.internalValue;
    }
    if (this._serviceTopology?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTopology = this._serviceTopology?.internalValue;
    }
    if (this._serviceTopologyComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTopologyComparison = this._serviceTopologyComparison?.internalValue;
    }
    if (this._serviceType?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType?.internalValue;
    }
    if (this._serviceTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTypeComparison = this._serviceTypeComparison?.internalValue;
    }
    if (this._simpleHostTechComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleHostTechComparison = this._simpleHostTechComparison?.internalValue;
    }
    if (this._simpleTechComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.simpleTechComparison = this._simpleTechComparison?.internalValue;
    }
    if (this._string?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string?.internalValue;
    }
    if (this._stringComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringComparison = this._stringComparison?.internalValue;
    }
    if (this._stringConditionKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringConditionKey = this._stringConditionKey?.internalValue;
    }
    if (this._stringKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stringKey = this._stringKey?.internalValue;
    }
    if (this._syntheticEngine?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntheticEngine = this._syntheticEngine?.internalValue;
    }
    if (this._syntheticEngineTypeComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syntheticEngineTypeComparison = this._syntheticEngineTypeComparison?.internalValue;
    }
    if (this._tag?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag?.internalValue;
    }
    if (this._tagComparison?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagComparison = this._tagComparison?.internalValue;
    }
    if (this._tech?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tech = this._tech?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditionsCondition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._unknowns = undefined;
      this._applicationType.internalValue = undefined;
      this._applicationTypeComparison.internalValue = undefined;
      this._azureComputeMode.internalValue = undefined;
      this._azureComputeModeComparison.internalValue = undefined;
      this._azureSku.internalValue = undefined;
      this._azureSkuComparision.internalValue = undefined;
      this._baseComparisonBasic.internalValue = undefined;
      this._baseConditionKey.internalValue = undefined;
      this._bitness.internalValue = undefined;
      this._bitnessComparision.internalValue = undefined;
      this._cloudType.internalValue = undefined;
      this._cloudTypeComparison.internalValue = undefined;
      this._comparison.internalValue = undefined;
      this._customApplicationType.internalValue = undefined;
      this._customApplicationTypeComparison.internalValue = undefined;
      this._customHostMetadata.internalValue = undefined;
      this._customHostMetadataConditionKey.internalValue = undefined;
      this._customProcessMetadata.internalValue = undefined;
      this._customProcessMetadataConditionKey.internalValue = undefined;
      this._databaseTopology.internalValue = undefined;
      this._databaseTopologyComparison.internalValue = undefined;
      this._dcrumDecoder.internalValue = undefined;
      this._dcrumDecoderComparison.internalValue = undefined;
      this._entity.internalValue = undefined;
      this._entityIdComparison.internalValue = undefined;
      this._hostTech.internalValue = undefined;
      this._hypervisor.internalValue = undefined;
      this._hypervisorTypeComparision.internalValue = undefined;
      this._indexedName.internalValue = undefined;
      this._indexedNameComparison.internalValue = undefined;
      this._indexedString.internalValue = undefined;
      this._indexedStringComparison.internalValue = undefined;
      this._indexedTag.internalValue = undefined;
      this._indexedTagComparison.internalValue = undefined;
      this._integer.internalValue = undefined;
      this._integerComparison.internalValue = undefined;
      this._ipaddress.internalValue = undefined;
      this._ipaddressComparison.internalValue = undefined;
      this._key.internalValue = undefined;
      this._mobilePlatform.internalValue = undefined;
      this._mobilePlatformComparison.internalValue = undefined;
      this._osArch.internalValue = undefined;
      this._osType.internalValue = undefined;
      this._osarchitectureComparison.internalValue = undefined;
      this._ostypeComparison.internalValue = undefined;
      this._paasType.internalValue = undefined;
      this._paasTypeComparison.internalValue = undefined;
      this._processMetadata.internalValue = undefined;
      this._processMetadataConditionKey.internalValue = undefined;
      this._serviceTopology.internalValue = undefined;
      this._serviceTopologyComparison.internalValue = undefined;
      this._serviceType.internalValue = undefined;
      this._serviceTypeComparison.internalValue = undefined;
      this._simpleHostTechComparison.internalValue = undefined;
      this._simpleTechComparison.internalValue = undefined;
      this._string.internalValue = undefined;
      this._stringComparison.internalValue = undefined;
      this._stringConditionKey.internalValue = undefined;
      this._stringKey.internalValue = undefined;
      this._syntheticEngine.internalValue = undefined;
      this._syntheticEngineTypeComparison.internalValue = undefined;
      this._tag.internalValue = undefined;
      this._tagComparison.internalValue = undefined;
      this._tech.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._unknowns = value.unknowns;
      this._applicationType.internalValue = value.applicationType;
      this._applicationTypeComparison.internalValue = value.applicationTypeComparison;
      this._azureComputeMode.internalValue = value.azureComputeMode;
      this._azureComputeModeComparison.internalValue = value.azureComputeModeComparison;
      this._azureSku.internalValue = value.azureSku;
      this._azureSkuComparision.internalValue = value.azureSkuComparision;
      this._baseComparisonBasic.internalValue = value.baseComparisonBasic;
      this._baseConditionKey.internalValue = value.baseConditionKey;
      this._bitness.internalValue = value.bitness;
      this._bitnessComparision.internalValue = value.bitnessComparision;
      this._cloudType.internalValue = value.cloudType;
      this._cloudTypeComparison.internalValue = value.cloudTypeComparison;
      this._comparison.internalValue = value.comparison;
      this._customApplicationType.internalValue = value.customApplicationType;
      this._customApplicationTypeComparison.internalValue = value.customApplicationTypeComparison;
      this._customHostMetadata.internalValue = value.customHostMetadata;
      this._customHostMetadataConditionKey.internalValue = value.customHostMetadataConditionKey;
      this._customProcessMetadata.internalValue = value.customProcessMetadata;
      this._customProcessMetadataConditionKey.internalValue = value.customProcessMetadataConditionKey;
      this._databaseTopology.internalValue = value.databaseTopology;
      this._databaseTopologyComparison.internalValue = value.databaseTopologyComparison;
      this._dcrumDecoder.internalValue = value.dcrumDecoder;
      this._dcrumDecoderComparison.internalValue = value.dcrumDecoderComparison;
      this._entity.internalValue = value.entity;
      this._entityIdComparison.internalValue = value.entityIdComparison;
      this._hostTech.internalValue = value.hostTech;
      this._hypervisor.internalValue = value.hypervisor;
      this._hypervisorTypeComparision.internalValue = value.hypervisorTypeComparision;
      this._indexedName.internalValue = value.indexedName;
      this._indexedNameComparison.internalValue = value.indexedNameComparison;
      this._indexedString.internalValue = value.indexedString;
      this._indexedStringComparison.internalValue = value.indexedStringComparison;
      this._indexedTag.internalValue = value.indexedTag;
      this._indexedTagComparison.internalValue = value.indexedTagComparison;
      this._integer.internalValue = value.integer;
      this._integerComparison.internalValue = value.integerComparison;
      this._ipaddress.internalValue = value.ipaddress;
      this._ipaddressComparison.internalValue = value.ipaddressComparison;
      this._key.internalValue = value.key;
      this._mobilePlatform.internalValue = value.mobilePlatform;
      this._mobilePlatformComparison.internalValue = value.mobilePlatformComparison;
      this._osArch.internalValue = value.osArch;
      this._osType.internalValue = value.osType;
      this._osarchitectureComparison.internalValue = value.osarchitectureComparison;
      this._ostypeComparison.internalValue = value.ostypeComparison;
      this._paasType.internalValue = value.paasType;
      this._paasTypeComparison.internalValue = value.paasTypeComparison;
      this._processMetadata.internalValue = value.processMetadata;
      this._processMetadataConditionKey.internalValue = value.processMetadataConditionKey;
      this._serviceTopology.internalValue = value.serviceTopology;
      this._serviceTopologyComparison.internalValue = value.serviceTopologyComparison;
      this._serviceType.internalValue = value.serviceType;
      this._serviceTypeComparison.internalValue = value.serviceTypeComparison;
      this._simpleHostTechComparison.internalValue = value.simpleHostTechComparison;
      this._simpleTechComparison.internalValue = value.simpleTechComparison;
      this._string.internalValue = value.string;
      this._stringComparison.internalValue = value.stringComparison;
      this._stringConditionKey.internalValue = value.stringConditionKey;
      this._stringKey.internalValue = value.stringKey;
      this._syntheticEngine.internalValue = value.syntheticEngine;
      this._syntheticEngineTypeComparison.internalValue = value.syntheticEngineTypeComparison;
      this._tag.internalValue = value.tag;
      this._tagComparison.internalValue = value.tagComparison;
      this._tech.internalValue = value.tech;
    }
  }

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // application_type - computed: false, optional: true, required: false
  private _applicationType = new ProcessgroupNamingConditionsConditionApplicationTypeList(this, "application_type", false);
  public get applicationType() {
    return this._applicationType;
  }
  public putApplicationType(value: ProcessgroupNamingConditionsConditionApplicationType[] | cdktf.IResolvable) {
    this._applicationType.internalValue = value;
  }
  public resetApplicationType() {
    this._applicationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeInput() {
    return this._applicationType.internalValue;
  }

  // application_type_comparison - computed: false, optional: true, required: false
  private _applicationTypeComparison = new ProcessgroupNamingConditionsConditionApplicationTypeComparisonList(this, "application_type_comparison", false);
  public get applicationTypeComparison() {
    return this._applicationTypeComparison;
  }
  public putApplicationTypeComparison(value: ProcessgroupNamingConditionsConditionApplicationTypeComparison[] | cdktf.IResolvable) {
    this._applicationTypeComparison.internalValue = value;
  }
  public resetApplicationTypeComparison() {
    this._applicationTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationTypeComparisonInput() {
    return this._applicationTypeComparison.internalValue;
  }

  // azure_compute_mode - computed: false, optional: true, required: false
  private _azureComputeMode = new ProcessgroupNamingConditionsConditionAzureComputeModeList(this, "azure_compute_mode", false);
  public get azureComputeMode() {
    return this._azureComputeMode;
  }
  public putAzureComputeMode(value: ProcessgroupNamingConditionsConditionAzureComputeMode[] | cdktf.IResolvable) {
    this._azureComputeMode.internalValue = value;
  }
  public resetAzureComputeMode() {
    this._azureComputeMode.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureComputeModeInput() {
    return this._azureComputeMode.internalValue;
  }

  // azure_compute_mode_comparison - computed: false, optional: true, required: false
  private _azureComputeModeComparison = new ProcessgroupNamingConditionsConditionAzureComputeModeComparisonList(this, "azure_compute_mode_comparison", false);
  public get azureComputeModeComparison() {
    return this._azureComputeModeComparison;
  }
  public putAzureComputeModeComparison(value: ProcessgroupNamingConditionsConditionAzureComputeModeComparison[] | cdktf.IResolvable) {
    this._azureComputeModeComparison.internalValue = value;
  }
  public resetAzureComputeModeComparison() {
    this._azureComputeModeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureComputeModeComparisonInput() {
    return this._azureComputeModeComparison.internalValue;
  }

  // azure_sku - computed: false, optional: true, required: false
  private _azureSku = new ProcessgroupNamingConditionsConditionAzureSkuList(this, "azure_sku", false);
  public get azureSku() {
    return this._azureSku;
  }
  public putAzureSku(value: ProcessgroupNamingConditionsConditionAzureSku[] | cdktf.IResolvable) {
    this._azureSku.internalValue = value;
  }
  public resetAzureSku() {
    this._azureSku.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSkuInput() {
    return this._azureSku.internalValue;
  }

  // azure_sku_comparision - computed: false, optional: true, required: false
  private _azureSkuComparision = new ProcessgroupNamingConditionsConditionAzureSkuComparisionList(this, "azure_sku_comparision", false);
  public get azureSkuComparision() {
    return this._azureSkuComparision;
  }
  public putAzureSkuComparision(value: ProcessgroupNamingConditionsConditionAzureSkuComparision[] | cdktf.IResolvable) {
    this._azureSkuComparision.internalValue = value;
  }
  public resetAzureSkuComparision() {
    this._azureSkuComparision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureSkuComparisionInput() {
    return this._azureSkuComparision.internalValue;
  }

  // base_comparison_basic - computed: false, optional: true, required: false
  private _baseComparisonBasic = new ProcessgroupNamingConditionsConditionBaseComparisonBasicList(this, "base_comparison_basic", false);
  public get baseComparisonBasic() {
    return this._baseComparisonBasic;
  }
  public putBaseComparisonBasic(value: ProcessgroupNamingConditionsConditionBaseComparisonBasic[] | cdktf.IResolvable) {
    this._baseComparisonBasic.internalValue = value;
  }
  public resetBaseComparisonBasic() {
    this._baseComparisonBasic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseComparisonBasicInput() {
    return this._baseComparisonBasic.internalValue;
  }

  // base_condition_key - computed: false, optional: true, required: false
  private _baseConditionKey = new ProcessgroupNamingConditionsConditionBaseConditionKeyList(this, "base_condition_key", false);
  public get baseConditionKey() {
    return this._baseConditionKey;
  }
  public putBaseConditionKey(value: ProcessgroupNamingConditionsConditionBaseConditionKey[] | cdktf.IResolvable) {
    this._baseConditionKey.internalValue = value;
  }
  public resetBaseConditionKey() {
    this._baseConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseConditionKeyInput() {
    return this._baseConditionKey.internalValue;
  }

  // bitness - computed: false, optional: true, required: false
  private _bitness = new ProcessgroupNamingConditionsConditionBitnessList(this, "bitness", false);
  public get bitness() {
    return this._bitness;
  }
  public putBitness(value: ProcessgroupNamingConditionsConditionBitness[] | cdktf.IResolvable) {
    this._bitness.internalValue = value;
  }
  public resetBitness() {
    this._bitness.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitnessInput() {
    return this._bitness.internalValue;
  }

  // bitness_comparision - computed: false, optional: true, required: false
  private _bitnessComparision = new ProcessgroupNamingConditionsConditionBitnessComparisionList(this, "bitness_comparision", false);
  public get bitnessComparision() {
    return this._bitnessComparision;
  }
  public putBitnessComparision(value: ProcessgroupNamingConditionsConditionBitnessComparision[] | cdktf.IResolvable) {
    this._bitnessComparision.internalValue = value;
  }
  public resetBitnessComparision() {
    this._bitnessComparision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitnessComparisionInput() {
    return this._bitnessComparision.internalValue;
  }

  // cloud_type - computed: false, optional: true, required: false
  private _cloudType = new ProcessgroupNamingConditionsConditionCloudTypeList(this, "cloud_type", false);
  public get cloudType() {
    return this._cloudType;
  }
  public putCloudType(value: ProcessgroupNamingConditionsConditionCloudType[] | cdktf.IResolvable) {
    this._cloudType.internalValue = value;
  }
  public resetCloudType() {
    this._cloudType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeInput() {
    return this._cloudType.internalValue;
  }

  // cloud_type_comparison - computed: false, optional: true, required: false
  private _cloudTypeComparison = new ProcessgroupNamingConditionsConditionCloudTypeComparisonList(this, "cloud_type_comparison", false);
  public get cloudTypeComparison() {
    return this._cloudTypeComparison;
  }
  public putCloudTypeComparison(value: ProcessgroupNamingConditionsConditionCloudTypeComparison[] | cdktf.IResolvable) {
    this._cloudTypeComparison.internalValue = value;
  }
  public resetCloudTypeComparison() {
    this._cloudTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudTypeComparisonInput() {
    return this._cloudTypeComparison.internalValue;
  }

  // comparison - computed: false, optional: true, required: false
  private _comparison = new ProcessgroupNamingConditionsConditionComparisonList(this, "comparison", false);
  public get comparison() {
    return this._comparison;
  }
  public putComparison(value: ProcessgroupNamingConditionsConditionComparison[] | cdktf.IResolvable) {
    this._comparison.internalValue = value;
  }
  public resetComparison() {
    this._comparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonInput() {
    return this._comparison.internalValue;
  }

  // custom_application_type - computed: false, optional: true, required: false
  private _customApplicationType = new ProcessgroupNamingConditionsConditionCustomApplicationTypeList(this, "custom_application_type", false);
  public get customApplicationType() {
    return this._customApplicationType;
  }
  public putCustomApplicationType(value: ProcessgroupNamingConditionsConditionCustomApplicationType[] | cdktf.IResolvable) {
    this._customApplicationType.internalValue = value;
  }
  public resetCustomApplicationType() {
    this._customApplicationType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customApplicationTypeInput() {
    return this._customApplicationType.internalValue;
  }

  // custom_application_type_comparison - computed: false, optional: true, required: false
  private _customApplicationTypeComparison = new ProcessgroupNamingConditionsConditionCustomApplicationTypeComparisonList(this, "custom_application_type_comparison", false);
  public get customApplicationTypeComparison() {
    return this._customApplicationTypeComparison;
  }
  public putCustomApplicationTypeComparison(value: ProcessgroupNamingConditionsConditionCustomApplicationTypeComparison[] | cdktf.IResolvable) {
    this._customApplicationTypeComparison.internalValue = value;
  }
  public resetCustomApplicationTypeComparison() {
    this._customApplicationTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customApplicationTypeComparisonInput() {
    return this._customApplicationTypeComparison.internalValue;
  }

  // custom_host_metadata - computed: false, optional: true, required: false
  private _customHostMetadata = new ProcessgroupNamingConditionsConditionCustomHostMetadataList(this, "custom_host_metadata", false);
  public get customHostMetadata() {
    return this._customHostMetadata;
  }
  public putCustomHostMetadata(value: ProcessgroupNamingConditionsConditionCustomHostMetadata[] | cdktf.IResolvable) {
    this._customHostMetadata.internalValue = value;
  }
  public resetCustomHostMetadata() {
    this._customHostMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostMetadataInput() {
    return this._customHostMetadata.internalValue;
  }

  // custom_host_metadata_condition_key - computed: false, optional: true, required: false
  private _customHostMetadataConditionKey = new ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKeyList(this, "custom_host_metadata_condition_key", false);
  public get customHostMetadataConditionKey() {
    return this._customHostMetadataConditionKey;
  }
  public putCustomHostMetadataConditionKey(value: ProcessgroupNamingConditionsConditionCustomHostMetadataConditionKey[] | cdktf.IResolvable) {
    this._customHostMetadataConditionKey.internalValue = value;
  }
  public resetCustomHostMetadataConditionKey() {
    this._customHostMetadataConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customHostMetadataConditionKeyInput() {
    return this._customHostMetadataConditionKey.internalValue;
  }

  // custom_process_metadata - computed: false, optional: true, required: false
  private _customProcessMetadata = new ProcessgroupNamingConditionsConditionCustomProcessMetadataList(this, "custom_process_metadata", false);
  public get customProcessMetadata() {
    return this._customProcessMetadata;
  }
  public putCustomProcessMetadata(value: ProcessgroupNamingConditionsConditionCustomProcessMetadata[] | cdktf.IResolvable) {
    this._customProcessMetadata.internalValue = value;
  }
  public resetCustomProcessMetadata() {
    this._customProcessMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProcessMetadataInput() {
    return this._customProcessMetadata.internalValue;
  }

  // custom_process_metadata_condition_key - computed: false, optional: true, required: false
  private _customProcessMetadataConditionKey = new ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKeyList(this, "custom_process_metadata_condition_key", false);
  public get customProcessMetadataConditionKey() {
    return this._customProcessMetadataConditionKey;
  }
  public putCustomProcessMetadataConditionKey(value: ProcessgroupNamingConditionsConditionCustomProcessMetadataConditionKey[] | cdktf.IResolvable) {
    this._customProcessMetadataConditionKey.internalValue = value;
  }
  public resetCustomProcessMetadataConditionKey() {
    this._customProcessMetadataConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customProcessMetadataConditionKeyInput() {
    return this._customProcessMetadataConditionKey.internalValue;
  }

  // database_topology - computed: false, optional: true, required: false
  private _databaseTopology = new ProcessgroupNamingConditionsConditionDatabaseTopologyList(this, "database_topology", false);
  public get databaseTopology() {
    return this._databaseTopology;
  }
  public putDatabaseTopology(value: ProcessgroupNamingConditionsConditionDatabaseTopology[] | cdktf.IResolvable) {
    this._databaseTopology.internalValue = value;
  }
  public resetDatabaseTopology() {
    this._databaseTopology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTopologyInput() {
    return this._databaseTopology.internalValue;
  }

  // database_topology_comparison - computed: false, optional: true, required: false
  private _databaseTopologyComparison = new ProcessgroupNamingConditionsConditionDatabaseTopologyComparisonList(this, "database_topology_comparison", false);
  public get databaseTopologyComparison() {
    return this._databaseTopologyComparison;
  }
  public putDatabaseTopologyComparison(value: ProcessgroupNamingConditionsConditionDatabaseTopologyComparison[] | cdktf.IResolvable) {
    this._databaseTopologyComparison.internalValue = value;
  }
  public resetDatabaseTopologyComparison() {
    this._databaseTopologyComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTopologyComparisonInput() {
    return this._databaseTopologyComparison.internalValue;
  }

  // dcrum_decoder - computed: false, optional: true, required: false
  private _dcrumDecoder = new ProcessgroupNamingConditionsConditionDcrumDecoderList(this, "dcrum_decoder", false);
  public get dcrumDecoder() {
    return this._dcrumDecoder;
  }
  public putDcrumDecoder(value: ProcessgroupNamingConditionsConditionDcrumDecoder[] | cdktf.IResolvable) {
    this._dcrumDecoder.internalValue = value;
  }
  public resetDcrumDecoder() {
    this._dcrumDecoder.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcrumDecoderInput() {
    return this._dcrumDecoder.internalValue;
  }

  // dcrum_decoder_comparison - computed: false, optional: true, required: false
  private _dcrumDecoderComparison = new ProcessgroupNamingConditionsConditionDcrumDecoderComparisonList(this, "dcrum_decoder_comparison", false);
  public get dcrumDecoderComparison() {
    return this._dcrumDecoderComparison;
  }
  public putDcrumDecoderComparison(value: ProcessgroupNamingConditionsConditionDcrumDecoderComparison[] | cdktf.IResolvable) {
    this._dcrumDecoderComparison.internalValue = value;
  }
  public resetDcrumDecoderComparison() {
    this._dcrumDecoderComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dcrumDecoderComparisonInput() {
    return this._dcrumDecoderComparison.internalValue;
  }

  // entity - computed: false, optional: true, required: false
  private _entity = new ProcessgroupNamingConditionsConditionEntityList(this, "entity", false);
  public get entity() {
    return this._entity;
  }
  public putEntity(value: ProcessgroupNamingConditionsConditionEntity[] | cdktf.IResolvable) {
    this._entity.internalValue = value;
  }
  public resetEntity() {
    this._entity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityInput() {
    return this._entity.internalValue;
  }

  // entity_id_comparison - computed: false, optional: true, required: false
  private _entityIdComparison = new ProcessgroupNamingConditionsConditionEntityIdComparisonList(this, "entity_id_comparison", false);
  public get entityIdComparison() {
    return this._entityIdComparison;
  }
  public putEntityIdComparison(value: ProcessgroupNamingConditionsConditionEntityIdComparison[] | cdktf.IResolvable) {
    this._entityIdComparison.internalValue = value;
  }
  public resetEntityIdComparison() {
    this._entityIdComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdComparisonInput() {
    return this._entityIdComparison.internalValue;
  }

  // host_tech - computed: false, optional: true, required: false
  private _hostTech = new ProcessgroupNamingConditionsConditionHostTechList(this, "host_tech", false);
  public get hostTech() {
    return this._hostTech;
  }
  public putHostTech(value: ProcessgroupNamingConditionsConditionHostTech[] | cdktf.IResolvable) {
    this._hostTech.internalValue = value;
  }
  public resetHostTech() {
    this._hostTech.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTechInput() {
    return this._hostTech.internalValue;
  }

  // hypervisor - computed: false, optional: true, required: false
  private _hypervisor = new ProcessgroupNamingConditionsConditionHypervisorList(this, "hypervisor", false);
  public get hypervisor() {
    return this._hypervisor;
  }
  public putHypervisor(value: ProcessgroupNamingConditionsConditionHypervisor[] | cdktf.IResolvable) {
    this._hypervisor.internalValue = value;
  }
  public resetHypervisor() {
    this._hypervisor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor.internalValue;
  }

  // hypervisor_type_comparision - computed: false, optional: true, required: false
  private _hypervisorTypeComparision = new ProcessgroupNamingConditionsConditionHypervisorTypeComparisionList(this, "hypervisor_type_comparision", false);
  public get hypervisorTypeComparision() {
    return this._hypervisorTypeComparision;
  }
  public putHypervisorTypeComparision(value: ProcessgroupNamingConditionsConditionHypervisorTypeComparision[] | cdktf.IResolvable) {
    this._hypervisorTypeComparision.internalValue = value;
  }
  public resetHypervisorTypeComparision() {
    this._hypervisorTypeComparision.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorTypeComparisionInput() {
    return this._hypervisorTypeComparision.internalValue;
  }

  // indexed_name - computed: false, optional: true, required: false
  private _indexedName = new ProcessgroupNamingConditionsConditionIndexedNameList(this, "indexed_name", false);
  public get indexedName() {
    return this._indexedName;
  }
  public putIndexedName(value: ProcessgroupNamingConditionsConditionIndexedName[] | cdktf.IResolvable) {
    this._indexedName.internalValue = value;
  }
  public resetIndexedName() {
    this._indexedName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedNameInput() {
    return this._indexedName.internalValue;
  }

  // indexed_name_comparison - computed: false, optional: true, required: false
  private _indexedNameComparison = new ProcessgroupNamingConditionsConditionIndexedNameComparisonList(this, "indexed_name_comparison", false);
  public get indexedNameComparison() {
    return this._indexedNameComparison;
  }
  public putIndexedNameComparison(value: ProcessgroupNamingConditionsConditionIndexedNameComparison[] | cdktf.IResolvable) {
    this._indexedNameComparison.internalValue = value;
  }
  public resetIndexedNameComparison() {
    this._indexedNameComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedNameComparisonInput() {
    return this._indexedNameComparison.internalValue;
  }

  // indexed_string - computed: false, optional: true, required: false
  private _indexedString = new ProcessgroupNamingConditionsConditionIndexedStringList(this, "indexed_string", false);
  public get indexedString() {
    return this._indexedString;
  }
  public putIndexedString(value: ProcessgroupNamingConditionsConditionIndexedString[] | cdktf.IResolvable) {
    this._indexedString.internalValue = value;
  }
  public resetIndexedString() {
    this._indexedString.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedStringInput() {
    return this._indexedString.internalValue;
  }

  // indexed_string_comparison - computed: false, optional: true, required: false
  private _indexedStringComparison = new ProcessgroupNamingConditionsConditionIndexedStringComparisonList(this, "indexed_string_comparison", false);
  public get indexedStringComparison() {
    return this._indexedStringComparison;
  }
  public putIndexedStringComparison(value: ProcessgroupNamingConditionsConditionIndexedStringComparison[] | cdktf.IResolvable) {
    this._indexedStringComparison.internalValue = value;
  }
  public resetIndexedStringComparison() {
    this._indexedStringComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedStringComparisonInput() {
    return this._indexedStringComparison.internalValue;
  }

  // indexed_tag - computed: false, optional: true, required: false
  private _indexedTag = new ProcessgroupNamingConditionsConditionIndexedTagList(this, "indexed_tag", false);
  public get indexedTag() {
    return this._indexedTag;
  }
  public putIndexedTag(value: ProcessgroupNamingConditionsConditionIndexedTag[] | cdktf.IResolvable) {
    this._indexedTag.internalValue = value;
  }
  public resetIndexedTag() {
    this._indexedTag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedTagInput() {
    return this._indexedTag.internalValue;
  }

  // indexed_tag_comparison - computed: false, optional: true, required: false
  private _indexedTagComparison = new ProcessgroupNamingConditionsConditionIndexedTagComparisonList(this, "indexed_tag_comparison", false);
  public get indexedTagComparison() {
    return this._indexedTagComparison;
  }
  public putIndexedTagComparison(value: ProcessgroupNamingConditionsConditionIndexedTagComparison[] | cdktf.IResolvable) {
    this._indexedTagComparison.internalValue = value;
  }
  public resetIndexedTagComparison() {
    this._indexedTagComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexedTagComparisonInput() {
    return this._indexedTagComparison.internalValue;
  }

  // integer - computed: false, optional: true, required: false
  private _integer = new ProcessgroupNamingConditionsConditionIntegerList(this, "integer", false);
  public get integer() {
    return this._integer;
  }
  public putInteger(value: ProcessgroupNamingConditionsConditionInteger[] | cdktf.IResolvable) {
    this._integer.internalValue = value;
  }
  public resetInteger() {
    this._integer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerInput() {
    return this._integer.internalValue;
  }

  // integer_comparison - computed: false, optional: true, required: false
  private _integerComparison = new ProcessgroupNamingConditionsConditionIntegerComparisonList(this, "integer_comparison", false);
  public get integerComparison() {
    return this._integerComparison;
  }
  public putIntegerComparison(value: ProcessgroupNamingConditionsConditionIntegerComparison[] | cdktf.IResolvable) {
    this._integerComparison.internalValue = value;
  }
  public resetIntegerComparison() {
    this._integerComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integerComparisonInput() {
    return this._integerComparison.internalValue;
  }

  // ipaddress - computed: false, optional: true, required: false
  private _ipaddress = new ProcessgroupNamingConditionsConditionIpaddressList(this, "ipaddress", false);
  public get ipaddress() {
    return this._ipaddress;
  }
  public putIpaddress(value: ProcessgroupNamingConditionsConditionIpaddress[] | cdktf.IResolvable) {
    this._ipaddress.internalValue = value;
  }
  public resetIpaddress() {
    this._ipaddress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress.internalValue;
  }

  // ipaddress_comparison - computed: false, optional: true, required: false
  private _ipaddressComparison = new ProcessgroupNamingConditionsConditionIpaddressComparisonList(this, "ipaddress_comparison", false);
  public get ipaddressComparison() {
    return this._ipaddressComparison;
  }
  public putIpaddressComparison(value: ProcessgroupNamingConditionsConditionIpaddressComparison[] | cdktf.IResolvable) {
    this._ipaddressComparison.internalValue = value;
  }
  public resetIpaddressComparison() {
    this._ipaddressComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressComparisonInput() {
    return this._ipaddressComparison.internalValue;
  }

  // key - computed: false, optional: true, required: false
  private _key = new ProcessgroupNamingConditionsConditionKeyList(this, "key", false);
  public get key() {
    return this._key;
  }
  public putKey(value: ProcessgroupNamingConditionsConditionKey[] | cdktf.IResolvable) {
    this._key.internalValue = value;
  }
  public resetKey() {
    this._key.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key.internalValue;
  }

  // mobile_platform - computed: false, optional: true, required: false
  private _mobilePlatform = new ProcessgroupNamingConditionsConditionMobilePlatformList(this, "mobile_platform", false);
  public get mobilePlatform() {
    return this._mobilePlatform;
  }
  public putMobilePlatform(value: ProcessgroupNamingConditionsConditionMobilePlatform[] | cdktf.IResolvable) {
    this._mobilePlatform.internalValue = value;
  }
  public resetMobilePlatform() {
    this._mobilePlatform.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePlatformInput() {
    return this._mobilePlatform.internalValue;
  }

  // mobile_platform_comparison - computed: false, optional: true, required: false
  private _mobilePlatformComparison = new ProcessgroupNamingConditionsConditionMobilePlatformComparisonList(this, "mobile_platform_comparison", false);
  public get mobilePlatformComparison() {
    return this._mobilePlatformComparison;
  }
  public putMobilePlatformComparison(value: ProcessgroupNamingConditionsConditionMobilePlatformComparison[] | cdktf.IResolvable) {
    this._mobilePlatformComparison.internalValue = value;
  }
  public resetMobilePlatformComparison() {
    this._mobilePlatformComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePlatformComparisonInput() {
    return this._mobilePlatformComparison.internalValue;
  }

  // os_arch - computed: false, optional: true, required: false
  private _osArch = new ProcessgroupNamingConditionsConditionOsArchList(this, "os_arch", false);
  public get osArch() {
    return this._osArch;
  }
  public putOsArch(value: ProcessgroupNamingConditionsConditionOsArch[] | cdktf.IResolvable) {
    this._osArch.internalValue = value;
  }
  public resetOsArch() {
    this._osArch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osArchInput() {
    return this._osArch.internalValue;
  }

  // os_type - computed: false, optional: true, required: false
  private _osType = new ProcessgroupNamingConditionsConditionOsTypeList(this, "os_type", false);
  public get osType() {
    return this._osType;
  }
  public putOsType(value: ProcessgroupNamingConditionsConditionOsType[] | cdktf.IResolvable) {
    this._osType.internalValue = value;
  }
  public resetOsType() {
    this._osType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType.internalValue;
  }

  // osarchitecture_comparison - computed: false, optional: true, required: false
  private _osarchitectureComparison = new ProcessgroupNamingConditionsConditionOsarchitectureComparisonList(this, "osarchitecture_comparison", false);
  public get osarchitectureComparison() {
    return this._osarchitectureComparison;
  }
  public putOsarchitectureComparison(value: ProcessgroupNamingConditionsConditionOsarchitectureComparison[] | cdktf.IResolvable) {
    this._osarchitectureComparison.internalValue = value;
  }
  public resetOsarchitectureComparison() {
    this._osarchitectureComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osarchitectureComparisonInput() {
    return this._osarchitectureComparison.internalValue;
  }

  // ostype_comparison - computed: false, optional: true, required: false
  private _ostypeComparison = new ProcessgroupNamingConditionsConditionOstypeComparisonList(this, "ostype_comparison", false);
  public get ostypeComparison() {
    return this._ostypeComparison;
  }
  public putOstypeComparison(value: ProcessgroupNamingConditionsConditionOstypeComparison[] | cdktf.IResolvable) {
    this._ostypeComparison.internalValue = value;
  }
  public resetOstypeComparison() {
    this._ostypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ostypeComparisonInput() {
    return this._ostypeComparison.internalValue;
  }

  // paas_type - computed: false, optional: true, required: false
  private _paasType = new ProcessgroupNamingConditionsConditionPaasTypeList(this, "paas_type", false);
  public get paasType() {
    return this._paasType;
  }
  public putPaasType(value: ProcessgroupNamingConditionsConditionPaasType[] | cdktf.IResolvable) {
    this._paasType.internalValue = value;
  }
  public resetPaasType() {
    this._paasType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paasTypeInput() {
    return this._paasType.internalValue;
  }

  // paas_type_comparison - computed: false, optional: true, required: false
  private _paasTypeComparison = new ProcessgroupNamingConditionsConditionPaasTypeComparisonList(this, "paas_type_comparison", false);
  public get paasTypeComparison() {
    return this._paasTypeComparison;
  }
  public putPaasTypeComparison(value: ProcessgroupNamingConditionsConditionPaasTypeComparison[] | cdktf.IResolvable) {
    this._paasTypeComparison.internalValue = value;
  }
  public resetPaasTypeComparison() {
    this._paasTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paasTypeComparisonInput() {
    return this._paasTypeComparison.internalValue;
  }

  // process_metadata - computed: false, optional: true, required: false
  private _processMetadata = new ProcessgroupNamingConditionsConditionProcessMetadataList(this, "process_metadata", false);
  public get processMetadata() {
    return this._processMetadata;
  }
  public putProcessMetadata(value: ProcessgroupNamingConditionsConditionProcessMetadata[] | cdktf.IResolvable) {
    this._processMetadata.internalValue = value;
  }
  public resetProcessMetadata() {
    this._processMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processMetadataInput() {
    return this._processMetadata.internalValue;
  }

  // process_metadata_condition_key - computed: false, optional: true, required: false
  private _processMetadataConditionKey = new ProcessgroupNamingConditionsConditionProcessMetadataConditionKeyList(this, "process_metadata_condition_key", false);
  public get processMetadataConditionKey() {
    return this._processMetadataConditionKey;
  }
  public putProcessMetadataConditionKey(value: ProcessgroupNamingConditionsConditionProcessMetadataConditionKey[] | cdktf.IResolvable) {
    this._processMetadataConditionKey.internalValue = value;
  }
  public resetProcessMetadataConditionKey() {
    this._processMetadataConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get processMetadataConditionKeyInput() {
    return this._processMetadataConditionKey.internalValue;
  }

  // service_topology - computed: false, optional: true, required: false
  private _serviceTopology = new ProcessgroupNamingConditionsConditionServiceTopologyList(this, "service_topology", false);
  public get serviceTopology() {
    return this._serviceTopology;
  }
  public putServiceTopology(value: ProcessgroupNamingConditionsConditionServiceTopology[] | cdktf.IResolvable) {
    this._serviceTopology.internalValue = value;
  }
  public resetServiceTopology() {
    this._serviceTopology.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTopologyInput() {
    return this._serviceTopology.internalValue;
  }

  // service_topology_comparison - computed: false, optional: true, required: false
  private _serviceTopologyComparison = new ProcessgroupNamingConditionsConditionServiceTopologyComparisonList(this, "service_topology_comparison", false);
  public get serviceTopologyComparison() {
    return this._serviceTopologyComparison;
  }
  public putServiceTopologyComparison(value: ProcessgroupNamingConditionsConditionServiceTopologyComparison[] | cdktf.IResolvable) {
    this._serviceTopologyComparison.internalValue = value;
  }
  public resetServiceTopologyComparison() {
    this._serviceTopologyComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTopologyComparisonInput() {
    return this._serviceTopologyComparison.internalValue;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType = new ProcessgroupNamingConditionsConditionServiceTypeList(this, "service_type", false);
  public get serviceType() {
    return this._serviceType;
  }
  public putServiceType(value: ProcessgroupNamingConditionsConditionServiceType[] | cdktf.IResolvable) {
    this._serviceType.internalValue = value;
  }
  public resetServiceType() {
    this._serviceType.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType.internalValue;
  }

  // service_type_comparison - computed: false, optional: true, required: false
  private _serviceTypeComparison = new ProcessgroupNamingConditionsConditionServiceTypeComparisonList(this, "service_type_comparison", false);
  public get serviceTypeComparison() {
    return this._serviceTypeComparison;
  }
  public putServiceTypeComparison(value: ProcessgroupNamingConditionsConditionServiceTypeComparison[] | cdktf.IResolvable) {
    this._serviceTypeComparison.internalValue = value;
  }
  public resetServiceTypeComparison() {
    this._serviceTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeComparisonInput() {
    return this._serviceTypeComparison.internalValue;
  }

  // simple_host_tech_comparison - computed: false, optional: true, required: false
  private _simpleHostTechComparison = new ProcessgroupNamingConditionsConditionSimpleHostTechComparisonList(this, "simple_host_tech_comparison", false);
  public get simpleHostTechComparison() {
    return this._simpleHostTechComparison;
  }
  public putSimpleHostTechComparison(value: ProcessgroupNamingConditionsConditionSimpleHostTechComparison[] | cdktf.IResolvable) {
    this._simpleHostTechComparison.internalValue = value;
  }
  public resetSimpleHostTechComparison() {
    this._simpleHostTechComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleHostTechComparisonInput() {
    return this._simpleHostTechComparison.internalValue;
  }

  // simple_tech_comparison - computed: false, optional: true, required: false
  private _simpleTechComparison = new ProcessgroupNamingConditionsConditionSimpleTechComparisonList(this, "simple_tech_comparison", false);
  public get simpleTechComparison() {
    return this._simpleTechComparison;
  }
  public putSimpleTechComparison(value: ProcessgroupNamingConditionsConditionSimpleTechComparison[] | cdktf.IResolvable) {
    this._simpleTechComparison.internalValue = value;
  }
  public resetSimpleTechComparison() {
    this._simpleTechComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simpleTechComparisonInput() {
    return this._simpleTechComparison.internalValue;
  }

  // string - computed: false, optional: true, required: false
  private _string = new ProcessgroupNamingConditionsConditionStringList(this, "string", false);
  public get string() {
    return this._string;
  }
  public putString(value: ProcessgroupNamingConditionsConditionString[] | cdktf.IResolvable) {
    this._string.internalValue = value;
  }
  public resetString() {
    this._string.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string.internalValue;
  }

  // string_comparison - computed: false, optional: true, required: false
  private _stringComparison = new ProcessgroupNamingConditionsConditionStringComparisonList(this, "string_comparison", false);
  public get stringComparison() {
    return this._stringComparison;
  }
  public putStringComparison(value: ProcessgroupNamingConditionsConditionStringComparison[] | cdktf.IResolvable) {
    this._stringComparison.internalValue = value;
  }
  public resetStringComparison() {
    this._stringComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringComparisonInput() {
    return this._stringComparison.internalValue;
  }

  // string_condition_key - computed: false, optional: true, required: false
  private _stringConditionKey = new ProcessgroupNamingConditionsConditionStringConditionKeyList(this, "string_condition_key", false);
  public get stringConditionKey() {
    return this._stringConditionKey;
  }
  public putStringConditionKey(value: ProcessgroupNamingConditionsConditionStringConditionKey[] | cdktf.IResolvable) {
    this._stringConditionKey.internalValue = value;
  }
  public resetStringConditionKey() {
    this._stringConditionKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringConditionKeyInput() {
    return this._stringConditionKey.internalValue;
  }

  // string_key - computed: false, optional: true, required: false
  private _stringKey = new ProcessgroupNamingConditionsConditionStringKeyList(this, "string_key", false);
  public get stringKey() {
    return this._stringKey;
  }
  public putStringKey(value: ProcessgroupNamingConditionsConditionStringKey[] | cdktf.IResolvable) {
    this._stringKey.internalValue = value;
  }
  public resetStringKey() {
    this._stringKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringKeyInput() {
    return this._stringKey.internalValue;
  }

  // synthetic_engine - computed: false, optional: true, required: false
  private _syntheticEngine = new ProcessgroupNamingConditionsConditionSyntheticEngineList(this, "synthetic_engine", false);
  public get syntheticEngine() {
    return this._syntheticEngine;
  }
  public putSyntheticEngine(value: ProcessgroupNamingConditionsConditionSyntheticEngine[] | cdktf.IResolvable) {
    this._syntheticEngine.internalValue = value;
  }
  public resetSyntheticEngine() {
    this._syntheticEngine.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticEngineInput() {
    return this._syntheticEngine.internalValue;
  }

  // synthetic_engine_type_comparison - computed: false, optional: true, required: false
  private _syntheticEngineTypeComparison = new ProcessgroupNamingConditionsConditionSyntheticEngineTypeComparisonList(this, "synthetic_engine_type_comparison", false);
  public get syntheticEngineTypeComparison() {
    return this._syntheticEngineTypeComparison;
  }
  public putSyntheticEngineTypeComparison(value: ProcessgroupNamingConditionsConditionSyntheticEngineTypeComparison[] | cdktf.IResolvable) {
    this._syntheticEngineTypeComparison.internalValue = value;
  }
  public resetSyntheticEngineTypeComparison() {
    this._syntheticEngineTypeComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syntheticEngineTypeComparisonInput() {
    return this._syntheticEngineTypeComparison.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new ProcessgroupNamingConditionsConditionTagList(this, "tag", false);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ProcessgroupNamingConditionsConditionTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // tag_comparison - computed: false, optional: true, required: false
  private _tagComparison = new ProcessgroupNamingConditionsConditionTagComparisonList(this, "tag_comparison", false);
  public get tagComparison() {
    return this._tagComparison;
  }
  public putTagComparison(value: ProcessgroupNamingConditionsConditionTagComparison[] | cdktf.IResolvable) {
    this._tagComparison.internalValue = value;
  }
  public resetTagComparison() {
    this._tagComparison.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagComparisonInput() {
    return this._tagComparison.internalValue;
  }

  // tech - computed: false, optional: true, required: false
  private _tech = new ProcessgroupNamingConditionsConditionTechList(this, "tech", false);
  public get tech() {
    return this._tech;
  }
  public putTech(value: ProcessgroupNamingConditionsConditionTech[] | cdktf.IResolvable) {
    this._tech.internalValue = value;
  }
  public resetTech() {
    this._tech.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techInput() {
    return this._tech.internalValue;
  }
}

export class ProcessgroupNamingConditionsConditionList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditionsCondition[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsConditionOutputReference {
    return new ProcessgroupNamingConditionsConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProcessgroupNamingConditions {
  /**
  * condition block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#condition ProcessgroupNaming#condition}
  */
  readonly condition?: ProcessgroupNamingConditionsCondition[] | cdktf.IResolvable;
}

export function processgroupNamingConditionsToTerraform(struct?: ProcessgroupNamingConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.listMapper(processgroupNamingConditionsConditionToTerraform, true)(struct!.condition),
  }
}


export function processgroupNamingConditionsToHclTerraform(struct?: ProcessgroupNamingConditions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    condition: {
      value: cdktf.listMapperHcl(processgroupNamingConditionsConditionToHclTerraform, true)(struct!.condition),
      isBlock: true,
      type: "list",
      storageClassType: "ProcessgroupNamingConditionsConditionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProcessgroupNamingConditionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProcessgroupNamingConditions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._condition?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProcessgroupNamingConditions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._condition.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._condition.internalValue = value.condition;
    }
  }

  // condition - computed: false, optional: true, required: false
  private _condition = new ProcessgroupNamingConditionsConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
  public putCondition(value: ProcessgroupNamingConditionsCondition[] | cdktf.IResolvable) {
    this._condition.internalValue = value;
  }
  public resetCondition() {
    this._condition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition.internalValue;
  }
}

export class ProcessgroupNamingConditionsList extends cdktf.ComplexList {
  public internalValue? : ProcessgroupNamingConditions[] | cdktf.IResolvable

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
  public get(index: number): ProcessgroupNamingConditionsOutputReference {
    return new ProcessgroupNamingConditionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming dynatrace_processgroup_naming}
*/
export class ProcessgroupNaming extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_processgroup_naming";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProcessgroupNaming resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProcessgroupNaming to import
  * @param importFromId The id of the existing ProcessgroupNaming that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProcessgroupNaming to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_processgroup_naming", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/processgroup_naming dynatrace_processgroup_naming} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProcessgroupNamingConfig
  */
  public constructor(scope: Construct, id: string, config: ProcessgroupNamingConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_processgroup_naming',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._format = config.format;
    this._id = config.id;
    this._name = config.name;
    this._unknowns = config.unknowns;
    this._conditions.internalValue = config.conditions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // format - computed: false, optional: false, required: true
  private _format?: string; 
  public get format() {
    return this.getStringAttribute('format');
  }
  public set format(value: string) {
    this._format = value;
  }
  // Temporarily expose input value. Use with caution.
  public get formatInput() {
    return this._format;
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

  // unknowns - computed: false, optional: true, required: false
  private _unknowns?: string; 
  public get unknowns() {
    return this.getStringAttribute('unknowns');
  }
  public set unknowns(value: string) {
    this._unknowns = value;
  }
  public resetUnknowns() {
    this._unknowns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownsInput() {
    return this._unknowns;
  }

  // conditions - computed: false, optional: true, required: false
  private _conditions = new ProcessgroupNamingConditionsList(this, "conditions", false);
  public get conditions() {
    return this._conditions;
  }
  public putConditions(value: ProcessgroupNamingConditions[] | cdktf.IResolvable) {
    this._conditions.internalValue = value;
  }
  public resetConditions() {
    this._conditions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionsInput() {
    return this._conditions.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      format: cdktf.stringToTerraform(this._format),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      unknowns: cdktf.stringToTerraform(this._unknowns),
      conditions: cdktf.listMapper(processgroupNamingConditionsToTerraform, true)(this._conditions.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      format: {
        value: cdktf.stringToHclTerraform(this._format),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unknowns: {
        value: cdktf.stringToHclTerraform(this._unknowns),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conditions: {
        value: cdktf.listMapperHcl(processgroupNamingConditionsToHclTerraform, true)(this._conditions.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProcessgroupNamingConditionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
